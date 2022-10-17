import { createRouter, createWebHistory } from "vue-router";
import UserDetail from '../components/UserDetail.vue';
import Users from '../components/Users.vue';

const routes=[
    {path:'/',name: 'userForm', component: UserDetail},
    {path:'/users',name: 'userList', component: ()=>import('../components/Users.vue')},
    {path:'/users/:fname/:lname/:age',name: 'oneUser', component: ()=>import('../components/thisUser.vue')},
]

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router