import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import gamesRoutes from './routes/IGDBgames';

// Load environment variables
dotenv.config();

// Add this near the top of server.ts after dotenv.config()
console.log('Environment check:', {
    PORT: process.env.PORT,
    IGDB_API_URL: process.env.IGDB_API_URL,
    IGDB_CLIENT: process.env.IGDB_CLIENT ? 'Set' : 'Not set',
    IGDB_SECRET: process.env.IGDB_SECRET ? 'Set' : 'Not set'
});

const app = express();
const PORT = process.env.PORT ||3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/games', gamesRoutes);

app.get('/api/test', (req, res) => {
    res.json({ status: 'ok', message: 'Test endpoint working' });
});

// Basic route
app.get('/api', (req, res) => {
    res.json({ message: 'IGDB API Integration is running' });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response) => {
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