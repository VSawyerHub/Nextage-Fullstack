import axios from 'axios';
import { IGDBAuthResponse } from '../types/game';
import dotenv from 'dotenv';

dotenv.config();

const TWITCH_AUTH_URL = 'https://id.twitch.tv/oauth2/token';
const IGDB_API_URL = process.env.IGDB_API_URL;

const clientId = process.env.IGDB_CLIENT;
const clientSecret = process.env.IGDB_SECRET;

let accessToken: string | null = null;
let tokenExpiration: number | null = null;

async function getAccessToken(): Promise<string> {
    console.log('Getting access token, current status:', {
        hasToken: !!accessToken,
        tokenExpiration: tokenExpiration || 'none',
        expired: tokenExpiration ? Date.now() > tokenExpiration : 'N/A'
    });
    // If token exists and isn't expired, return it
    if (accessToken && tokenExpiration && Date.now() < tokenExpiration) {
        return accessToken;
    }

    try {
        const response = await axios.post<IGDBAuthResponse>(
            `${TWITCH_AUTH_URL}?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`
        );

        accessToken = response.data.access_token;
        // Set expiration time (subtract 60 seconds as buffer)
        tokenExpiration = Date.now() + (response.data.expires_in - 60) * 1000;

        return accessToken;
    } catch (error) {
        console.error('Error fetching IGDB access token:', error);
        throw new Error('Failed to authenticate with IGDB API');
    }
}

export const igdbConfig = {
    getHeaders: async () => {
        const token = await getAccessToken();
        return {
            'Client-ID': clientId as string,
            'Authorization': `Bearer ${token}`
        };
    },
    apiUrl: IGDB_API_URL
};