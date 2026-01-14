import "dotenv/config";
import { db, pool } from "../lib/db";

async function main() {
  // simplest possible test: raw SQL via the driver connection
  const [rows] = await pool.query("SELECT 1 AS ok");
  console.log(rows);

  // optional: check schema + current DB
  const [dbInfo] = await pool.query("SELECT DATABASE() AS db, VERSION() AS version");
  console.log(dbInfo);

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
