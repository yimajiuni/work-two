import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

console.log('Initializing NextAuth configuration...')
console.log('Auth providers configured:', {
  google: !!process.env.GOOGLE_ID,
  github: !!process.env.GITHUB_ID,
})
console.log('NextAuth secret exists:', !!process.env.NEXTAUTH_SECRET)
console.log('NextAuth URL:', process.env.NEXTAUTH_URL)

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  logger: {
    error(code, metadata) {
      console.error('NextAuth error:', { code, metadata })
    },
    warn(code) {
      console.warn('NextAuth warning:', code)
    },
    debug(code, metadata) {
      console.log('NextAuth debug:', { code, metadata })
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);