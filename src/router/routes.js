import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import ModifyUserView from '@/views/ModifyUserView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import SignUpView from '@/views/SignUpView.vue'
import UserDetailsView from '@/views/UserDetailsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UsersListView from '@/director views/UsersListView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import EquipmentListView from '@/views/EquipmentListView.vue'
import DepotsListView from '@/director views/DepotsListView.vue'
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/auth/login",
        name: "login",
        component: LoginView
    },
    {
        path: "/auth/signUp",
        name: "signUp",
        component: SignUpView
    },
    {
        path: "/users/modify/:userId",
        name: "modifyUser",
        component: ModifyUserView
    },
    {
        path: "/users/inspect/:userId",
        name: "userDetails",
        component: UserDetailsView
    },
    {
        path: "/users/list",
        name: "usersList",
        component: UsersListView
    },
    {
        path: "/users/profile",
        name: "userProfile",
        component: UserProfileView
    },
    {
        path: "/equipment/list",
        name: "equipmentList",
        component: EquipmentListView
    },
    {
        path: "/depots/list",
        name: "depotsList",
        component: DepotsListView
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
