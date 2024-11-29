<script setup>
//import BellIcon from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const user = ref({})
if(JSON.parse(sessionStorage.getItem("user")) != null) {
    user.value = JSON.parse(sessionStorage.getItem("user"))
}
// const navigation = [
//     { name: 'equipment list', href: '/equipment/list', current: true, visible: user != null ? user.role === "normal" : true },
//     { name: 'user list', href: '/users/list', current: false, visible: user != null ? user.role === "admin" : false },
//     { name: 'depots list', href: '/depots/list', current: false, visible: user != null ? user.role === "admin" : false }
// ]
const router = useRouter()
function signOut() {
    sessionStorage.removeItem("user")
    router.push("/")
}
</script>

<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <RouterLink class="btn btn-ghost text-xl" to="/">Home</RouterLink>
        </div>
        <div class="flex-1">
            <RouterLink to="/equipment/list">Liste des matériels</RouterLink>
        </div>
        <div class="flex-auto">
            <RouterLink to="/depots/list" v-if="user.value != 'null' && user.role != 'normal'">Liste des depots</RouterLink>
        </div>
        <div class="flex-auto">
            <RouterLink to="/users/list" v-if="user.value != 'null' && user.role != 'normal'">Liste des utilisateurs</RouterLink>
        </div>
        <div class="flex-none gap-2">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                            :src="require('/src/assets/user.png')" />
                    </div>
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li v-if="user.value">
                        <a class="justify-between">
                            Profile
                            <!-- <span class="badge">New</span> -->
                        </a>
                    </li>
                    <li v-if="user.value">
                        <RouterLink :to="'/users/modify/user.getId'">
                            Modify Account
                        </RouterLink>
                    </li>
                    <li v-if="user.value">
                        <RouterLink @click="signOut">
                            Logout
                        </RouterLink>
                    </li>
                    <li v-if="!user.value">
                        <RouterLink to="/auth/login">
                            Sign in
                        </RouterLink>
                    </li>
                    <li v-if="!user.value">
                        <RouterLink to="/auth/signup">
                            Sign Up
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>