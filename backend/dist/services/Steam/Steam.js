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
exports.SteamService = void 0;
const steamapi_1 = __importDefault(require("steamapi"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const steam = new steamapi_1.default(process.env.STEAM_API_KEY);
class SteamService {
    static getUserSummary(steamId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield steam.getUserSummary(steamId);
            }
            catch (error) {
                console.error('Error getting user summary:', error);
                throw new Error('Failed to get user summary');
            }
        });
    }
    static getOwnedGames(steamId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield steam.getUserOwnedGames(steamId);
            }
            catch (error) {
                console.error('Error getting owned games:', error);
                throw new Error('Failed to get owned games');
            }
        });
    }
    static getGameAchievements(appId, steamId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield steam.getUserAchievements(steamId, parseInt(appId));
            }
            catch (error) {
                console.error('Error getting game achievements:', error);
                throw new Error('Failed to get game achievements');
            }
        });
    }
}
exports.SteamService = SteamService;
