import { Router, Request, Response } from 'express';
import prisma from '../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateAccessToken, generateRefreshToken, refreshAccessToken, authenticateToken, RefreshTokenError } from '../../middleware/auth';
import rateLimit from 'express-rate-limit';
import { check, validationResult } from 'express-validator';

interface JwtPayload {
    id: string;
    email: string;
    role: string;
}

const router = Router();

// Register a new user
router.post('/register', [
    check('username')
        .isString()
        .trim()
        .isLength({ min: 3, max: 12 })
        .withMessage('Username must be between 3 and 12 characters')
        .matches(/^[a-zA-Z0-9_]+$/)
        .withMessage('Username can only contain letters, numbers and underscores'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Valid email is required'),
    check('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const { username, email, password } = req.body;

        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email },
                    { username }
                ]
            }
        });
        if (existingUser) {
            res.status(400).json({
                message: existingUser.email === email
                    ? 'Email already in use'
                    : 'Username already taken'
            });
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create user
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                name: username,
                hashedPassword,
                role: 'USER',
            }
        });

        // Generate tokens
        const accessToken = generateAccessToken({
            id: newUser.id,
            email: newUser.email || '',
            role: newUser.role
        });
        const refreshToken = generateRefreshToken({
            id: newUser.id,
            email: newUser.email || '',
            role: newUser.role
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
            },
            accessToken,
            refreshToken
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Error registering user' });
    }
});

// Login user
router.post('/login', [
    check('email').isEmail().normalizeEmail(), // Changed body to check
    check('password').notEmpty() // Changed body to check
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const { email, password } = req.body;

        // Find user
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user || !user.hashedPassword) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        // Generate tokens
        const accessToken = generateAccessToken({
            id: user.id,
            email: user.email || '',
            role: user.role
        });
        const refreshToken = generateRefreshToken({
            id: user.id,
            email: user.email || '',
            role: user.role
        });

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            },
            accessToken,
            refreshToken
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Error during login' });
    }
});

// Apply rate limiter to routes
const authLimiter = rateLimit({
    limit: 10,                     // Changed from 'max'
    windowMs: 15 * 60 * 1000,      // This should still work in v7
    message: { message: 'Too many authentication attempts, please try again later' }
});


// Apply rate limiter to specific routes instead of using app directly
router.use('/login', authLimiter);

// Logout endpoint
router.post('/logout', authenticateToken, async (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            res.status(400).json({ message: 'Refresh token is required' });
            return;
        }

        try {
            // Verify the token and get the payload (fix the type issue with the secret)
            const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as jwt.Secret) as JwtPayload;

            // Find the token record using the user ID from the token
            const tokenRecord = await prisma.refreshToken.findFirst({
                where: {
                    token: refreshToken,
                    userId: decoded.id
                }
            });

            if (!tokenRecord) {
                res.status(404).json({ message: 'Refresh token not found' });
                return;
            }

            // Mark it as revoked
            await prisma.refreshToken.update({
                where: { id: tokenRecord.id },
                data: { revokedAt: new Date() }
            });

            res.status(200).json({ message: 'Logged out successfully' });
        } catch (error) {
            // If token verification fails
            if (error instanceof jwt.JsonWebTokenError) {
                res.status(401).json({ message: 'Invalid refresh token' });
                return;
            }
        }
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Error during logout' });
    }
});


router.post('/refresh-token', async (req: Request, res: Response) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        res.status(400).json({ message: 'Refresh token is required' });
        return;
    }

    try {
        const newAccessToken = await refreshAccessToken(refreshToken);
        res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
        console.error('Token refresh error:', error);
        // Use specific error message from RefreshTokenError
        const message = error instanceof RefreshTokenError
            ? error.message
            : 'Invalid or expired refresh token';
        res.status(401).json({ message });
    }
});

// Get current user profile
router.get('/me', authenticateToken, async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user!.id },
            select: {
                id: true,
                username: true,
                email: true,
                name: true,
                image: true,
                role: true,
                createdAt: true
            }
        });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Profile fetch error:', error);
        res.status(500).json({ message: 'Error fetching user profile' });
    }
});

router.get('/profile/:username', async (req: Request, res: Response) => {
    try {
        const { username } = req.params;

        const user = await prisma.user.findUnique({
            where: { username },
            select: {
                id: true,
                username: true,
                email: false, // Don't expose email to public
                name: true,
                image: true,
                role: true,
                createdAt: true
            }
        });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Profile fetch error:', error);
        res.status(500).json({ message: 'Error fetching user profile' });
    }
});

export default router;