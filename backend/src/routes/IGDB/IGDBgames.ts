import express from 'express';
import { GamesController } from '../../controller/IGDBcont';

const router = express.Router();

// GET /api/games/search?query=mario&limit=10
router.get('/search', GamesController.searchGames);
// GET /api/games/popularity?limit=10
router.get('/popularity/combined', GamesController.getTrending); // Alias for /popularity
// GET /api/games/:id
router.get('/id/:id', GamesController.getGameById);
// GET /api/games/:slug
router.get('/slug/:slug', GamesController.getGameBySlug);

// GET /api/games/popular?limit=10
router.get('/:listType', GamesController.getGamesByListType);

export default router;