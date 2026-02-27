<template>
  <nav class="navbar">
    <div class="nav-shell">
      <router-link class="brand" to="/" @click="closeMenu">
        <img :src="logo" alt="Stacey Marrieon" />
        <div class="brand-copy">
          <span class="brand-name">Stacey Marrieon</span>
          <span class="brand-role">ERPNext Engineer</span>
        </div>
      </router-link>

      <button
        class="menu-toggle"
        type="button"
        :class="{ active: isMenuOpen }"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="main-nav-links"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul id="main-nav-links" class="nav-links" :class="{ open: isMenuOpen }">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/about" @click="closeMenu">About</router-link></li>
        <li>
          <router-link to="/projects" @click="closeMenu">Projects</router-link>
        </li>
        <li>
          <router-link to="/contact" @click="closeMenu">Contact</router-link>
        </li>
        <li class="nav-actions-mobile">
          <router-link
            class="btn btn-primary nav-cta"
            to="/contact"
            @click="closeMenu"
          >
            Hire me
          </router-link>
        </li>
      </ul>

      <div class="nav-actions nav-actions-desktop">
        <router-link class="btn btn-primary nav-cta" to="/contact">
          Hire me
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarPage",
  data() {
    return {
      logo: "/profile-favicon.jpg",
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleResize() {
      if (window.innerWidth > 768) {
        this.isMenuOpen = false;
      }
    },
    handleKeydown(event) {
      if (event.key === "Escape") {
        this.closeMenu();
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("keydown", this.handleKeydown);
  },
  watch: {
    $route() {
      this.closeMenu();
    },
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1200;
  width: 100%;
  padding: 12px 20px;
  background: rgba(250, 246, 241, 0.84);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(31, 39, 52, 0.08);
}

.nav-shell {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: max-content;
}

.brand img {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid rgba(31, 39, 52, 0.12);
  box-shadow: 0 6px 16px rgba(31, 39, 52, 0.15);
}

.brand-copy {
  display: grid;
  line-height: 1.2;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1.02rem;
  color: #1f2734;
}

.brand-role {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6a7381;
  font-weight: 700;
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid rgba(31, 39, 52, 0.18);
  background: rgba(255, 255, 255, 0.85);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  margin-left: auto;
}

.menu-toggle span {
  width: 20px;
  height: 2px;
  border-radius: 999px;
  background: #1f2734;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 0 auto;
  padding: 0;
}

.nav-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 999px;
  color: #1f2734;
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.nav-links a:hover {
  background: rgba(31, 39, 52, 0.07);
  color: #0f1623;
}

.nav-links a.router-link-exact-active {
  background: linear-gradient(135deg, #d98447 0%, #b86a34 100%);
  color: #fff;
  box-shadow: 0 8px 18px rgba(185, 106, 52, 0.28);
}

.nav-actions {
  display: flex;
  align-items: center;
  margin-left: 4px;
}

.nav-cta {
  min-width: 106px;
}

.nav-actions-mobile {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    padding: 10px 14px;
  }

  .nav-shell {
    flex-wrap: wrap;
    gap: 12px;
  }

  .brand img {
    width: 42px;
    height: 42px;
  }

  .brand-name {
    font-size: 0.95rem;
  }

  .brand-role {
    font-size: 0.69rem;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .nav-actions-desktop {
    display: none;
  }

  .nav-links {
    order: 3;
    width: 100%;
    flex-direction: column;
    gap: 0;
    margin-top: 8px;
    margin-left: 0;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(31, 39, 52, 0.1);
    border-radius: 14px;
    box-shadow: 0 16px 30px rgba(31, 39, 52, 0.12);
    transition: max-height 0.28s ease, opacity 0.2s ease;
  }

  .nav-links.open {
    max-height: 340px;
    opacity: 1;
    pointer-events: auto;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links a {
    display: block;
    width: 100%;
    border-radius: 10px;
    padding: 11px 14px;
  }

  .nav-links a.router-link-exact-active {
    box-shadow: none;
  }

  .nav-actions-mobile {
    display: block;
    padding: 10px 12px 12px;
  }

  .nav-actions-mobile .btn {
    width: 100%;
  }
}

@media (max-width: 420px) {
  .brand-role {
    display: none;
  }
}
</style>
