import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

const client = drizzle(process.env.DATABASE_URL!);

export { client };
