import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage", // Capitalize for consistency
    component: () =>
      import(/* webpackChunkName: "AboutPage" */ "../views/AboutPage.vue"),
  },
  {
    path: "/contact",
    name: "ContactPage", // Capitalize for consistency
    component: () =>
      import(/* webpackChunkName: "ContactPage" */ "../views/ContactPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
