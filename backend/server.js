const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { exec, get, all, run } = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

async function initDb() {
  const schemaPath = path.join(__dirname, "db", "schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf-8");
  await exec(schema);
}

const parseJson = (value, fallback = []) => {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch (err) {
    return fallback;
  }
};

app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});

app.get("/api/profile", async (req, res) => {
  const profile = await get("SELECT * FROM profile LIMIT 1");
  res.json(profile || {});
});

app.get("/api/skills", async (req, res) => {
  const skills = await all(
    "SELECT * FROM skills ORDER BY sort_order ASC, name ASC"
  );
  res.json(skills);
});

app.get("/api/projects", async (req, res) => {
  const projects = await all(
    "SELECT * FROM projects ORDER BY sort_order ASC, id ASC"
  );
  const formatted = projects.map((project) => ({
    ...project,
    tags: parseJson(project.tags, []),
    results: parseJson(project.results, []),
  }));
  res.json(formatted);
});

app.get("/api/experience", async (req, res) => {
  const experience = await all(
    "SELECT * FROM experience ORDER BY start_date DESC, id DESC"
  );
  res.json(experience);
});

app.get("/api/education", async (req, res) => {
  const education = await all("SELECT * FROM education ORDER BY id DESC");
  res.json(education);
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  await run(
    "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
    [name, email, message]
  );

  res.status(201).json({ status: "ok" });
});

app.get("/api/contact", async (req, res) => {
  const messages = await all(
    "SELECT id, name, email, message, created_at FROM contact_messages ORDER BY id DESC"
  );
  res.json(messages);
});

const PORT = process.env.PORT || 5000;
initDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to initialize database:", err);
    process.exit(1);
  });
