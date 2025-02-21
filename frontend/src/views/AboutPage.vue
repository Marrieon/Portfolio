<template>
  <div class="container">
    <Navbar />
    <section class="about">
      <h2 class="section-title">About Me</h2>
      <div class="grid">
        <div class="box web-dev">
          <h3>Web Development</h3>
          <p>
            Crafting stunning, responsive, and dynamic web experiences using
            modern technologies like Vue.js, React, and Node.js.
          </p>
        </div>
        <div class="box data-engineering">
          <h3>Data Engineering</h3>
          <p>
            Designing scalable data solutions, ETL pipelines, and robust
            architectures using Python, SQL, and cloud platforms.
          </p>
        </div>
        <div class="box android-dev">
          <h3>Android Development</h3>
          <p>
            Building intuitive and high-performance Android applications with
            Kotlin and Java, ensuring seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  font-family: cursive;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  position: relative;
}

.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background: #42b983;
  margin: 10px auto 0;
  border-radius: 2px;
}

.grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.box {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 320px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
}

.box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.web-dev {
  border-top: 6px solid #42b983;
}

.data-engineering {
  border-top: 6px solid #f39c12;
}

.android-dev {
  border-top: 6px solid #3498db;
}
</style>
