import "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        email: string;
        username: string;
        name: string;
        role: string;
        accessToken: string;
        refreshToken?: string;
    }

    interface Session {
        user: User;
        accessToken: string;
        refreshToken?: string;
    }
}

declare module "@auth/core/jwt" {
    interface JWT {
        id: string;
        role: string;
        accessToken: string;
        refreshToken?: string;
    }
}