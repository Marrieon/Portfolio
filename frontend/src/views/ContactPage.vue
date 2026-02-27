<template>
  <section class="contact">
    <div class="contact-card">
      <div class="contact-copy">
        <p class="eyebrow">Contact</p>
        <h1>Let's build your ERPNext system</h1>
        <p class="summary">
          Share your modules, workflows, and data requirements. I will respond
          with a technical plan for ERPNext configuration, automation, and
          reporting.
        </p>

        <div class="contact-details">
          <div>
            <p class="detail-label">Email</p>
            <p class="detail-value">yourname@email.com</p>
          </div>
          <div>
            <p class="detail-label">Location</p>
            <p class="detail-value">Your city, country</p>
          </div>
          <div>
            <p class="detail-label">Availability</p>
            <p class="detail-value">Open to ERPNext projects and support</p>
          </div>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="submitForm">
        <label>
          Full name
          <input
            v-model="form.name"
            type="text"
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Email
          <input
            v-model="form.email"
            type="email"
            placeholder="you@email.com"
            required
          />
        </label>
        <label>
          ERP details
          <textarea
            v-model="form.message"
            placeholder="Modules, workflows, data structure, reporting needs"
            required
          ></textarea>
        </label>
        <button class="btn btn-primary" type="submit" :disabled="submitting">
          {{ submitting ? "Sending..." : "Send message" }}
        </button>
        <p v-if="status" class="status">{{ status }}</p>
      </form>
    </div>
  </section>
</template>

<script>
import { api } from "@/api";

export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      submitting: false,
      status: "",
    };
  },
  methods: {
    async submitForm() {
      this.status = "";
      this.submitting = true;
      try {
        await api.sendContact(this.form);
        this.status = "Thanks! Your message has been sent.";
        this.form = { name: "", email: "", message: "" };
      } catch (err) {
        this.status = "Sorry, something went wrong. Please try again.";
        console.error(err);
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>

<style scoped>
.contact {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
}

.contact-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
  background: #ffffff;
  border: 1px solid rgba(31, 39, 52, 0.08);
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 16px 32px rgba(31, 39, 52, 0.1);
}

.contact-copy h1 {
  font-size: clamp(2rem, 1.7rem + 1.3vw, 2.6rem);
  margin: 12px 0 16px;
  color: #1f2734;
}

.summary {
  color: #555;
  line-height: 1.7;
  max-width: 520px;
}

.contact-details {
  margin-top: 20px;
  display: grid;
  gap: 14px;
}

.detail-label {
  margin: 0 0 4px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
  color: #b86a34;
  font-weight: 600;
}

.detail-value {
  margin: 0;
  color: #2f3a4a;
  font-weight: 500;
}

.contact-form {
  display: grid;
  gap: 12px;
}

.contact-form label {
  display: grid;
  gap: 6px;
  font-weight: 600;
  color: #2f3a4a;
  font-size: 0.9rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(31, 39, 52, 0.2);
  background: #fbf7f2;
  font-size: 0.95rem;
}

.contact-form textarea {
  min-height: 140px;
  resize: vertical;
}

.status {
  margin: 6px 0 0;
  color: #2f6f6d;
  font-weight: 600;
}

@media (max-width: 768px) {
  .contact {
    padding: 8px;
  }

  .contact-card {
    padding: 20px;
  }
}
</style>
