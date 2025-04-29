import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const { body, validationResult } = require('express-validator');

const router = Router();
const prisma = new PrismaClient();

// Example route for creating a user
router.post('/create', [
    body('username').isString().trim().escape().notEmpty().withMessage('Username is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const { username, email, password } = req.body;

        // Check if user with email already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            res.status(400).json({ message: 'User with this email already exists' });
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user with hashed password
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                name: username,
                role: 'USER',
                hashedPassword: hashedPassword // Use the hashedPassword field
            }
        });

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email
            }
        });
    } catch (error) {
        console.error('User creation error:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

export default router;