import { Router, Request, Response } from 'express';
import prisma from '../../lib/prisma';
import bcrypt from 'bcrypt';
import { generateAccessToken, generateRefreshToken } from '../../middleware/auth';
import { check, validationResult } from 'express-validator';

const router = Router();

// Login route
router.post('/login', [
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').notEmpty().withMessage('Password is required')
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ message: errors.array()[0].msg });
        return;
    }

    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user || !user.password) {
            res.status(401).json({ message: 'Invalid email or password' });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid email or password' });
            return;
        }

        // Generate JWT tokens
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

        // Store refresh token in database
        await prisma.refreshToken.create({
            data: {
                token: refreshToken,
                userId: user.id,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
            }
        });

        res.json({
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                name: user.name,
                image: user.image,
                role: user.role
            },
            accessToken,
            refreshToken
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
});

// Register route
router.post('/register', [
    check('username')
        .isLength({ min: 3, max: 15 })
        .withMessage('Username must be between 3 and 15 characters')
        .matches(/^[a-zA-Z0-9_]+$/)
        .withMessage('Username can only contain letters, numbers and underscores'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 6 characters')
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ message: errors.array()[0].msg });
        return;
    }

    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: email || '' },
                    { username }
                ]
            }
        });

        if (existingUser) {
            if (existingUser.email === email) {
                res.status(400).json({ message: 'Email already in use' });
                return;
            }
            res.status(400).json({ message: 'Username already taken' });
            return;
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                username,
                email: email || '',
                password: hashedPassword,
                role: 'USER'
            }
        });

        res.status(201).json({
            message: 'User registered successfully',
            userId: user.id
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
});

// Refresh token route - for token renewal
router.post('/refresh-token', async (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            res.status(401).json({ message: 'Refresh token required' });
            return;
        }

        // Find the token in the database
        const tokenDoc = await prisma.refreshToken.findUnique({
            where: { token: refreshToken },
            include: { user: true }
        });

        // Check if token exists and is not expired
        if (!tokenDoc || tokenDoc.expiresAt < new Date()) {
            if (tokenDoc) {
                // Remove expired token
                await prisma.refreshToken.delete({
                    where: { id: tokenDoc.id }
                });
            }
            res.status(401).json({ message: 'Invalid or expired refresh token' });
            return;
        }

        // Generate new access token
        const accessToken = generateAccessToken({
            id: tokenDoc.user.id,
            email: tokenDoc.user.email || '',
            role: tokenDoc.user.role
        });

        res.json({ accessToken });
    } catch (error) {
        console.error('Token refresh error:', error);
        res.status(500).json({ message: 'Server error during token refresh' });
    }
});

// Logout route - to invalidate refresh tokens
router.post('/logout', async (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            res.status(400).json({ message: 'Refresh token required' });
            return;
        }

        // Delete the refresh token
        await prisma.refreshToken.deleteMany({
            where: { token: refreshToken }
        });

        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Server error during logout' });
    }
});

export default router;