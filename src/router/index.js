import {createRouter, createWebHistory} from "vue-router";
import layout from "@/views/Layout/index.vue";
import home from "@/views/Home/index.vue";
import categroy from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue";
import Dateil from "@/views/Datail/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "/",
          component: home,
        },
        {
          path: "categroy/:id",
          component: categroy,
        },
        {
          path: "categroy/sub/:id",
          component: SubCategory,
        },
        {
          path: "datail/:id",
          component: Dateil
        }
      ],
    },
  ],
  scrollBehavior() {
    return {top: 0}
  }
});

export default router;
