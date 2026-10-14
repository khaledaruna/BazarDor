

// import dns from "node:dns";
// // Bypass SRV lookup DNS issues on local ISP networks
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// if (!process.env.BETTER_AUTH_DB_URL) {
//   throw new Error("BETTER_AUTH_DB_URL environment variable is missing");
// }

// const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
// const db = client.db("bazardor");

// export const auth = betterAuth({
//   secret: process.env.BETTER_AUTH_SECRET,
//   baseURL: process.env.BETTER_AUTH_URL,
//   emailAndPassword: {
//     enabled: true,
//   },
//   database: mongodbAdapter(db, {
//     client,
//   }),
// });

import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";

import { db, mongoClient } from "@/lib/mongodb";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  database: mongodbAdapter(db, {
    client: mongoClient,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.BETTER_AUTH_GOOGLE_SECRET!,
    },

    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },

  account: {
    accountLinking: {
      trustedProviders: ["google", "github"],
    },
  },
});