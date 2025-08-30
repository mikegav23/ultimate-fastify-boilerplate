import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { config } from "../config.js";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: config.nodeEnv == "production" ? true : false,
});

const client = drizzle({ client: pool });

export { client };
