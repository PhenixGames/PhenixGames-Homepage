import { createRouter, createWebHistory } from 'vue-router';
import config from '../../config.json';
const routes = [
    {
        path: config.routing.home.route,
        name: config.routing.home.name,
        component: () => import('../views/homepage/Home.vue'),
    },
    {
        path: config.routing.legal.datenschutz.route,
        name: config.routing.legal.datenschutz.name,
        component: () => import('../views/legal/datenschutz.vue'),
    },
    {
        path: config.routing.legal.impressum.route,
        name: config.routing.legal.impressum.name,
        component: () => import('../views/legal/impressum.vue'),
    },
    // {
    //     path: config.routing.socials.discord.route,
    //     name: config.routing.socials.discord.name,
    //     component: () => (location.href = config.routing.socials.discord.link),
    // },
    // {
    //     path: config.routing.socials.youtube.route,
    //     name: config.routing.socials.youtube.name,
    //     component: () => (location.href = config.routing.socials.youtube.link),
    // },
    // {
    //     path: config.routing.socials.instagram.route,
    //     name: config.routing.socials.instagram.name,
    //     component: () => (location.href = config.routing.socials.instagram.link),
    // },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
