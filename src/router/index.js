import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import ContactUs from '../components/ContactUs.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact Us',
        component: ContactUs
    }

]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router