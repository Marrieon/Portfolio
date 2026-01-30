const fs = require("fs");
const path = require("path");
const { exec, get } = require("../db");

const schemaPath = path.join(__dirname, "..", "db", "schema.sql");
const seedPath = path.join(__dirname, "..", "db", "seed.sql");

async function init() {
  const schema = fs.readFileSync(schemaPath, "utf-8");
  await exec(schema);

  const hasProfile = await get("SELECT id FROM profile LIMIT 1");
  if (!hasProfile) {
    const seed = fs.readFileSync(seedPath, "utf-8");
    await exec(seed);
  }

  console.log("Database initialized.");
}

init().catch((err) => {
  console.error("Database init failed:", err);
  process.exit(1);
});
