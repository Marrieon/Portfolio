<template>
  <section class="projects">
    <div class="featured-zone">
      <div class="projects-content">
        <div class="header">
          <h1>Projects That Show Delivery and Quality</h1>
          <p class="subtitle">
            A focused set of project highlights with clear outcomes, live demos,
            and code access.
          </p>
        </div>

        <div class="project-grid">
          <article
            v-for="(project, index) in firstRowProjects"
            :key="project.id"
            class="project-card"
            :class="{ show: animateCards }"
            :style="{ animationDelay: `${index * 110}ms` }"
          >
            <div class="image-wrap">
              <img
                :src="project.image"
                :alt="`${project.title} preview`"
                :style="
                  project.imagePosition
                    ? { objectPosition: project.imagePosition }
                    : null
                "
              />
              <span class="image-badge">{{ project.category }}</span>
            </div>

            <div class="card-content">
              <h2>{{ project.title }}</h2>
              <p class="project-desc">{{ project.description }}</p>

              <div class="tag-row">
                <span v-for="tag in project.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>

              <div class="btn-row card-actions">
                <a
                  class="btn btn-primary"
                  :href="project.liveLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  class="btn btn-ghost"
                  :href="project.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div class="projects-content rest-content">
      <div class="project-grid">
        <article
          v-for="(project, index) in otherProjects"
          :key="project.id"
          class="project-card"
          :class="{ show: animateCards }"
          :style="{ animationDelay: `${(index + 3) * 110}ms` }"
        >
          <div class="image-wrap">
            <img
              :src="project.image"
              :alt="`${project.title} preview`"
              :style="
                project.imagePosition
                  ? { objectPosition: project.imagePosition }
                  : null
              "
            />
            <span class="image-badge">{{ project.category }}</span>
          </div>

          <div class="card-content">
            <h2>{{ project.title }}</h2>
            <p class="project-desc">{{ project.description }}</p>

            <div class="tag-row">
              <span v-for="tag in project.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>

            <div class="btn-row card-actions">
              <a
                class="btn btn-primary"
                :href="project.liveLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                class="btn btn-ghost"
                :href="project.githubLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectPage",
  computed: {
    firstRowProjects() {
      return this.projects.slice(0, 3);
    },
    otherProjects() {
      return this.projects.slice(3);
    },
  },
  data() {
    return {
      animateCards: false,
      projects: [
        {
          id: 1,
          title: "Parcel Logistics System",
          category: "Logistics Platform",
          description:
            "A parcel delivery platform used to transfer parcels from one location to another, with live map tracking for real-time movement and delivery visibility.",
          image: "/project1.jpeg",
          liveLink: "https://deliveroomarrionstacey.onrender.com/",
          githubLink:
            "https://github.com/Marrieon/Parcel-logistics-Application.git",
          tags: ["Logistics", "Live Map", "Parcel Tracking"],
        },
        {
          id: 2,
          title: "Online Shoe Store",
          category: "E-Commerce",
          description:
            "An online shoe selling platform with M-Pesa integrated as the payment gateway for smooth and secure checkout.",
          image: "/project2.jpeg",
          imagePosition: "50% 12%",
          liveLink: "https://ubora-shoes-store.onrender.com/",
          githubLink:
            "https://github.com/Marrieon/Online-shoe-store-application.git",
          tags: ["Python Flask", "React.js", "Tailwind CSS", "M-Pesa"],
        },
        {
          id: 3,
          title: "Cashewnuts Online Shop",
          category: "E-Commerce",
          description:
            "An online cashewnuts store with Stripe API payment integration, built with a Python backend, Vue.js frontend, and smooth UI animations.",
          image: "/project3.jpeg",
          liveLink: "https://muji-512d1.web.app/",
          githubLink:
            "https://github.com/Marrieon/Cashew-Online-market-stripe-api-.git",
          tags: ["Python", "Vue.js", "Stripe API", "Animations"],
        },
        {
          id: 4,
          title: "School Management System",
          category: "Education Platform",
          description:
            "A school management system with Admin, Student, and Technical Mentor dashboards, including 3-role authentication plus Google and GitHub login.",
          image: "/project4.jpeg",
          liveLink: "https://moringa-school-daily-dev.onrender.com/",
          githubLink: "https://github.com/Marrieon/school-Management-system",
          tags: [
            "Role-Based Auth",
            "Google Login",
            "GitHub Login",
            "Dashboards",
          ],
        },
        {
          id: 5,
          title: "Homes Kenya Sell",
          category: "Real Estate",
          description:
            "A Kenyan real estate website for home sales, showing house specifications, locations, and pricing lists for buyers.",
          image: "/project5.jpeg",
          liveLink: "https://homes-kenya-sell.vercel.app/",
          githubLink: "https://github.com/Marrieon/homes-kenya-sell.git",
          tags: ["Real Estate", "Property Listings", "Locations", "Pricing"],
        },
        {
          id: 6,
          title: "Personal Finance Tracker",
          category: "Finance App",
          description:
            "A personal finance tracker with wallet management, currency converter API integration, and a budget planning workflow.",
          image: "/project6.png",
          liveLink:
            "https://personal-finance-management-system-a3bn.onrender.com/transactions",
          githubLink:
            "https://github.com/Marrieon/Personal-Budget-Tracker-system.git",
          tags: [
            "Wallets",
            "Currency Converter API",
            "Budget Planner",
            "Personal Finance",
          ],
        },
      ],
    };
  },
  mounted() {
    requestAnimationFrame(() => {
      this.animateCards = true;
    });
  },
};
</script>

<style scoped>
.projects {
  width: 100%;
  margin: 0;
  padding: 0 0 40px;
}

.featured-zone {
  padding: 24px 0 10px;
}

.projects-content {
  width: min(1060px, 100%);
  margin: 0 auto;
  padding: 0 24px;
}

.rest-content {
  padding-top: 18px;
}

.header h1 {
  font-size: clamp(2.2rem, 1.8rem + 1.6vw, 3rem);
  margin: 12px 0 10px;
  color: var(--ink);
}

.subtitle {
  color: var(--muted);
  max-width: 720px;
  line-height: 1.6;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.project-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: 0 14px 34px rgba(31, 39, 52, 0.11);
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px) scale(0.98);
}

.project-card.show {
  animation: reveal 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.image-wrap {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .image-wrap img {
  transform: scale(1.04);
}

.image-badge {
  position: absolute;
  left: 12px;
  bottom: 12px;
  background: rgba(31, 39, 52, 0.82);
  color: #fff;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.74rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.card-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px 18px 20px;
}

.card-content h2 {
  margin: 0;
  font-size: 1.15rem;
  color: var(--ink);
}

.project-desc {
  color: #4e5967;
  line-height: 1.6;
  margin: 10px 0 14px;
  min-height: 74px;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-content: flex-start;
}

.tag {
  background: #f1f5f9;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.76rem;
  color: #0f172a;
}

.card-actions {
  margin-top: auto;
  padding-top: 16px;
}

.card-actions .btn {
  flex: 1;
  min-width: 0;
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 1024px) {
  .projects-content {
    padding: 0 18px;
  }

  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .projects-content {
    padding: 0 14px;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .project-desc {
    min-height: 0;
  }
}
</style>
