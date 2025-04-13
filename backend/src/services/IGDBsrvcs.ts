import axios from 'axios';
import { igdbConfig } from '../config/IGDB';
import { Game } from '../types/game';

export class IGDBService {
    // Search for games based on a query string
    static async searchGames(query: string, limit: number = 10): Promise<Game[]> {
        try {
            const headers = await igdbConfig.getHeaders();

            const response = await axios.post(
                `${igdbConfig.apiUrl}/games`,
                `search "${query}"; 
        fields name, slug, cover.url, summary, rating, first_release_date, genres.name, platforms.name, involved_companies.company.*, screenshots.url, websites.*; 
        limit ${limit};`,
                { headers }
            );

            return response.data;
        } catch (error) {
            console.error('Error searching games:', error);
            throw new Error('Failed to search games');
        }
    }

    // Get popular games
    static async getPopularGames(limit: number = 10): Promise<Game[]> {
        try {
            const headers = await igdbConfig.getHeaders();

            const response = await axios.post(
                `${igdbConfig.apiUrl}/games`,
                `fields name, slug, cover.url, summary, rating, first_release_date, genres.name, platforms.name, involved_companies.company.*, screenshots.url, websites.*;
        where rating > 80;
        sort rating desc;
        limit ${limit};`,
                { headers }
            );

            return response.data;
        } catch (error) {
            console.error('Error fetching popular games:', error);
            throw new Error('Failed to fetch popular games');
        }
    }

    // Get game details by ID
    static async getGameById(id: number): Promise<Game | null> {
        try {
            const headers = await igdbConfig.getHeaders();

            const response = await axios.post(
                `${igdbConfig.apiUrl}/games`,
                `fields name, slug, cover.url, summary, rating, first_release_date, genres.name, platforms.name, involved_companies.company.*, screenshots.url, websites.*; 
        where id = ${id};`,
                {headers}
            );

            return response.data.length === 0 ? null : response.data[0];
        } catch (error) {
            console.error(`Error fetching game with ID ${id}:`, error);

            if (axios.isAxiosError(error)) {
                // Handle axios-specific errors with status codes, etc.
                throw new Error(`API request failed: ${error.response?.status} - ${error.message}`);
            } else if (error instanceof Error) {
                // Re-throw the error with the original message and error as cause
                const newError = new Error(error.message);
                // Set cause property manually for TypeScript compatibility
                (newError as any).cause = error;
                throw newError;
            } else {
                // For unknown error types
                throw new Error('Failed to fetch game details');
            }

        }

    }

    static async getGameBySlug(slug: string): Promise<Game | null> {
        try {
            const headers = await igdbConfig.getHeaders();

            const response = await axios.post(
                `${igdbConfig.apiUrl}/games`,
                `fields name, slug, cover.url, summary, rating, first_release_date, genres.name, platforms.name, involved_companies.company.*, screenshots.url, websites.*; 
        where slug = "${slug}";`,
                {headers}
            );

            return response.data.length === 0 ? null : response.data[0];
        } catch (error) {
            console.error(`Error fetching game with slug ${slug}:`, error);
            throw new Error('Failed to fetch game details');
        }
    }


}