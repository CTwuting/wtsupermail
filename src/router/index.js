import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 懒加载的方式
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/Category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router