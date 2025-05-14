import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

enum AuthRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

interface JwtPayload {
    id: string;
    email: string;
    role: string;
    iat?: number;
    exp?: number;
}

// Extend Express Request with properly typed user property
declare global {
    namespace Express {
        // This extends the existing User interface rather than redefining it
        interface User {
            id: string;
            email: string;
            role: AuthRole;
        }
    }
}

// Environment variable validation
if (!process.env.JWT_SECRET) {
    console.error('FATAL ERROR: JWT_SECRET is not defined in environment variables');
    process.exit(1);
}

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || `${JWT_SECRET}_refresh`;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

// Generate access token
export const generateAccessToken = (payload: Omit<JwtPayload, 'iat' | 'exp'>) => {
    return jwt.sign(payload, JWT_SECRET as jwt.Secret, {
        expiresIn: JWT_EXPIRES_IN as any
    });
};

// Generate refresh token
export const generateRefreshToken = (payload: Omit<JwtPayload, 'iat' | 'exp'>) => {
    return jwt.sign(payload, JWT_REFRESH_SECRET as jwt.Secret, {
        expiresIn: JWT_REFRESH_EXPIRES_IN as any
    });
};

// Middleware to authenticate token
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN format

    if (!token) {
        res.status(401).json({ message: 'Access token is required' });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET as jwt.Secret) as JwtPayload;
        req.user = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role as AuthRole
        };
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: 'Token expired' });
            return;
        }
        res.status(403).json({ message: 'Invalid token' });
        return;
    }
};

// Middleware to check if user is admin
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        res.status(401).json({ message: 'Authentication required' });
        return;
    }

    if (req.user.role !== AuthRole.ADMIN) {
        res.status(403).json({ message: 'Admin privileges required' });
        return;
    }

    next();
};

// Validate refresh token and return new access token
export const refreshAccessToken = async (refreshToken: string) => {
    try {
        const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET as jwt.Secret) as JwtPayload;

        // Check if user still exists
        const user = await prisma.user.findUnique({
            where: { id: decoded.id }
        });

        if (!user) {
            throw new Error('User not found');
        }

        // Generate new access token
        return generateAccessToken({
            id: user.id,
            email: user.email || '',
            role: user.role
        });
    } catch (error) {
        throw error;
    }
};

export { AuthRole };