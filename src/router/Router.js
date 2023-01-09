import { createRouter, createWebHashHistory } from "vue-router";
import AboutPage from '../pages/AboutPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/about', component: AboutPage},
    ]
})