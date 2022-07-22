import  Home from "../views/Home.vue";
import  About from "../views/About.vue";
import { createRouter, createWebHashHistory } from "vue-router";


const routes=[
    { path: '/', name: "Home", component: Home },
    { path: '/about', name: "About", component: About },
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: routes 
    }
)
export default router;