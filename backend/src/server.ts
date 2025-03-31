import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import gamesRoutes from './routes/IGDBgames';

dotenv.config();

const app = express();
const PORT = process.env.PORT ||3000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5000', // Directly specify the allowed origin
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/games', gamesRoutes);

app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is connected successfully!'});
});

// Basic route
app.get('/api', (req, res) => {
    res.json({ message: 'IGDB API Integration is running' });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, _next: express.NextFunction) => {
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