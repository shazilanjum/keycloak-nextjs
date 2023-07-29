import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;



if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    // If the connection is already established, return the cached client and database instances
    return { client: cachedClient, db: cachedDb };
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(MONGODB_DB);

  // Cache the client and database instances to reuse them
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}