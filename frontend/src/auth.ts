import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import SequelizeAdapter from "@auth/sequelize-adapter"
import { Sequelize } from "sequelize"

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT ?? 5432),
    dialect: "postgres",
    logging: false,
  }
);

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: SequelizeAdapter(sequelize),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })

        if (!res.ok) return null
        const user = await res.json()
        return user ?? null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id
        token.role = (user as any).role
        token.accessToken = (user as any).accessToken
        token.refreshToken = (user as any).refreshToken
      }
      return token
    },
    async session({ session, token }) {
      (session.user as any).id = token.id as string
      (session.user as any).role = token.role as string
      (session as any).accessToken = token.accessToken as string
      (session as any).refreshToken = token.refreshToken as string
      return session
    }
  },
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: "jwt"
  }
})
