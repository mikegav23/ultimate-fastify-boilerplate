import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

// Example
export const usersTable = pgTable("users", {
  id: varchar("id", { length: 24 })
    .primaryKey()
    .$default(() => createId()),
  username: varchar({ length: 255 }).notNull().unique(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
