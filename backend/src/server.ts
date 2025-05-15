import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import session from 'express-session';
import passport from 'passport';
import logger from './logger';

// Import routes
import gamesRoutes from './routes/IGDB/IGDBgames';
import userRoutes from './routes/Auth/user';
import passResetRoutes from './routes/Auth/passReset';

// Import service configurations
import { configureSteamAuth } from './services/Auth/SteamAuth';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

/**
 * Configure middleware
 */
const configureMiddleware = () => {
    // Security middleware
    app.use(helmet());

    // Parse JSON bodies
    app.use(express.json());

    // Logging middleware
    app.use(morgan('combined', {
        stream: { write: message => logger.info(message.trim()) }
    }));

    // CORS configuration
    app.use(cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:5000',
        credentials: true
    }));

    // Session configuration
    app.use(session({
        secret: process.env.JWT_SECRET as string,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        }
    }));

    // Initialize Passport
    app.use(passport.initialize());
    app.use(passport.session());

// Rate limiting middleware
    const limiter = rateLimit({
        limit: 100,                    // Changed from 'max'
        windowMs: 15 * 60 * 1000,      // This should still work in v7
        standardHeaders: true,
        legacyHeaders: false,
    });

    app.use('/api', limiter);
};

/**
 * Configure API routes
 */
const configureRoutes = () => {
    // API routes
    app.use('/api/games', gamesRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/auth', passResetRoutes);

    // Health and test endpoints
    app.get('/api/test', (_req, res) => {
        res.json({ message: 'Backend is connected successfully!' });
    });

    app.get('/api', (_req, res) => {
        res.json({ message: 'IGDB API Integration is running' });
    });

    // Database test endpoint (consider removing in production)
    app.get('/test-db', async (_req: Request, res: Response) => {
        try {
            const users = await prisma.user.findMany();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Database connection failed' });
        }
    });
};

/**
 * Configure error handling
 */
const configureErrorHandling = () => {
    // Global error handler
    app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
        logger.error(`Unhandled error: ${err.message}`);
        logger.error(err.stack || '');

        res.status(500).json({
            error: 'Something went wrong',
            ...(process.env.NODE_ENV !== 'production' && { message: err.message })
        });
    });
};

/**
 * Start the server
 */
const startServer = () => {
    app.listen(PORT, () => {
        logger.info(`Server running on port ${PORT}`);
        console.log(`Server running on port ${PORT}`);
    });
};

/**
 * Initialize and start the application
 */
const initializeApp = async () => {
    try {
        // Configure authentication services
        configureSteamAuth();

        // Setup middleware
        configureMiddleware();

        // Setup routes
        configureRoutes();

        // Setup error handling (must be after routes)
        configureErrorHandling();

        // Start the server
        startServer();

        // Handle process shutdown
        process.on('SIGTERM', gracefulShutdown);
        process.on('SIGINT', gracefulShutdown);
    } catch (error) {
        logger.error('Failed to start server:', error);
        process.exit(1);
    }
};

/**
 * Graceful shutdown handler
 */
const gracefulShutdown = async () => {
    logger.info('Shutting down server gracefully...');

    try {
        // Close database connections
        await prisma.$disconnect();
        logger.info('Database connections closed');

        // Exit process
        process.exit(0);
    } catch (error) {
        logger.error('Error during shutdown:', error);
        process.exit(1);
    }
};

initializeApp().catch(error => {
    logger.error('Unhandled error during initialization:', error);
    process.exit(1);
});