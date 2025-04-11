export interface Game {
    age_ratings?: Array<{ slug: string; name: string }>;
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
    involved_companies?: Array<{ id: number; company: number }>;
    websites?: Website;

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

