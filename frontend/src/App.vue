<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/NavbarPage.vue";
import Footer from "@/components/FooterPage.vue";

export default {
  name: "AppPage",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=Manrope:wght@300;400;500;600;700&display=swap");

:root {
  --bg: #f5efe8;
  --bg-soft: #fbf7f2;
  --ink: #1f2734;
  --muted: #5c6675;
  --accent: #d98447;
  --accent-strong: #b86a34;
  --teal: #2f6f6d;
  --card: #fffaf4;
  --border: rgba(31, 39, 52, 0.08);
  --shadow: 0 20px 60px rgba(31, 39, 52, 0.12);
  --font-display: "Fraunces", serif;
  --font-body: "Manrope", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-body);
  color: var(--ink);
  background: radial-gradient(
      circle at 10% 20%,
      rgba(216, 132, 71, 0.14),
      transparent 55%
    ),
    radial-gradient(
      circle at 90% 10%,
      rgba(47, 111, 109, 0.12),
      transparent 50%
    ),
    linear-gradient(180deg, var(--bg) 0%, #fefcf9 60%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  width: 100%;
  padding: 48px 20px 80px;
}

.container {
  width: min(1120px, 100%);
  margin: 0 auto;
}

.page {
  width: 100%;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  color: var(--accent-strong);
  font-weight: 600;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 1.4rem + 1.5vw, 2.5rem);
  margin: 0 0 16px;
}

.section-subtitle {
  color: var(--muted);
  font-size: 1rem;
  max-width: 680px;
}

.btn-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 10px 22px rgba(216, 132, 71, 0.25);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(216, 132, 71, 0.3);
}

.btn-ghost {
  border-color: rgba(31, 39, 52, 0.2);
  color: var(--ink);
  background: transparent;
}

.btn-ghost:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 18px rgba(31, 39, 52, 0.08);
}

@media (max-width: 768px) {
  main {
    padding: 32px 16px 56px;
  }

  .btn-row {
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}
</style>
