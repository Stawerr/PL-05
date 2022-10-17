import { createRouter, createWebHistory } from "vue-router";
import UserDetail from '../components/UserDetail.vue';
import Users from '../components/Users.vue';

const routes=[
    {path:'/', component: UserDetail},
    {path:'/users', component: ()=>import('../components/Users.vue')},
    //{path:'/users/:id', component: ()=>import('../views/Myself.vue')},
]

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router