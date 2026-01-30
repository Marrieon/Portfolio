<template>
  <section class="projects">
    <div class="header">
      <p class="eyebrow">Selected Work</p>
      <h1>ERPNext case studies</h1>
      <p class="subtitle">
        ERPNext-focused delivery across modules, workflows, and reporting. Each
        case highlights role, scope, and outcomes.
      </p>
    </div>

    <div class="case-grid">
      <article v-for="project in projects" :key="project.id" class="case-card">
        <div class="case-top">
          <div>
            <p class="case-label">{{ project.category }}</p>
            <h2>{{ project.title }}</h2>
          </div>
          <span class="case-badge">{{ project.role }}</span>
        </div>
        <p class="case-desc">{{ project.description }}</p>
        <div class="case-meta">
          <div>
            <p class="meta-label">Scope</p>
            <p class="meta-value">{{ project.scope }}</p>
          </div>
          <div>
            <p class="meta-label">Stack</p>
            <p class="meta-value">{{ project.stack }}</p>
          </div>
        </div>
        <ul class="case-results">
          <li v-for="item in project.results" :key="item">{{ item }}</li>
        </ul>
        <div class="tag-row">
          <span v-for="tag in project.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { api } from "@/api";

export default {
  data() {
    return {
      projects: [],
    };
  },
  async mounted() {
    try {
      const projects = await api.getProjects();
      this.projects = (projects || []).map((project) => ({
        ...project,
        results: Array.isArray(project.results) ? project.results : [],
        tags: Array.isArray(project.tags) ? project.tags : [],
      }));
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style scoped>
.projects {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

.header h1 {
  font-size: clamp(2.2rem, 1.8rem + 1.6vw, 3rem);
  margin: 12px 0 10px;
  color: #1f2734;
}

.subtitle {
  color: #555;
  max-width: 720px;
  line-height: 1.6;
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
  margin-top: 32px;
}

.case-card {
  background: #ffffff;
  border: 1px solid rgba(31, 39, 52, 0.08);
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 16px 30px rgba(31, 39, 52, 0.1);
  display: grid;
  gap: 14px;
}

.case-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: start;
}

.case-label {
  margin: 0 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
  color: #b86a34;
  font-weight: 600;
}

.case-card h2 {
  margin: 0;
  font-size: 1.3rem;
  color: #1f2734;
}

.case-badge {
  background: #2f6f6d;
  color: #fff;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.case-desc {
  margin: 0;
  color: #4a5563;
  line-height: 1.6;
}

.case-meta {
  display: grid;
  gap: 10px;
}

.meta-label {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
  color: #b86a34;
  font-weight: 600;
}

.meta-value {
  margin: 4px 0 0;
  color: #2f3a4a;
  font-weight: 500;
}

.case-results {
  margin: 0;
  padding-left: 18px;
  color: #4a5563;
  line-height: 1.6;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #f1f5f9;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.8rem;
  color: #0f172a;
}

@media (max-width: 768px) {
  .projects {
    padding: 8px;
  }

  .case-top {
    flex-direction: column;
  }

  .case-badge {
    align-self: flex-start;
  }
}
</style>
