<template>
  <div id="app">
    <div class="site-video-bg" aria-hidden="true">
      <video autoplay muted loop playsinline>
        <source src="/projects-bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="site-overlay" aria-hidden="true"></div>

    <div class="site-shell">
      <Navbar />
      <aside class="social-rail" aria-label="Social links">
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M12.6.75h2.542L9.592 7.1 16 15.25h-5.02l-3.93-4.97-4.43 4.97H.075l5.994-6.72L0 .75h5.146l3.552 4.73zM11.73 13.8h1.41L4.38 2.13H2.87z"
            />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8"
            />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M8.94 6.5H7.5V5.6c0-.4.26-.5.44-.5h1V3.29l-1.37-.01c-1.52 0-1.87 1.14-1.87 1.87V6.5H4.56V8.4h1.14V13h1.8V8.4h1.22l.16-1.9z"
            />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.087 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76c-.198.509-.333 1.09-.372 1.943C.01 5.556 0 5.829 0 8s.01 2.444.048 3.297c.039.853.174 1.434.372 1.943.205.526.478.972.923 1.417.445.445.891.718 1.417.923.509.198 1.09.333 1.943.372C5.556 15.99 5.829 16 8 16s2.444-.01 3.297-.048c.853-.039 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.417-.923 3.9 3.9 0 0 0 .923-1.417c.198-.509.333-1.09.372-1.943C15.99 10.444 16 10.171 16 8s-.01-2.444-.048-3.297c-.039-.853-.174-1.434-.372-1.943a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.509-.198-1.09-.333-1.943-.372C10.444.01 10.171 0 8 0m0 1.441c2.136 0 2.389.008 3.232.046.78.035 1.204.166 1.486.275.374.145.64.318.92.598.28.28.453.546.598.92.109.282.24.705.275 1.486.038.843.046 1.096.046 3.232s-.008 2.389-.046 3.232c-.035.78-.166 1.204-.275 1.486a2.46 2.46 0 0 1-.598.92 2.46 2.46 0 0 1-.92.598c-.282.109-.705.24-1.486.275-.843.038-1.096.046-3.232.046s-2.389-.008-3.232-.046c-.78-.035-1.204-.166-1.486-.275a2.46 2.46 0 0 1-.92-.598 2.46 2.46 0 0 1-.598-.92c-.109-.282-.24-.705-.275-1.486C1.45 10.389 1.44 10.136 1.44 8s.008-2.389.046-3.232c.035-.78.166-1.204.275-1.486.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.109.705-.24 1.486-.275.843-.038 1.096-.046 3.232-.046m0 2.454A4.105 4.105 0 1 0 8 12.105 4.105 4.105 0 0 0 8 3.895m0 6.769A2.664 2.664 0 1 1 8 5.336a2.664 2.664 0 0 1 0 5.328m4.271-6.934a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92"
            />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zM4.943 13.5V6.169H2.542V13.5zM3.743 5.169c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248S2.4 3.212 2.4 3.92c0 .694.521 1.248 1.327 1.248h.016m4.908 8.331V9.359c0-.221.016-.442.082-.6.179-.442.586-.9 1.27-.9.897 0 1.256.679 1.256 1.673V13.5h2.401V9.255c0-2.272-1.211-3.328-2.827-3.328-1.304 0-1.885.717-2.211 1.221h.03V6.169H6.252c.03.694 0 7.331 0 7.331z"
            />
          </svg>
        </a>
      </aside>
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
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
  background: #f5efe8;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
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
  position: relative;
  min-height: 100vh;
}

.site-shell {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-video-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.site-video-bg video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.06);
  filter: blur(6px) saturate(0.9);
  opacity: 0.34;
}

.site-overlay {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
      180deg,
      rgba(248, 243, 236, 0.82) 0%,
      rgba(251, 247, 241, 0.84) 55%,
      rgba(246, 240, 233, 0.88) 100%
    ),
    radial-gradient(circle at 12% 8%, rgba(216, 132, 71, 0.12), transparent 45%),
    radial-gradient(circle at 88% 12%, rgba(47, 111, 109, 0.1), transparent 44%);
}

main {
  flex: 1;
  width: 100%;
  padding: 48px 20px 80px;
}

.social-rail {
  position: fixed;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-rail a {
  width: 52px;
  height: 52px;
  border-radius: 999px;
  background: rgba(11, 18, 32, 0.88);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(4px);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.social-rail a:hover {
  transform: translateX(-4px);
  background: var(--accent);
}

.social-rail svg {
  width: 22px;
  height: 22px;
  fill: currentColor;
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

  .social-rail {
    right: 10px;
    gap: 8px;
  }

  .social-rail a {
    width: 44px;
    height: 44px;
  }

  .social-rail svg {
    width: 18px;
    height: 18px;
  }

  .btn-row {
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .social-rail {
    display: none;
  }
}
</style>
