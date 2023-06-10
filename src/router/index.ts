import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/article/:id",
      name: "article",
      component: () => import("@/views/ArticleEndView.vue"),
    },
    {
      path: "/category/:id",
      name: "category",
      component: () => import("@/views/CategoryEndView.vue"),
    },
    {
      path: "/tag/:id",
      name: "tag",
      component: () => import("@/views/TagEndView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/pageNotFound.vue"),
    },
  ],
});

export default router;
