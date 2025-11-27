"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGDBService = void 0;
const axios_1 = __importDefault(require("axios"));
const IGDB_1 = require("../../config/IGDB");
class IGDBService {
    // Search for games based on a query string
    static searchGames(query_1) {
        return __awaiter(this, arguments, void 0, function* (query, limit = 20, offset = 0) {
            try {
                const headers = yield IGDB_1.igdbConfig.getHeaders();
                const response = yield axios_1.default.post(`${IGDB_1.igdbConfig.apiUrl}/games`, `search "${query}"; 
        fields name, slug, cover.url, summary, rating, first_release_date, 
        genres.*, game_type, game_modes.*, platforms.*, platforms.platform_logo.url,
        involved_companies.company.*, involved_companies.company.logo.url, 
        screenshots.url, websites.*, themes.*, age_ratings.*; 
    where cover.url != null;
    offset ${offset};
    limit ${limit};`, { headers });
                return response.data;
            }
            catch (error) {
                console.error('Error searching games:', error);
                throw new Error('Failed to search games');
            }
        });
    }
    static getTrending(types_1) {
        return __awaiter(this, arguments, void 0, function* (types, limitPerType = 20) {
            try {
                const headers = yield IGDB_1.igdbConfig.getHeaders();
                const allGameIds = new Set();
                let combinedGames = [];
                for (const type of types) {
                    const popResponse = yield axios_1.default.post(`${IGDB_1.igdbConfig.apiUrl}/popularity_primitives`, `fields game_id,value,popularity_type; sort value desc; limit ${limitPerType}; where popularity_type = ${type};`, { headers });
                    const gameIds = popResponse.data.map((item) => item.game_id);
                    for (const id of gameIds)
                        allGameIds.add(id);
                }
                if (allGameIds.size === 0)
                    return [];
                const gamesResponse = yield axios_1.default.post(`${IGDB_1.igdbConfig.apiUrl}/games`, `fields name,cover.url,first_release_date,platforms.name,platforms.id,platforms.platform_logo.url,rating,slug;
             where id = (${[...allGameIds].join(',')});`, { headers });
                combinedGames = gamesResponse.data;
                return combinedGames;
            }
            catch (error) {
                console.error('Error fetching popular games:', error);
                throw new Error('Failed to fetch popular games');
            }
        });
    }
    static getGames(listType_1) {
        return __awaiter(this, arguments, void 0, function* (listType, limit = 30) {
            try {
                const headers = yield IGDB_1.igdbConfig.getHeaders();
                const now = Math.floor(Date.now() / 1000); // Current time in UNIX timestamp
                const currentDate = new Date();
                const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                const firstDayTimestamp = Math.floor(firstDayOfMonth.getTime() / 1000);
                const ninetyDaysFromNow = now + (90 * 24 * 60 * 60); // 90 days from now
                let query;
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
                const response = yield axios_1.default.post(`${IGDB_1.igdbConfig.apiUrl}/games`, query, { headers });
                return response.data;
            }
            catch (error) {
                console.error(`Error fetching ${listType} games:`, error);
                throw new Error(`Failed to fetch ${listType} games`);
            }
        });
    }
    // Get game details by ID
    static getGameById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const headers = yield IGDB_1.igdbConfig.getHeaders();
                const response = yield axios_1.default.post(`${IGDB_1.igdbConfig.apiUrl}/games`, `fields name, slug, cover.url, summary, rating, first_release_date, 
            genres.*, game_type, game_modes.*, platforms.*, platforms.platform_logo.url,
            involved_companies.company.*, involved_companies.company.logo.url, 
            screenshots.url, websites.*, themes.*, age_ratings.*;
        where id = ${id};`, { headers });
                return response.data.length === 0 ? null : response.data[0];
            }
            catch (error) {
                console.error(`Error fetching game with ID ${id}:`, error);
                if (axios_1.default.isAxiosError(error)) {
                    // Handle axios-specific errors with status codes, etc.
                    throw new Error(`API request failed: ${(_a = error.response) === null || _a === void 0 ? void 0 : _a.status} - ${error.message}`);
                }
                else if (error instanceof Error) {
                    // Re-throw the error with the original message and error as cause
                    const newError = new Error(error.message);
                    // Set cause property manually for TypeScript compatibility
                    newError.cause = error;
                    throw newError;
                }
                else {
                    // For unknown error types
                    throw new Error('Failed to fetch game details');
                }
            }
        });
    }
    static getGameBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = yield IGDB_1.igdbConfig.getHeaders();
                const response = yield axios_1.default.post(`${IGDB_1.igdbConfig.apiUrl}/games`, `fields name, slug, cover.url, summary, rating, first_release_date, 
            genres.*, game_type, game_modes.*, platforms.*, platforms.platform_logo.url,
            involved_companies.company.*, involved_companies.company.logo.url, 
            screenshots.url, websites.*, themes.*, age_ratings.*;
        where slug = "${slug}";`, { headers });
                return response.data.length === 0 ? null : response.data[0];
            }
            catch (error) {
                console.error(`Error fetching game with slug ${slug}:`, error);
                throw new Error('Failed to fetch game details');
            }
        });
    }
}
exports.IGDBService = IGDBService;
