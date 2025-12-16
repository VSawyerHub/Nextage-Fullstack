import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import SequelizeAdapter from "@auth/sequelize-adapter"
import { Sequelize } from "sequelize"

const sequelize = new Sequelize(/* your database config */)

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
        const res = await fetch("'coloqueaqui'/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })

        const user = await res.json()

        if (res.ok && user) {
          return user
        }
        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      session.user.role = token.role as string
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      return session
    }
  },
  pages: {
    signIn: '/login',
  }
  session: {
    strategy: "jwt"
  }
})
