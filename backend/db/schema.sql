PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS profile (
  id INTEGER PRIMARY KEY,
  full_name TEXT NOT NULL,
  title TEXT NOT NULL,
  bio TEXT NOT NULL,
  location TEXT,
  email TEXT,
  phone TEXT,
  linkedin TEXT,
  github TEXT,
  website TEXT,
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS skills (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  level TEXT,
  sort_order INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  description TEXT,
  role TEXT,
  scope TEXT,
  stack TEXT,
  data_path TEXT,
  results TEXT,
  tags TEXT,
  start_date TEXT,
  end_date TEXT,
  is_featured INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS experience (
  id INTEGER PRIMARY KEY,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  location TEXT,
  start_date TEXT,
  end_date TEXT,
  highlights TEXT,
  stack TEXT
);

CREATE TABLE IF NOT EXISTS education (
  id INTEGER PRIMARY KEY,
  school TEXT NOT NULL,
  degree TEXT,
  field TEXT,
  start_date TEXT,
  end_date TEXT,
  details TEXT
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);
