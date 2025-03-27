import axios from 'axios';
import { igdbConfig } from '../config/IGDB';
import { Game } from '../types/IGDBtypes';

export class IGDBService {
    // Search for games based on a query string
    static async searchGames(query: string, limit: number = 10): Promise<Game[]> {
        try {
            const headers = await igdbConfig.getHeaders();

            const response = await axios.post(
                `${igdbConfig.apiUrl}/games`,
                // IGDB uses its own query language
                `search "${query}"; 
        fields name, cover.url, summary, rating, first_release_date, genres.name, platforms.name; 
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
                `fields name, cover.url, summary, rating, first_release_date, genres.name, platforms.name;
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
    static async getGameById(id: number): Promise<Game> {
        try {
            const headers = await igdbConfig.getHeaders();

            const response = await axios.post(
                `${igdbConfig.apiUrl}/games`,
                `fields name, cover.url, summary, rating, first_release_date, genres.name, platforms.name;
        where id = ${id};`,
                { headers }
            );

            if (response.data.length === 0) {
                throw new Error('Game not found');
            }

            return response.data[0];
        } catch (error) {
            console.error(`Error fetching game with ID ${id}:`, error);
            throw new Error('Failed to fetch game details');
        }
    }
}