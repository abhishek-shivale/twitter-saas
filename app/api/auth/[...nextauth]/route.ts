import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/server-compo/database";
import { compare } from "bcrypt";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
          select: {
            id: true,
            password: true,
          },
        });

        if (!user) {
          return null;
        }
        const comparePass = await compare(credentials.password, user.password);
        if (!comparePass) {
          return null;
        }
        return {
          id: user?.id,
          name: user?.id,
          email: credentials.email,
        };
      },
    }),
  ],
  // callbacks: {
  //   jwt: async ({ user, token }: any) => {
  //     if (user) {
  //       token.uid = user.id;
  //     }
  //     return token;
  //   },
  //   session: ({ session, token, user }: any) => {
  //     if (session.user) {
  //       session.user.id = token.uid;
  //     }
  //     return session;
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/new-user",
  },
});
export { handler as GET, handler as POST };
