<template>
  <div>
    <h1>My Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.title }} - {{ project.tech.join(", ") }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { projects: [] };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:5000/projects"); // Fetch from backend
      this.projects = res.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  },
};
</script>
