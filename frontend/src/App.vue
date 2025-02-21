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
/* Ensure the entire page stretches properly */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* Ensure #app takes full height and uses flexbox */
#app {
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f4f4f4;
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
}

/* Main content should expand and keep the footer at the bottom */
main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* Navbar and Footer Styling */
nav {
  background: #2c3e50;
  color: white;
  padding: 15px;
}

footer {
  background: #2c3e50;
  color: white;
  padding: 15px;
  text-align: center;
}
</style>
