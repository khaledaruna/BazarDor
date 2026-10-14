import { MongoClient } from "mongodb";

// Change process.env.MONGODB_URI to process.env.BETTER_AUTH_DB_URL
const uri = process.env.BETTER_AUTH_DB_URL || process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Database connection string (MONGODB_URI or BETTER_AUTH_DB_URL) is missing");
}

const globalForMongo = global as typeof globalThis & {
  mongoClient?: MongoClient;
};

export const mongoClient = globalForMongo.mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = mongoClient;
}

export const db = mongoClient.db("bazardor");