

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "aish" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
      GoogleProvider({
    clientId: "afsdf",
    clientSecret: "fdadsf"
  }),
   GitHubProvider({
    clientId: "fasdd",
    clientSecret: "afsdf"
  })
  ],
});

export { handler as GET, handler as POST };
