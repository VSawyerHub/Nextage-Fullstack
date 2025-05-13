import { Router, Request, Response } from 'express';
import { SteamService } from '../../services/Steam/Steam';

const router = Router();

// Endpoint to get user summary
router.get('/user/:steamId', async (req: Request, res: Response) => {
    try {
        const { steamId } = req.params;
        const summary = await SteamService.getUserSummary(steamId);
        res.json(summary);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to get owned games
router.get('/user/:steamId/games', async (req: Request, res: Response) => {
    try {
        const { steamId } = req.params;
        const games = await SteamService.getOwnedGames(steamId);
        res.json(games);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to get achievements from a game
router.get('/user/:steamId/game/:appId/achievements', async (req: Request, res: Response) => {
    try {
        const { steamId, appId } = req.params;
        const achievements = await SteamService.getGameAchievements(appId, steamId);
        res.json(achievements);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;