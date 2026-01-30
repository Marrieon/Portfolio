<template>
  <nav class="navbar">
    <div class="logo">
      <img :src="logo" alt="Logo" />
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <div class="nav-actions">
      <router-link class="btn btn-primary" to="/contact">Hire me</router-link>
    </div>
  </nav>
</template>

<script>
import logoImage from "@/assets/logo-2.png"; // Import the logo

export default {
  data() {
    return {
      logo: logoImage,
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 16px 20px;
  color: #1f2734;
  border-bottom: 1px solid rgba(31, 39, 52, 0.08);
  gap: 16px;
  flex-wrap: wrap;
}

.logo img {
  height: 50px; /* Adjust size as needed */
  width: auto;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

.nav-links a {
  text-decoration: none;
  color: #1f2734;
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #b86a34;
}

.nav-actions {
  display: flex;
  align-items: center;
}

@media (max-width: 840px) {
  .navbar {
    justify-content: center;
  }

  .nav-links {
    justify-content: center;
    gap: 16px;
    font-size: 0.95rem;
  }
}
</style>
