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
exports.AuthRole = exports.refreshAccessToken = exports.RefreshTokenError = exports.authenticateToken = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../lib/prisma"));
var AuthRole;
(function (AuthRole) {
    AuthRole["USER"] = "USER";
    AuthRole["ADMIN"] = "ADMIN";
})(AuthRole || (exports.AuthRole = AuthRole = {}));
// Environment variable validation
if (!process.env.JWT_SECRET) {
    console.error('FATAL ERROR: JWT_SECRET is not defined in environment variables');
    process.exit(1);
}
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || `${JWT_SECRET}_refresh`;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';
// Generate access token
const generateAccessToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    });
};
exports.generateAccessToken = generateAccessToken;
// Generate refresh token
const generateRefreshToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, JWT_REFRESH_SECRET, {
        expiresIn: JWT_REFRESH_EXPIRES_IN
    });
};
exports.generateRefreshToken = generateRefreshToken;
// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN format
    if (!token) {
        res.status(401).json({ message: 'Access token is required' });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role
        };
        next();
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            res.status(401).json({ message: 'Token expired' });
            return;
        }
        res.status(403).json({ message: 'Invalid token' });
        return;
    }
};
exports.authenticateToken = authenticateToken;
// Define custom error types for token issues
class RefreshTokenError extends Error {
    constructor(message, originalError) {
        super(message);
        this.originalError = originalError;
        this.name = 'RefreshTokenError';
        if (originalError) {
            this.stack = originalError.stack;
        }
    }
}
exports.RefreshTokenError = RefreshTokenError;
const refreshAccessToken = (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decoded = jsonwebtoken_1.default.verify(refreshToken, JWT_REFRESH_SECRET);
        // Check if user still exists
        const user = yield prisma_1.default.user.findUnique({
            where: { id: decoded.id }
        });
        if (!user) {
            return Promise.reject(new RefreshTokenError('User not found'));
        }
        // Generate new access token
        return (0, exports.generateAccessToken)({
            id: user.id,
            email: user.email || '',
            role: user.role
        });
    }
    catch (error) {
        if (error instanceof RefreshTokenError) {
            throw error; // Already formatted error
        }
        else if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            throw new RefreshTokenError('Refresh token expired', error);
        }
        else {
            throw new RefreshTokenError('Invalid refresh token', error instanceof Error ? error : undefined);
        }
    }
});
exports.refreshAccessToken = refreshAccessToken;
