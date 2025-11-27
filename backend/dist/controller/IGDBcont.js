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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesController = void 0;
const IGDB_1 = require("../services/IGDB/IGDB");
class GamesController {
    static searchGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { query, limit, offset } = req.query;
                if (!query || typeof query !== 'string') {
                    res.status(400).json({ error: 'Search query is required' });
                    return;
                }
                const limitNum = limit ? parseInt(limit) : 10;
                const offsetNum = offset ? parseInt(offset) : 0;
                const games = yield IGDB_1.IGDBService.searchGames(query, limitNum, offsetNum);
                res.json(games);
            }
            catch (error) {
                console.error('Controller error searching games:', error);
                res.status(500).json({ error: 'Failed to search games' });
            }
        });
    }
    static getTrending(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const typesParam = req.query.types;
                const limit = parseInt(req.query.limit) || 20;
                const types = typesParam
                    ? typesParam.split(',').map((t) => parseInt(t.trim(), 20)).filter((n) => !isNaN(n))
                    : [1];
                const games = yield IGDB_1.IGDBService.getTrending(types, limit);
                res.json(games);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    static getGamesByListType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { listType } = req.params;
                const { limit } = req.query;
                const limitNum = limit ? parseInt(limit) : 10;
                // Validate listType
                if (!['thisMonth', 'recentlyReleased', 'mostAnticipated', 'upcoming'].includes(listType)) {
                    res.status(400).json({ error: 'Invalid list type' });
                    return;
                }
                const games = yield IGDB_1.IGDBService.getGames(listType, limitNum);
                res.json(games);
            }
            catch (error) {
                console.error(`Controller error fetching ${req.params.listType} games:`, error);
                res.status(500).json({ error: `Failed to fetch ${req.params.listType} games` });
            }
        });
    }
    static getGameById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const gameId = parseInt(id);
                if (isNaN(gameId)) {
                    res.status(400).json({ error: 'Invalid game ID' });
                    return;
                }
                const game = yield IGDB_1.IGDBService.getGameById(gameId);
                res.json(game);
            }
            catch (error) {
                console.error('Controller error fetching game by ID:', error);
                if (error instanceof Error && error.message === 'Game not found') {
                    res.status(404).json({ error: 'Game not found' });
                    return;
                }
                res.status(500).json({ error: 'Failed to fetch game details' });
            }
        });
    }
    static getGameBySlug(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { slug } = req.params;
                if (!slug) {
                    res.status(400).json({ error: 'Invalid slug' });
                    return;
                }
                const game = yield IGDB_1.IGDBService.getGameBySlug(slug);
                res.json(game);
            }
            catch (error) {
                console.error('Controller error fetching game by slug:', error);
                if (error instanceof Error && error.message === 'Game not found') {
                    res.status(404).json({ error: 'Game not found' });
                    return;
                }
                res.status(500).json({ error: 'Failed to fetch game details' });
            }
        });
    }
}
exports.GamesController = GamesController;
