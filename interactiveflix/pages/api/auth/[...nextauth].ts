import NextAuth, { NextAuthOptions, SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import firebase from "firebase/app";


export interface ExtendedUser {
  id?: string; 
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export interface ExtendedSession extends Session {
  user: ExtendedUser;
  accesstoken: string | null;
}

export interface ExtendedJWT extends JWT {
  id?: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    session: {
      strategy: 'jwt',
    },
    callbacks: {
      jwt: async ({ token, user, account }) => {
        if (user && account) {
            token.accessToken = account.access_token;
            console.log("Access token received", account.access_token)
        }

        console.log("JWT Callback - Token:", token);
        return token;
      },
      session: async ({ session, token }) => {
        (session as ExtendedSession).user.id = (token as ExtendedJWT).id;
        console.log("Session Callback - Session:", session);
        return session;
      }
    },
  }
  
  export default NextAuth(authOptions);
