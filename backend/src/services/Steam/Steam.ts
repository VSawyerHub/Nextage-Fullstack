import SteamAPI from 'steamapi';
import dotenv from 'dotenv';

dotenv.config();

const steam = new SteamAPI(process.env.STEAM_API_KEY as string);

export class SteamService {
    static async getUserSummary(steamId: string) {
        try {
            return await steam.getUserSummary(steamId);
        } catch (error) {
            console.error('Error getting user summary:', error);
            throw new Error('Failed to get user summary');
        }
    }

    static async getOwnedGames(steamId: string) {
        try {
            return await steam.getUserOwnedGames(steamId);
        } catch (error) {
            console.error('Error getting owned games:', error);
            throw new Error('Failed to get owned games');
        }

    }

    static async getGameAchievements(appId: string, steamId: string) {
        try {
            return await steam.getUserAchievements(steamId, parseInt(appId));
        } catch (error) {
            console.error('Error getting game achievements:', error);
            throw new Error('Failed to get game achievements');
        }
    }
}