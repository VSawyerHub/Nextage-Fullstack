import { Router, Request, Response } from 'express';
import prisma from '../../lib/prisma';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const router = Router();

// Generate reset token
router.post('/forgot-password', [
    body('email').isEmail().normalizeEmail()
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const { email } = req.body;

        // Find user
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            // Don't leak information, always return success
            res.status(200).json({
                message: 'If your email is registered, you will receive a password reset link'
            });
            return;
        }

        // Generate token
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenHash = crypto.createHash('sha256').update(resetToken).digest('hex');

        // Store token in database
        const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

        await prisma.verificationToken.upsert({
            where: {
                identifier_token: {
                    identifier: user.id,
                    token: 'password-reset'
                }
            },
            update: {
                token: resetTokenHash,
                expires: resetTokenExpiry
            },
            create: {
                identifier: user.id,
                token: resetTokenHash,
                expires: resetTokenExpiry
            }
        });

        res.status(200).json({
            message: 'If your email is registered, you will receive a password reset link',
            ...(process.env.NODE_ENV === 'development' && { resetToken })
        });
    } catch (error) {
        console.error('Password reset request error:', error);
        res.status(500).json({ message: 'Error processing password reset request' });
    }
});

// Reset password with token
router.post('/reset-password', [
    body('token').isString().isLength({ min: 32 }).withMessage('Invalid token'),
    body('email').isEmail().normalizeEmail(),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number')
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const { token, email, password } = req.body;

        // Find user
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            res.status(400).json({ message: 'Invalid or expired token' });
            return;
        }

        // Hash the token from the request
        const resetTokenHash = crypto.createHash('sha256').update(token).digest('hex');

        // Find the verification token
        const verificationToken = await prisma.verificationToken.findUnique({
            where: {
                identifier_token: {
                    identifier: user.id,
                    token: 'password-reset'
                }
            }
        });

        if (!verificationToken || verificationToken.token !== resetTokenHash || new Date() > verificationToken.expires) {
            res.status(400).json({ message: 'Invalid or expired token' });
            return;
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Update user's password
        await prisma.user.update({
            where: { id: user.id },
            data: { hashedPassword }
        });

        // Delete the verification token
        await prisma.verificationToken.delete({
            where: {
                identifier_token: {
                    identifier: user.id,
                    token: 'password-reset'
                }
            }
        });

        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        console.error('Password reset error:', error);
        res.status(500).json({ message: 'Error resetting password' });
    }
});

export default router;