import "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        email: string;
        name: string;
        role: string;
        accessToken: string;
        refreshToken?: string;
    }

    interface Session {
        user: User;
        accessToken: string;
        refreshToken?: string; // Add this if needed
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: string;
        accessToken: string;
        refreshToken?: string; // Add this if you store refresh tokens
    }
}