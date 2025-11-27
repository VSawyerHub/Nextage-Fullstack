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
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const router = (0, express_1.Router)();
// Generate reset token
router.post('/forgot-password', [
    (0, express_validator_1.body)('email').isEmail().normalizeEmail()
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    try {
        const { email } = req.body;
        // Find user
        const user = yield prisma_1.default.user.findUnique({
            where: { email }
        });
        if (!user) {
            // Don't leak information, always return success
            res.status(200).json({
                message: 'If your email is registered, you will receive a password reset link'
            });
            return;
        }
        // Generate token
        const resetToken = crypto_1.default.randomBytes(32).toString('hex');
        const resetTokenHash = crypto_1.default.createHash('sha256').update(resetToken).digest('hex');
        // Store token in database
        const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
        yield prisma_1.default.verificationToken.upsert({
            where: {
                identifier_token: {
                    identifier: user.id,
                    token: 'password-reset'
                }
            },
            update: {
                token: resetTokenHash,
                expires: resetTokenExpiry
            },
            create: {
                identifier: user.id,
                token: resetTokenHash,
                expires: resetTokenExpiry
            }
        });
        res.status(200).json(Object.assign({ message: 'If your email is registered, you will receive a password reset link' }, (process.env.NODE_ENV === 'development' && { resetToken })));
    }
    catch (error) {
        console.error('Password reset request error:', error);
        res.status(500).json({ message: 'Error processing password reset request' });
    }
}));
// Reset password with token
router.post('/reset-password', [
    (0, express_validator_1.body)('token').isString().isLength({ min: 32 }).withMessage('Invalid token'),
    (0, express_validator_1.body)('email').isEmail().normalizeEmail(),
    (0, express_validator_1.body)('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number')
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    try {
        const { token, email, password } = req.body;
        // Find user
        const user = yield prisma_1.default.user.findUnique({
            where: { email }
        });
        if (!user) {
            res.status(400).json({ message: 'Invalid or expired token' });
            return;
        }
        // Hash the token from the request
        const resetTokenHash = crypto_1.default.createHash('sha256').update(token).digest('hex');
        // Find the verification token
        const verificationToken = yield prisma_1.default.verificationToken.findUnique({
            where: {
                identifier_token: {
                    identifier: user.id,
                    token: 'password-reset'
                }
            }
        });
        if (!verificationToken || verificationToken.token !== resetTokenHash || new Date() > verificationToken.expires) {
            res.status(400).json({ message: 'Invalid or expired token' });
            return;
        }
        // Hash the new password
        const hashedPassword = yield bcrypt_1.default.hash(password, 12);
        // Update user's password
        yield prisma_1.default.user.update({
            where: { id: user.id },
            data: { hashedPassword }
        });
        // Delete the verification token
        yield prisma_1.default.verificationToken.delete({
            where: {
                identifier_token: {
                    identifier: user.id,
                    token: 'password-reset'
                }
            }
        });
        res.status(200).json({ message: 'Password reset successful' });
    }
    catch (error) {
        console.error('Password reset error:', error);
        res.status(500).json({ message: 'Error resetting password' });
    }
}));
exports.default = router;
