const API_BASE = process.env.VUE_APP_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }

  if (res.status === 204) return null;
  return res.json();
}

export const api = {
  getProfile: () => request("/api/profile"),
  getSkills: () => request("/api/skills"),
  getProjects: () => request("/api/projects"),
  getEducation: () => request("/api/education"),
  getExperience: () => request("/api/experience"),
  sendContact: (payload) =>
    request("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
