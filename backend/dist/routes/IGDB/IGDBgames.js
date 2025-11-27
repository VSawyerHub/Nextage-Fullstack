"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const IGDBcont_1 = require("../../controller/IGDBcont");
const router = express_1.default.Router();
// GET /api/games/search?query=mario&limit=10
router.get('/search', IGDBcont_1.GamesController.searchGames);
// GET /api/games/popularity?limit=10
router.get('/popularity/combined', IGDBcont_1.GamesController.getTrending); // Alias for /popularity
// GET /api/games/popular?limit=10
router.get('/:listType', IGDBcont_1.GamesController.getGamesByListType);
// GET /api/games/:id
router.get('/id/:id', IGDBcont_1.GamesController.getGameById);
// GET /api/games/:slug
router.get('/slug/:slug', IGDBcont_1.GamesController.getGameBySlug);
exports.default = router;
