import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/prisma";
import { compareSync } from "bcrypt-ts-edge";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = await prisma.users.findFirst({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) throw new Error("Incorrect credentials");

        const passwordCorrect = compareSync(
          credentials.password as string,
          user.password
        );

        if (!passwordCorrect) throw new Error("Incorrect credentials");

        return {
          id: user.id,
          email: user.email,
          name: user.username,
          image: user.imageUrl,
        };
      },
    }),
  ],
});
