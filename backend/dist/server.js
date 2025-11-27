"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("./lib/prisma"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const logger_1 = __importDefault(require("./logger"));
// Import routes
const IGDBgames_1 = __importDefault(require("./routes/IGDB/IGDBgames"));
const user_1 = __importDefault(require("./routes/Auth/user"));
const passReset_1 = __importDefault(require("./routes/Auth/passReset"));
const profile_1 = __importDefault(require("./routes/Auth/profile"));
// Load environment variables
dotenv_1.default.config();
// Initialize Express app
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
/**
 * Configure middleware
 */
const configureMiddleware = () => {
    // Security middleware
    app.use((0, helmet_1.default)());
    // Parse JSON bodies
    app.use(express_1.default.json());
    // Logging middleware
    app.use((0, morgan_1.default)('combined', {
        stream: { write: message => logger_1.default.info(message.trim()) }
    }));
    // CORS configuration
    app.use((0, cors_1.default)({
        origin: process.env.FRONTEND_URL || 'http://localhost:5000',
        credentials: true
    }));
    // Session configuration
    app.use((0, express_session_1.default)({
        secret: process.env.JWT_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        }
    }));
    // Initialize Passport
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    // Rate limiting middleware
    const limiter = (0, express_rate_limit_1.default)({
        limit: 100, // Changed from 'max'
        windowMs: 15 * 60 * 1000, // This should still work in v7
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
    app.use('/api/games', IGDBgames_1.default);
    app.use('/api/users', user_1.default);
    app.use('/api/auth', passReset_1.default);
    app.use('/api/profile', profile_1.default);
    // Add a specific route for NextAuth to validate credentials
    app.post('/api/auth/callback/credentials', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.redirect(307, '/api/users/login');
    }));
};
/**
 * Configure error handling
 */
const configureErrorHandling = () => {
    // Global error handler
    app.use((err, _req, res, _next) => {
        logger_1.default.error(`Unhandled error: ${err.message}`);
        logger_1.default.error(err.stack || '');
        res.status(500).json(Object.assign({ error: 'Something went wrong' }, (process.env.NODE_ENV !== 'production' && { message: err.message })));
    });
};
/**
 * Start the server
 */
const startServer = () => {
    app.listen(PORT, () => {
        logger_1.default.info(`Server running on port ${PORT}`);
        console.log(`Server running on port ${PORT}`);
    });
};
/**
 * Initialize and start the application
 */
const initializeApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
    }
    catch (error) {
        logger_1.default.error('Failed to start server:', error);
        process.exit(1);
    }
});
/**
 * Graceful shutdown handler
 */
const gracefulShutdown = () => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info('Shutting down server gracefully...');
    try {
        // Close database connections
        yield prisma_1.default.$disconnect();
        logger_1.default.info('Database connections closed');
        // Exit process
        process.exit(0);
    }
    catch (error) {
        logger_1.default.error('Error during shutdown:', error);
        process.exit(1);
    }
});
initializeApp().catch(error => {
    logger_1.default.error('Unhandled error during initialization:', error);
    process.exit(1);
});
exports.default = app;
