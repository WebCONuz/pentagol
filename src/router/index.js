import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminLayout from "../layout/AdminLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/admin/Login.vue"),
    },
    {
      path: "/admin/",
      component: AdminLayout,
      children: [
        {
          path: "leagues",
          component: () => import("../views/admin/League.vue"),
        },
        {
          path: "teams",
          component: () => import("../views/admin/Teams.vue"),
        },
        {
          path: "matches",
          component: () => import("../views/admin/Matches.vue"),
        },
        {
          path: "news",
          component: () => import("../views/admin/News.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../layout/NotFound.vue"),
    },
  ],
});

// Check Token
router.beforeEach(async (to, from) => {
  // const token = localStorage.getItem("token");
  const token = true;
  if (token) {
    return true;
  } else if (["/", "/about", "/login"].includes(to.path)) {
    return true;
  } else {
    return "/";
  }
});

export default router;
