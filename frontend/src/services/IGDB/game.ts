import { Game } from "@/interfaces/game";
import api from "@/app/api/config";

export type ListType = 'recentlyReleased' | 'mostAnticipated' | 'upcoming';

export const gamesService = {
    searchGames: async (query: string, limit: number = 20, offset: number = 0): Promise<Game[] | { error: string }> => {
        try {
            const response = await api.get(`/api/games/search`, {
                params: {
                    query: encodeURIComponent(query),
                    offset,
                    limit
                }
            });
            return response.data;
        } catch (error: unknown) {
            console.error('Error searching games:', error instanceof Error ? error.message : String(error));
            return { error: error instanceof Error ? error.message : String(error) };
        }
    },

    getTrending: async (types: number[], limitPerType: number = 20): Promise<Game[] | { error: string }> => {
        try {
            const response = await api.get(`/api/games/popularity/combined`, {
                params: { types: types.join(','), limit: limitPerType }
            });
            return response.data;
        } catch (error: unknown) {
            console.error('Error fetching popular games:', error instanceof Error ? error.message : String(error));
            return { error: error instanceof Error ? error.message : String(error) };
        }
    },

    getGames: async (listType: ListType, limit: number = 10): Promise<Game[] | { error: string }> => {
        try {
            const response = await api.get(`/api/games/${listType}`, {
                params: { limit }
            });
            return response.data;
        } catch (error: unknown) {
            console.error(`Error fetching ${listType} games:`, error instanceof Error ? error.message : String(error));
            return { error: error instanceof Error ? error.message : String(error) };
        }
    },

    getGameById: async (id: number): Promise<Game | null> => {
        try {
            const response = await api.get(`/api/games/id/${id}`);
            return response.data;
        } catch (error: unknown) {
            console.error(`Error fetching game with ID ${id}:`, error instanceof Error ? error.message : String(error));
            return null;
        }
    },

    getGameBySlug: async (slug: string): Promise<Game | null> => {
        try {
            const response = await api.get(`/api/games/slug/${slug}`);
            return response.data;
        } catch (error: unknown) {
            console.error(`Error fetching game with slug ${slug}:`, error instanceof Error ? error.message : String(error));
            return null;
        }
    }
};