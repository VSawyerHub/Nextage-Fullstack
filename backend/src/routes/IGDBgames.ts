import express from 'express';
import { GamesController } from '../controller/IGDBcont';

const router = express.Router();

// GET /api/games/search?query=mario&limit=10
router.get('/search', GamesController.searchGames);

// GET /api/games/popular?limit=10
router.get('/popular', GamesController.getPopularGames);

// GET /api/games/:id
router.get('/:id', GamesController.getGameById);

export default router;