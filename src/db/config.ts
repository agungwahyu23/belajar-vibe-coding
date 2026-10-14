import { createPool } from "mysql2/promise";

const pool = createPool({
  host: process.env.DATABASE_HOST || "localhost",
  port: parseInt(process.env.DATABASE_PORT || "3306"),
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "",
  database: process.env.DATABASE_NAME || "belajar_vibe",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
