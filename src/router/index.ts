import { createRouter, createWebHashHistory } from "vue-router"

import HelloWorld from '../components/HelloWorld.vue'
import HiVue from '../components/HiVue.vue'
import About from '../components/About.vue'

const routes = [
    // router参数详细看下文
    {
        path: "/home",
        name: "home",
        component: HelloWorld
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/user/:uid",  // 动态参数
        name: "user",
        component: HiVue
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
