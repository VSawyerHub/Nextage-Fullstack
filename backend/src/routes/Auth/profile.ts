import { Router, Request, Response } from 'express';
import { authenticateToken } from '../../middleware/auth';
import prisma from '../../lib/prisma';

const router = Router();

router.get('/me', authenticateToken, async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            res.status(401).json({ message: 'Authentication required' });
            return;
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                username: true,
                email: true,
                name: true,
                image: true,
                role: true,
                createdAt: true,
                // Remove updatedAt as it's causing the type error
            }
        });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.json(user);
    } catch (error) {
        console.error('Profile fetch error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update user profile (protected route)
router.patch('/me', authenticateToken, async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            res.status(401).json({ message: 'Authentication required' });
            return;
        }

        const { name, image } = req.body;

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                name,
                image
            },
            select: {
                id: true,
                username: true,
                email: true,
                name: true,
                image: true,
                role: true
            }
        });

        res.json(updatedUser);
    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get public user profile by username
router.get('/profile/:username', async (req: Request, res: Response) => {
    try {
        const { username } = req.params;

        const user = await prisma.user.findUnique({
            where: { username },
            select: {
                id: true,
                username: true,
                name: true,
                image: true,
                // Don't include email, password, or sensitive data in public profile
            }
        });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.json(user);
    } catch (error) {
        console.error('Profile fetch error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;