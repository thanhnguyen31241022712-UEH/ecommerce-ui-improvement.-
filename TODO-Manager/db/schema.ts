import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
export const tasks = sqliteTable("tasks", {
  id: text("id").primaryKey(), userId: text("user_id").notNull(), title: text("title").notNull(), description: text("description").notNull().default(""), dueDate: text("due_date"), status: text("status").notNull().default("todo"), priority: text("priority").notNull().default("medium"), createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`), updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
