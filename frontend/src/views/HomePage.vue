<template>
  <div class="home">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">ERPNext Specialist</p>
        <h1>ERPNext engineer building production-grade ERP systems</h1>
        <p class="lead">
          I specialize in ERPNext architecture and implementation. I configure
          modules across Finance, Selling, Buying, Inventory, HR, Manufacturing,
          and Projects, and I understand how documents, doctypes, and workflows
          map to MariaDB tables and relationships. I build reliable pipelines,
          permissions, and reports backed by clean data models.
        </p>
        <div class="btn-row">
          <router-link class="btn btn-primary" to="/projects">
            View ERPNext work
          </router-link>
          <router-link class="btn btn-ghost" to="/contact">
            Contact me
          </router-link>
        </div>
        <div class="hero-meta">
          <div>
            <span class="meta-label">Expertise</span>
            <span class="meta-value">ERPNext modules, doctypes, workflows</span>
          </div>
          <div>
            <span class="meta-label">Database</span>
            <span class="meta-value">
              MariaDB schema, queries, data integrity
            </span>
          </div>
        </div>
      </div>

      <transition name="slide">
        <div v-if="showImage" class="hero-media">
          <div class="image-frame">
            <img src="@/assets/pic.jpg" alt="Profile Image" class="hero-img" />
          </div>
          <div class="hero-card">
            <h3>Technical focus</h3>
            <ul>
              <li>ERPNext module setup, doctypes, and roles</li>
              <li>Workflow automation, permissions, and scripts</li>
              <li>Reports, dashboards, and data validation</li>
            </ul>
          </div>
        </div>
      </transition>
    </section>

    <section class="proof">
      <div class="proof-card">
        <p class="proof-title">ERPNext Architecture</p>
        <p class="proof-text">
          Doctypes, role permissions, custom scripts, and module integration.
        </p>
      </div>
      <div class="proof-card">
        <p class="proof-title">Workflow Engineering</p>
        <p class="proof-text">
          Lead-to-cash, procure-to-pay, and production flows with approvals.
        </p>
      </div>
      <div class="proof-card">
        <p class="proof-title">MariaDB + Data</p>
        <p class="proof-text">
          Schema understanding, queries, and data quality for reliable reports.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      showImage: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showImage = true;
    }, 500);
  },
};
</script>

<style scoped>
.home {
  width: 100%;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0 10px;
}

.hero-copy {
  flex: 1.1;
}

.hero h1 {
  font-size: clamp(2.4rem, 2rem + 2vw, 3.4rem);
  color: #1f2734;
  margin: 0 0 16px;
}

.lead {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  max-width: 560px;
}

.hero-meta {
  margin-top: 28px;
  display: grid;
  gap: 16px;
  max-width: 520px;
}

.meta-label {
  display: block;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #b86a34;
  font-weight: 600;
}

.meta-value {
  display: block;
  margin-top: 6px;
  color: #2f3a4a;
  font-weight: 500;
}

.hero-media {
  flex: 0.9;
  display: grid;
  gap: 18px;
  align-items: start;
}

.image-frame {
  background: rgba(255, 255, 255, 0.8);
  padding: 0;
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(31, 39, 52, 0.14);
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
}

.hero-card {
  background: #fffaf4;
  border: 1px solid rgba(31, 39, 52, 0.08);
  border-radius: 18px;
  padding: 18px 20px;
  box-shadow: 0 16px 30px rgba(31, 39, 52, 0.12);
  width: 100%;
}

.hero-card h3 {
  margin: 0 0 10px;
  color: #1f2734;
  font-size: 1.05rem;
}

.hero-card ul {
  margin: 0;
  padding-left: 18px;
  color: #4a5563;
  line-height: 1.6;
}

.proof {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  max-width: 1100px;
  margin: 56px auto 0;
}

.proof-card {
  background: #ffffff;
  border: 1px solid rgba(31, 39, 52, 0.08);
  border-radius: 16px;
  padding: 20px 22px;
  box-shadow: 0 12px 24px rgba(31, 39, 52, 0.08);
}

.proof-title {
  margin: 0 0 8px;
  font-weight: 700;
  color: #1f2734;
}

.proof-text {
  margin: 0;
  color: #4a5563;
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    align-items: stretch;
    padding: 24px 0 0;
  }

  .hero-copy {
    max-width: 100%;
  }

  .hero-media {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .hero h1 {
    font-size: 2.1rem;
  }

  .image-frame {
    padding: 12px;
  }

  .hero-card {
    padding: 14px 16px;
  }
}

.slide-enter-active {
  transition: all 1s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
