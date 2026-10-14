import { drizzle } from "drizzle-orm/mysql2";
import pool from "./config";
import * as schema from "./schema";

export const db = drizzle(pool, { schema, mode: "default" });
