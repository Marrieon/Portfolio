<template>
  <nav class="navbar">
    <div class="logo">
      <img :src="logo" alt="Logo" />
    </div>
    <div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <div class="social-links"></div>
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
  background-color: white;
  padding: 15px 20px;
  color: black;
  font-family: cursive;
}

.logo img {
  height: 50px; /* Adjust size as needed */
  width: auto;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 100px;
}

.nav-links a {
  text-decoration: none;
  color: black;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #e738e4;
}
</style>
