import axios from 'axios';
import { igdbConfig } from '../../config/IGDB';
import { Game } from '../../types/game';

export type ListType = 'recentlyReleased' | 'mostAnticipated' | 'upcoming';

export class IGDBService {
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
        const headers = await igdbConfig.getHeaders();

        const now = Math.floor(Date.now() / 1000);

        // helper to query a time window and fill gameScores
        const fetchWindow = async (fromTs: number, toTs: number, gameScores: Map<number, number>) => {
            for (const type of types) {
                const popResponse = await axios.post(
                    `${igdbConfig.apiUrl}/popularity_primitives`,
                    `fields game_id,value,updated_at;
                     where popularity_type = ${type}
                       & updated_at >= ${fromTs}
                       & updated_at <= ${toTs};
                     sort updated_at desc;
                     limit 500;`,
                    { headers }
                );

                for (const item of popResponse.data) {
                    const gameId = item.game_id;

                    // strong recency bias inside the window
                    const recencyNorm = (item.updated_at - fromTs) / (toTs - fromTs + 1);
                    const recencyFactor = 1 + recencyNorm * 1.5; // up to 2.5x boost for the newest

                    const score = item.value * recencyFactor;
                    gameScores.set(gameId, (gameScores.get(gameId) || 0) + score);
                }
            }
        };

        const gameScores = new Map<number, number>();

        // 1\) try very recent: last 3 days
        const threeDaysAgo = now - 3 * 24 * 60 * 60;
        await fetchWindow(threeDaysAgo, now, gameScores);

        // 2\) if still empty, fall back to last 7 days
        if (gameScores.size === 0) {
            const sevenDaysAgo = now - 7 * 24 * 60 * 60;
            await fetchWindow(sevenDaysAgo, now, gameScores);
        }

        const topGameIds = Array.from(gameScores.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, limitPerType)
            .map(([gameId]) => gameId);

        if (topGameIds.length === 0) {
            return [];
        }

        const gamesResponse = await axios.post(
            `${igdbConfig.apiUrl}/games`,
            `fields name,cover.url,first_release_date,platforms.name,platforms.id,platforms.platform_logo.url,rating,slug;
             where id = (${topGameIds.join(',')}) & cover.url != null;`,
            { headers }
        );

        const gamesMap = new Map(gamesResponse.data.map((game: Game) => [game.id, game]));
        return topGameIds.map(id => gamesMap.get(id)).filter(Boolean) as Game[];
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