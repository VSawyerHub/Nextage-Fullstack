import axios from 'axios';
import { igdbConfig } from '../../config/IGDB';
import { Game } from '../../types/game';

export type ListType = 'recentlyReleased' | 'mostAnticipated' | 'upcoming';

export class IGDBService {
    // Search for games based on a query string
    static async searchGames(query: string, limit: number = 20, offset: number = 0): Promise<Game[]> {
        try {
            const headers = await igdbConfig.getHeaders();

            const response = await axios.post(
                `${igdbConfig.apiUrl}/games`,
                `search "${query}"; 
        fields name, slug, cover.url, summary, rating, first_release_date, 
        genres.*, game_type, game_modes.*, platforms.*, platforms.platform_logo.url,
        involved_companies.company.*, involved_companies.company.logo.url, 
        screenshots.url, websites.*, themes.*, age_ratings.*; 
    where cover.url != null;
    offset ${offset};
    limit ${limit};`,
                { headers }
            );
            return response.data;
        } catch (error) {
            console.error('Error searching games:', error);
            throw new Error('Failed to search games');
        }
    }

    static async getTrending(types: number[], limitPerType: number = 20): Promise<Game[]> {
        try {
            const headers = await igdbConfig.getHeaders();
            const allGameIds = new Set<number>();
            let combinedGames: Game[] = [];

            for (const type of types) {
                const popResponse = await axios.post(
                    `${igdbConfig.apiUrl}/popularity_primitives`,
                    `fields game_id,value,popularity_type; sort value desc; limit ${limitPerType}; where popularity_type = ${type};`,
                    { headers }
                );
                const gameIds = popResponse.data.map((item: any) => item.game_id);
                for (const id of gameIds) allGameIds.add(id);
            }

            if (allGameIds.size === 0) return [];

            const gamesResponse = await axios.post(
                `${igdbConfig.apiUrl}/games`,
                `fields name,cover.url,first_release_date,platforms.name,platforms.id,platforms.platform_logo.url,rating,slug;
             where id = (${[...allGameIds].join(',')});`,
                { headers }
            );

            combinedGames = gamesResponse.data;
            return combinedGames;
        } catch (error) {
            console.error('Error fetching popular games:', error);
            throw new Error('Failed to fetch popular games');
        }
    }

static async getGames(listType: ListType, limit: number = 30): Promise<Game[]> {
        try {
            const headers = await igdbConfig.getHeaders();
            const now = Math.floor(Date.now() / 1000); // Current time in UNIX timestamp
            const currentDate = new Date();
            const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const firstDayTimestamp = Math.floor(firstDayOfMonth.getTime() / 1000);
            const ninetyDaysFromNow = now + (90 * 24 * 60 * 60); // 90 days from now

            let query: string;

            switch (listType) {
                case 'recentlyReleased':
                    // Games released in the last year, sorted by release date
                    query = `fields name,cover.url,first_release_date,platforms.name,platforms.id,platforms.platform_logo.url,rating,slug;
                         where first_release_date > ${firstDayTimestamp} & first_release_date < ${now} & cover.url != null;
                         sort first_release_date desc;
                         limit ${limit};`;
                    break;

                case 'mostAnticipated':
                    // Upcoming games with highest hype
                    query = `fields name,cover.url,first_release_date,platforms.name,platforms.id,platforms.platform_logo.url,rating,slug;
                         where first_release_date > ${now} & cover.url != null;
                         sort hypes desc;
                         limit ${limit};`;
                    break;

                case 'upcoming':
                    // Games coming in the next 90 days
                    query = `fields name,cover.url,first_release_date,platforms.name,platforms.id,platforms.platform_logo.url,rating,slug;
                         where first_release_date > ${now} & first_release_date < ${ninetyDaysFromNow} & cover.url != null;
                         sort first_release_date asc;
                         limit ${limit};`;
                    break;

                default:
                    // Default to recently released
                    query = `fields name,cover.url,first_release_date,platforms.name,platforms.id,platforms.platform_logo.url,rating,slug;
                         where first_release_date > ${firstDayTimestamp} & first_release_date < ${now} & cover.url != null;
                         sort first_release_date desc;
                         limit ${limit};`;
            }

            const response = await axios.post(
                `${igdbConfig.apiUrl}/games`,
                query,
                { headers }
            );

            return response.data;
        } catch (error) {
            console.error(`Error fetching ${listType} games:`, error);
            throw new Error(`Failed to fetch ${listType} games`);
        }
    }

    // Get game details by ID
    static async getGameById(id: number): Promise<Game | null> {
        try {
            const headers = await igdbConfig.getHeaders();

            const response = await axios.post(
                `${igdbConfig.apiUrl}/games`,
                `fields name, slug, cover.url, summary, rating, first_release_date, 
            genres.*, game_type, game_modes.*, platforms.*, platforms.platform_logo.url,
            involved_companies.company.*, involved_companies.company.logo.url, 
            screenshots.url, websites.*, themes.*, age_ratings.*;
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
                `fields name, slug, cover.url, summary, rating, first_release_date, 
            genres.*, game_type, game_modes.*, platforms.*, platforms.platform_logo.url,
            involved_companies.company.*, involved_companies.company.logo.url, 
            screenshots.url, websites.*, themes.*, age_ratings.*;
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