// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "@better-auth/mongo-adapter";

// const client = new MongoClient(process.env.BETTER_AUTH_URL);
// const db = client.db();

// export const auth = betterAuth({
//     emailAndPassword: {
//         enabled: true,
//     },
//   database: mongodbAdapter(db, {
//     client,
//   }),
// });

import dns from "node:dns";
// Bypass SRV lookup DNS issues on local ISP networks
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.BETTER_AUTH_DB_URL) {
  throw new Error("BETTER_AUTH_DB_URL environment variable is missing");
}

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db("bazardor");

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});

