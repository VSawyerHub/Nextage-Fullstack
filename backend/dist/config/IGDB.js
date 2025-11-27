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
exports.igdbConfig = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const TWITCH_AUTH_URL = 'https://id.twitch.tv/oauth2/token';
const IGDB_API_URL = process.env.IGDB_API_URL;
const clientId = process.env.IGDB_CLIENT;
const clientSecret = process.env.IGDB_SECRET;
let accessToken = null;
let tokenExpiration = null;
function getAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
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
            const response = yield axios_1.default.post(`${TWITCH_AUTH_URL}?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`);
            accessToken = response.data.access_token;
            // Set expiration time (subtract 60 seconds as buffer)
            tokenExpiration = Date.now() + (response.data.expires_in - 60) * 1000;
            return accessToken;
        }
        catch (error) {
            console.error('Error fetching IGDB access token:', error);
            throw new Error('Failed to authenticate with IGDB API');
        }
    });
}
exports.igdbConfig = {
    getHeaders: () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield getAccessToken();
        return {
            'Client-ID': clientId,
            'Authorization': `Bearer ${token}`
        };
    }),
    apiUrl: IGDB_API_URL
};
