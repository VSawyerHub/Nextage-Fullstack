export interface Game {
    id: number;
    name: string;
    slug: string;
    cover?: {
        id: number;
        url: string;
    };
    screenshots?: Array<{ id: number; url: string;}>;
    summary?: string;
    rating?: number;
    first_release_date?: number;
    genres?: Array<{ id: number; name: string }>;
    platforms?: Array<{ id: number; name: string }>;
    similar_games?: Array<Game> | Array<{id: number; name: string; cover?: {id: number; url: string}}>;
}