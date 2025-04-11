import { Website } from "./website";
import { Company } from "./company";

export interface Game {
    age_ratings?: AgeRating[];
    first_release_date?: number;
    id: number;
    name: string;
    slug: string;
    cover?: { id: number; url: string; };
    screenshots?: Array<{ id: number; url: string }>;
    summary?: string;
    rating?: number;
    genres?: Array<{ slug: string; name: string }>;
    game_type?: GameTypes;
    platforms?: Array<{ id: number; name: string }>;
    involved_company?: Company[];
    websites?: Website[];

}

export interface AgeRating {
    id: number;
    category: number; // Use AgeRatingCategory enum
    rating: number;   // Use specific rating enum based on category
    synopsis?: string;
    rating_cover_url?: string;
}

export enum AgeRatingCategory {
    ESRB = 1,
    PEGI = 2,
    CERO = 3,
    USK = 4,
    GRAC = 5,
    CLASS_IND = 6,
    ACB = 7
}

export enum GameTypes{
    MainGame = 0,
    DLC = 1,
    Expansion = 8,
    Bundle = 9,
    StandaloneExpansion = 10,
    Mod = 11,
    Episode = 12,
    Season = 13,
    Remake = 14,
    Remaster = 15,
    Expired = 16,
    Port = 17,
    Fork = 18,
    Pack = 19,
    Update = 20,
}

export interface IGDBAuthResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}