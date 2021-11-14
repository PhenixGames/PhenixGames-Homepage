import {createRouter, createWebHistory} from 'vue-router';
import config from '../../config.json';

const routes = [
    {
        path: config.routing.home.route,
        name: config.routing.home.name,
        component: () => import ('../views/homepage/Home.vue')
    },
    {
        path: config.routing.legal.datenschutz.route,
        name: config.routing.legal.datenschutz.name,
        component: () => import ('../views/legal/datenschutz.vue')
    },
    {
        path: config.routing.legal.impressum.route,
        name: config.routing.legal.impressum.name,
        component: () => import ('../views/legal/impressum.vue')
    }
]

const router = createRouter({
    history: createWebHistory(config.frontend.baseURL),
    routes
})

export default router
