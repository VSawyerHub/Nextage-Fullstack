import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { getUserSteamData } from '../../services/Auth/SteamAuth';

const router = Router();
const prisma = new PrismaClient();

export default router;