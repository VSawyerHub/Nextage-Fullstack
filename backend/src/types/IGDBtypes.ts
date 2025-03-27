export interface Game {
    id: number;
    name: string;
    cover?: {
        id: number;
        url: string;
    };
    summary?: string;
    rating?: number;
    first_release_date?: number;
    genres?: Array<{ id: number; name: string }>;
    platforms?: Array<{ id: number; name: string }>;
}

export interface IGDBAuthResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}