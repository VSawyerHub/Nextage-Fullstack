import { Request, Response } from 'express';
import { IGDBService } from '../services/IGDBsrvcs';

export class GamesController {
    static async searchGames(req: Request, res: Response): Promise<void> {
        try {
            const { query, limit } = req.query;

            if (!query || typeof query !== 'string') {
                res.status(400).json({ error: 'Search query is required' });
                return;
            }

            const limitNum = limit ? parseInt(limit as string) : 10;
            const games = await IGDBService.searchGames(query, limitNum);

            res.json(games);
        } catch (error) {
            console.error('Controller error searching games:', error);
            res.status(500).json({ error: 'Failed to search games' });
        }
    }

    static async getPopularGames(req: Request, res: Response): Promise<void> {
        try {
            const { limit } = req.query;
            const limitNum = limit ? parseInt(limit as string) : 10;

            const games = await IGDBService.getPopularGames(limitNum);
            res.json(games);
        } catch (error) {
            console.error('Controller error fetching popular games:', error);
            res.status(500).json({ error: 'Failed to fetch popular games' });
        }
    }

    static async getGameById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const gameId = parseInt(id);

            if (isNaN(gameId)) {
                res.status(400).json({ error: 'Invalid game ID' });
                return;
            }

            const game = await IGDBService.getGameById(gameId);
            res.json(game);
        } catch (error) {
            console.error('Controller error fetching game by ID:', error);
            if (error instanceof Error && error.message === 'Game not found') {
                res.status(404).json({ error: 'Game not found' });
                return;
            }
            res.status(500).json({ error: 'Failed to fetch game details' });
        }
    }

    static async getGameBySlug(req: Request, res: Response): Promise<void> {
        try {
            const { slug } = req.params;

            if (!slug) {
                res.status(400).json({ error: 'Invalid slug' });
                return;
            }

            const game = await IGDBService.getGameBySlug(slug);
            res.json(game);
        } catch (error) {
            console.error('Controller error fetching game by slug:', error);
            if (error instanceof Error && error.message === 'Game not found') {
                res.status(404).json({ error: 'Game not found' });
                return;
            }
            res.status(500).json({ error: 'Failed to fetch game details' });
        }
    }

}