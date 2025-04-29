import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import gamesRoutes from './routes/IGDB/IGDBgames';
import SteamRoutes from './routes/Steam/Steam';
import user from './routes/user';
import logger from './logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT ||3000;
const prisma = new PrismaClient();

app.use(helmet());
app.use(express.json());
app.use('/api/users', user);
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    logger.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Middleware
app.use(cors({
    origin: 'http://localhost:5000', // Directly specify the allowed origin
    credentials: true
}));

// Routes
app.use('/api/games', gamesRoutes);
app.use('/api/steam', SteamRoutes);

app.get('/test-db', async (_req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Database connection failed' });
    }
});

app.get('/api/test', (_req, res) => {
    res.json({ message: 'Backend is connected successfully!'});
});

// Basic route
app.get('/api', (_req, res) => {
    res.json({ message: 'IGDB API Integration is running' });
});

// Error handling middleware
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('Unhandled error:', err.stack); // Include stack trace
    res.status(500).json({
        error: 'Something went wrong',
        message: err.message  // Always show error message during development
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});