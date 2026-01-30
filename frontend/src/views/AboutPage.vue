<template>
  <section class="about-page">
    <div class="about-hero">
      <div>
        <p class="eyebrow">About</p>
        <h2 class="title">ERPNext engineer with a systems-first mindset</h2>
        <p class="summary">
          {{ summaryText }}
        </p>
      </div>
      <div class="snapshot">
        <div class="snapshot-card">
          <p class="snapshot-label">Education</p>
          <p class="snapshot-value">{{ educationText }}</p>
        </div>
        <div class="snapshot-card">
          <p class="snapshot-label">Focus</p>
          <p class="snapshot-value">ERPNext modules and process design</p>
        </div>
        <div class="snapshot-card">
          <p class="snapshot-label">Strength</p>
          <p class="snapshot-value">ERPNext architecture and data modeling</p>
        </div>
      </div>
    </div>

    <div class="about-grid">
      <div class="capabilities">
        <h3>Technical capabilities</h3>
        <ul v-if="skills.length">
          <li v-for="skill in skills" :key="skill.id">
            {{ skill.name }} <span v-if="skill.level">({{ skill.level }})</span>
          </li>
        </ul>
        <ul v-else>
          <li>ERPNext setup, customization, and configuration</li>
          <li>Doctypes, roles, permissions, and workflow rules</li>
          <li>Scripted automation, notifications, and validations</li>
          <li>MariaDB schema, joins, and data integrity checks</li>
        </ul>
      </div>
      <div class="process">
        <h3>Engineering approach</h3>
        <div class="process-steps">
          <div class="step">
            <span class="step-num">01</span>
            <div>
              <h4>Discovery</h4>
              <p>Map requirements to ERPNext modules and doctypes.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-num">02</span>
            <div>
              <h4>Design</h4>
              <p>Design workflows, permissions, and data structure.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-num">03</span>
            <div>
              <h4>Delivery</h4>
              <p>Implement, test, and document configuration and queries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/api";

export default {
  name: "AboutPage",
  data() {
    return {
      profile: null,
      education: [],
      skills: [],
      defaultSummary:
        "I am a 23-year-old recent graduate from St. Pauls University. I focus fully on ERP systems with ERPNext as my specialization. I work across Finance, Selling, Buying, Inventory, HR, Manufacturing, and Projects, and I understand how ERPNext documents map to MariaDB tables, indexes, and relationships for traceable data flow.",
    };
  },
  computed: {
    summaryText() {
      return this.profile && this.profile.bio
        ? this.profile.bio
        : this.defaultSummary;
    },
    educationText() {
      if (this.education.length) {
        const item = this.education[0];
        const degree = item.degree || "Recent Graduate";
        return `${item.school} - ${degree}`;
      }
      return "St. Pauls University - Recent Graduate";
    },
  },
  async mounted() {
    try {
      const [profile, education, skills] = await Promise.all([
        api.getProfile(),
        api.getEducation(),
        api.getSkills(),
      ]);
      this.profile = profile;
      this.education = education || [];
      this.skills = (skills || []).slice(0, 6);
    } catch (err) {
      // Keep fallback content if API is unavailable.
      console.error(err);
    }
  },
};
</script>

<style scoped>
.about-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

.about-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  align-items: start;
}

.title {
  font-size: clamp(2rem, 1.6rem + 1.5vw, 2.6rem);
  margin: 12px 0 16px;
  color: #1f2734;
}

.summary {
  color: #555;
  line-height: 1.7;
  max-width: 600px;
}

.snapshot {
  display: grid;
  gap: 14px;
}

.snapshot-card {
  background: #fffaf4;
  border: 1px solid rgba(31, 39, 52, 0.08);
  border-radius: 14px;
  padding: 18px 20px;
  box-shadow: 0 10px 20px rgba(31, 39, 52, 0.08);
}

.snapshot-label {
  margin: 0 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
  color: #b86a34;
  font-weight: 600;
}

.snapshot-value {
  margin: 0;
  color: #2f3a4a;
  font-weight: 500;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  margin-top: 48px;
}

.capabilities,
.process {
  background: #ffffff;
  border: 1px solid rgba(31, 39, 52, 0.08);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 12px 24px rgba(31, 39, 52, 0.08);
}

.capabilities h3,
.process h3 {
  margin-top: 0;
  color: #1f2734;
}

.capabilities ul {
  margin: 12px 0 0;
  padding-left: 18px;
  color: #4a5563;
  line-height: 1.7;
}

.process-steps {
  display: grid;
  gap: 18px;
  margin-top: 12px;
}

.step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: start;
}

.step-num {
  background: #2f6f6d;
  color: #fff;
  font-weight: 700;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.8rem;
}

.step h4 {
  margin: 0 0 6px;
  color: #1f2734;
}

.step p {
  margin: 0;
  color: #4a5563;
}

@media (max-width: 768px) {
  .about-page {
    padding: 8px;
  }

  .about-hero {
    gap: 20px;
  }

  .about-grid {
    gap: 20px;
  }

  .capabilities,
  .process {
    padding: 18px;
  }
}
</style>
