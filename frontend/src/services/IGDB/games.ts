import {Game} from "@/interfaces/game";

export const gamesService = {
    searchGames: async (query: string, limit: number = 10): Promise<Game[] | { error: string }> => {
        try {
            const response = await fetch(`/api/games/search?query=${encodeURIComponent(query)}&limit=${limit}`);
            if (!response.ok) return { error: 'Failed to search games' };
            return await response.json();
        } catch (error: unknown) {
            console.error('Error searching games:', error instanceof Error ? error.message : String(error));
            return { error: error instanceof Error ? error.message : String(error) };
        }
    },

    getPopularGames: async (limit: number = 10): Promise<Game[] | { error: string }> => {
        try {
            const response = await fetch(`/api/games/popular?limit=${limit}`);
            if (!response.ok) return { error:'Failed to fetch popular games' }
            return await response.json();
        } catch (error: unknown) {
            console.error('Error fetching popular games:', error instanceof Error ? error.message : String(error));
            return { error: error instanceof Error ? error.message : String(error) };
        }
    },

    getGameById: async (id: number): Promise<Game | null> => {
        try {
            const response = await fetch(`/api/games/${id}`);
            if (!response.ok) {
                if (response.status === 404) console.error('Game not found');
                return null;
            }
            return await response.json();
        } catch (error: unknown) {
            console.error(`Error fetching game with ID ${id}:`, error instanceof Error ? error.message : String(error));
            return null;
        }
    }
};