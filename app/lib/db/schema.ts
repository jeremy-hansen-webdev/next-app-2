import { double } from "drizzle-orm/mysql-core";
import { mysqlTable, int, varchar, datetime } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique(),
  createdAt: datetime("created_at").default(new Date()),
});

export const products = mysqlTable("products", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", {length: 255}).notNull(),
  price: double("price").default(0),
  createdAt: datetime("created_at").default(new Date())
})