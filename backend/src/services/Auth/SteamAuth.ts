import passport from 'passport';
import { Strategy as SteamStrategy } from 'passport-steam';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

// Steam authentication configuration
export const configureSteamAuth = () => {
    passport.use(
        new SteamStrategy(
            {
                returnURL: `${process.env.API_URL}/api/auth/steam/return`,
                realm: process.env.API_URL || '',
                apiKey: process.env.STEAM_API_KEY as string
            },
            async (identifier, profile, done) => {
                try {
                    // Extract Steam ID from profile
                    const steamId = profile.id;
                    const username = profile.displayName;
                    const avatar = profile._json.avatarfull;

                    // Check if user with this Steam ID exists
                    let user = await prisma.account.findUnique({
                        where: {
                            provider_providerAccountId: {
                                provider: 'steam',
                                providerAccountId: steamId
                            }
                        },
                        include: {
                            user: true
                        }
                    });

                    if (user) {
                        // User exists, return the user
                        return done(null, user.user);
                    } else {
                        // Create a new user and account
                        const newUser = await prisma.user.create({
                            data: {
                                username,
                                name: username,
                                image: avatar,
                                role: 'USER',
                                accounts: {
                                    create: {
                                        provider: 'steam',
                                        providerAccountId: steamId,
                                        type: 'oauth'
                                    }
                                }
                            }
                        });

                        return done(null, newUser);
                    }
                } catch (error) {
                    return done(error as Error);
                }
            }
        )
    );

    // Serialize user to session
    passport.serializeUser((user: any, done) => {
        done(null, user.id);
    });

    // Deserialize user from session
    passport.deserializeUser(async (id: string, done) => {
        try {
            const user = await prisma.user.findUnique({
                where: { id }
            });
            done(null, user);
        } catch (error) {
            done(error);
        }
    });
};

// Function to link Steam account to existing user
export const linkSteamAccount = async (userId: string, steamProfile: any) => {
    try {
        return await prisma.account.create({
            data: {
                userId,
                provider: 'steam',
                providerAccountId: steamProfile.id,
                type: 'oauth'
            }
        });
    } catch (error) {
        throw new Error('Failed to link Steam account');
    }
};

// Function to get Steam data for a user
export const getUserSteamData = async (userId: string) => {
    try {
        const steamAccount = await prisma.account.findFirst({
            where: {
                userId,
                provider: 'steam'
            }
        });

        if (!steamAccount) {
            return null;
        }

        return steamAccount.providerAccountId;
    } catch (error) {
        throw new Error('Failed to get user Steam data');
    }
};