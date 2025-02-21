<template>
  <div class="home">
    <div class="content">
      <div class="text-container">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Showcasing my expertise in Web Development, Data Engineering, and
          Android App Development.
        </p>
      </div>

      <!-- Image Container with Soft Rounded Background -->
      <transition name="slide">
        <div v-if="showImage" class="image-container">
          <img src="@/assets/Hom.png" alt="Profile Image" class="Hom-img" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      showImage: false, // Image starts hidden
    };
  },
  mounted() {
    setTimeout(() => {
      this.showImage = true; // Image slides in after 500ms
    }, 500);
  },
};
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  font-family: cursive;
}

/* Text Styling */
.text-container {
  max-width: 50%;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}

p {
  font-size: 1.2rem;
  color: #555;
}

/* Image Container - Positioned Right */

.profile-img {
  width: 80%;
  border-radius: 50%;
}

/* Slide Animation */
.slide-enter-active {
  transition: all 1s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
