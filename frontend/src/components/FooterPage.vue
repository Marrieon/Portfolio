<template>
  <footer class="footer">
    <div class="footer-content">
      <section class="footer-block">
        <h3>Stacey Marrieon</h3>
        <p>
          ERPNext engineer focused on reliable systems, clean data workflows,
          and production-ready implementation.
        </p>
      </section>

      <section class="footer-block">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </section>

      <section class="footer-block">
        <h4>Professional Note</h4>
        <p>
          Open to ERPNext implementation, customization, and workflow automation
          roles.
        </p>
        <router-link class="footer-cta" to="/contact">
          Let us work together
        </router-link>
      </section>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ year }} Stacey Marrieon. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #f8f3ed 0%, #f1e7dc 100%);
  color: #253042;
  padding: 32px 20px 18px;
  width: 100%;
  border-top: 1px solid rgba(31, 39, 52, 0.08);
}

.footer-content {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 28px;
}

.footer-block h3,
.footer-block h4 {
  margin: 0 0 10px;
  color: #1f2734;
}

.footer-block h3 {
  font-size: 1.2rem;
}

.footer-block h4 {
  font-size: 1rem;
}

.footer-block p {
  margin: 0;
  color: #4d596b;
  line-height: 1.65;
}

.footer-block ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.footer-block a {
  color: #2e394a;
  font-weight: 600;
  transition: color 0.2s ease;
}

.footer-block a:hover {
  color: var(--accent-strong);
}

.footer-cta {
  margin-top: 14px;
  display: inline-flex;
}

.footer-bottom {
  width: min(1120px, 100%);
  margin: 22px auto 0;
  padding-top: 14px;
  border-top: 1px solid rgba(31, 39, 52, 0.1);
}

.footer-bottom p {
  margin: 0;
  font-size: 0.92rem;
  color: #5d6878;
}

@media (max-width: 900px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
