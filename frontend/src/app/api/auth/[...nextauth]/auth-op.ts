import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        return null;
                    }

                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        })
                    });

                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(data.message || 'Authentication failed');
                    }

                    return {
                        id: data.user.id,
                        email: data.user.email,
                        name: data.user.username,
                        username: data.user.username,
                        role: data.user.role,
                        accessToken: data.accessToken,
                        refreshToken: data.refreshToken
                    };
                } catch (error) {
                    console.error("Authentication error:", error);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string;
                session.user.role = token.role as string;
                session.accessToken = token.accessToken as string;
            }
            return session;
        }
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };