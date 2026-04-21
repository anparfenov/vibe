import { createRouter, createWebHistory } from "vue-router"
import CvPage from "../pages/CvPage.vue"
import HomePage from "../pages/HomePage.vue"
import NotFoundPage from "../pages/NotFoundPage.vue"
import ProjectsPage from "../pages/ProjectsPage.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/cv", component: CvPage },
    { path: "/projects", component: ProjectsPage },
    { path: "/:pathMatch(.*)*", component: NotFoundPage },
  ],
})
