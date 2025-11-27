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
const express_1 = require("express");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_1 = require("../../middleware/auth");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
// Login route
router.post('/login', [
    (0, express_validator_1.check)('email').isEmail().withMessage('Valid email is required'),
    (0, express_validator_1.check)('password').notEmpty().withMessage('Password is required')
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ message: errors.array()[0].msg });
        return;
    }
    try {
        const { email, password } = req.body;
        const user = yield prisma_1.default.user.findUnique({
            where: { email }
        });
        if (!user || !user.password) {
            res.status(401).json({ message: 'Invalid email or password' });
            return;
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid email or password' });
            return;
        }
        // Generate JWT tokens
        const accessToken = (0, auth_1.generateAccessToken)({
            id: user.id,
            email: user.email || '',
            role: user.role
        });
        const refreshToken = (0, auth_1.generateRefreshToken)({
            id: user.id,
            email: user.email || '',
            role: user.role
        });
        // Store refresh token in database
        yield prisma_1.default.refreshToken.create({
            data: {
                token: refreshToken,
                userId: user.id,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
            }
        });
        res.json({
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                name: user.name,
                image: user.image,
                role: user.role
            },
            accessToken,
            refreshToken
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
}));
// Register route
router.post('/register', [
    (0, express_validator_1.check)('username')
        .isLength({ min: 3, max: 30 })
        .withMessage('Username must be between 3 and 30 characters')
        .matches(/^[a-zA-Z0-9_]+$/)
        .withMessage('Username can only contain letters, numbers and underscores'),
    (0, express_validator_1.check)('email').isEmail().withMessage('Valid email is required'),
    (0, express_validator_1.check)('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters')
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ message: errors.array()[0].msg });
        return;
    }
    try {
        const { username, email, password } = req.body;
        // Check if user already exists
        const existingUser = yield prisma_1.default.user.findFirst({
            where: {
                OR: [
                    { email: email || '' },
                    { username }
                ]
            }
        });
        if (existingUser) {
            if (existingUser.email === email) {
                res.status(400).json({ message: 'Email already in use' });
                return;
            }
            res.status(400).json({ message: 'Username already taken' });
            return;
        }
        // Hash password
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        // Create user
        const user = yield prisma_1.default.user.create({
            data: {
                username,
                email: email || '',
                password: hashedPassword,
                role: 'USER'
            }
        });
        res.status(201).json({
            message: 'User registered successfully',
            userId: user.id
        });
    }
    catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
}));
// Refresh token route - for token renewal
router.post('/refresh-token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            res.status(401).json({ message: 'Refresh token required' });
            return;
        }
        // Find the token in the database
        const tokenDoc = yield prisma_1.default.refreshToken.findUnique({
            where: { token: refreshToken },
            include: { user: true }
        });
        // Check if token exists and is not expired
        if (!tokenDoc || tokenDoc.expiresAt < new Date()) {
            if (tokenDoc) {
                // Remove expired token
                yield prisma_1.default.refreshToken.delete({
                    where: { id: tokenDoc.id }
                });
            }
            res.status(401).json({ message: 'Invalid or expired refresh token' });
            return;
        }
        // Generate new access token
        const accessToken = (0, auth_1.generateAccessToken)({
            id: tokenDoc.user.id,
            email: tokenDoc.user.email || '',
            role: tokenDoc.user.role
        });
        res.json({ accessToken });
    }
    catch (error) {
        console.error('Token refresh error:', error);
        res.status(500).json({ message: 'Server error during token refresh' });
    }
}));
// Logout route - to invalidate refresh tokens
router.post('/logout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            res.status(400).json({ message: 'Refresh token required' });
            return;
        }
        // Delete the refresh token
        yield prisma_1.default.refreshToken.deleteMany({
            where: { token: refreshToken }
        });
        res.status(200).json({ message: 'Logged out successfully' });
    }
    catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Server error during logout' });
    }
}));
exports.default = router;
