<template>
  <div class="contact-container">
      <div class="image-section">
        <img src="@/assets/Hom.png" alt="Profile Image" class="Hom-img" />
      </div>
      <div class="form-section">
        <h1 class="title">Contact</h1>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Contact</button>
        </form>
        <div class="contact-info">
          <p>
            <strong>Contact</strong><br />
            hi@fashion.com
          </p>
          <p>
            <strong>Based in</strong><br />
            Nairobi, Kenya
          </p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-family: cursive;
}

.contact-content {
  display: flex;
  max-width: 900px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.image-section .Hom-img {
  width: 300px;
  height: auto;
  border-radius: 10px 0 0 10px;
}

.form-section {
  padding: 20px;
  flex: 1;
  text-align: left;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

form input,
form textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

form button {
  background: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
}

.contact-info {
  margin-top: 20px;
  font-size: 1rem;
  color: #333;
}

.social-icons a {
  margin-right: 10px;
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
}
</style>