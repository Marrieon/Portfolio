<template>
  <div class="container">
    <Navbar />
    <section class="about">
      <h2>About Me</h2>
      <div class="grid">
        <div class="box web-dev">
          <h3>Web Development</h3>
          <p>
            Creating stunning, responsive, and dynamic websites using modern
            frameworks like Vue.js, React, and Node.js.
          </p>
        </div>
        <div class="box data-engineering">
          <h3>Data Engineering</h3>
          <p>
            Building robust data pipelines, ETL processes, and scalable data
            solutions with Python, SQL, and cloud platforms.
          </p>
        </div>
        <div class="box android-dev">
          <h3>Android Development</h3>
          <p>
            Developing high-quality, user-friendly Android applications with
            Kotlin and Java, ensuring great user experience.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}

.grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.box {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: transform 0.3s ease;
}

.box:hover {
  transform: scale(1.05);
}

.web-dev {
  border-top: 5px solid #42b983;
}

.data-engineering {
  border-top: 5px solid #f39c12;
}

.android-dev {
  border-top: 5px solid #3498db;
}
</style>
