import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("@/layout/index.vue"),
      meta: {
        title: "layout",
        hidden: false,
      },
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/home/index.vue"),
          meta: {
            title: "首頁",
            hidden: false,
          },
        },
        {
          path: "/weatherForecast36Hr",
          name: "weatherForecast36Hr",
          component: () => import("@/views/weatherForecast36Hr/index.vue"),
          meta: {
            title: "今明36小時內天氣預報",
            hidden: false,
          },
        },
      ],
    },
  ],
});

export default router;
