<script setup>
import axios from 'axios';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const email = ref("")
const password = ref("")
const router = useRouter()
const user = ref({})
function login() {
    axios.post("http://localhost:5000/api/users/login",
        {
            "email": email.value,
            "password": password.value
        }
    ).then(res => {
        console.log(res.data)
        user.value = res.data.user
        console.log(user.value)
        sessionStorage.setItem("user", JSON.stringify(user.value))
        router.push("/")
    }).catch(err => { console.log(err) })
}
</script>

<template>
    <div class="overflow-x-auto">
        <table class="table">
            <tbody>
                <!-- row 1 -->
                <tr>
                    <td><p class="text-5xl">S'authentifier</p></td>
                    <td rowspan="3"><img :src="require('../assets/login.png')" width="500px" height="500px"></td>
                </tr>
                <!-- row 2 -->
                <tr>
                    <td><input v-model="email" type="email" placeholder="email" class="input input-bordered w-1/2 md:w-full" required /></td>
                </tr>
                <!-- row 3 -->
                <tr>
                    <td><input v-model="password" type="password" placeholder="password" class="input input-bordered w-1/2 md:w-full" required /></td>
                </tr>
                <tr>
                    <td><button class="w-1/2 md:w-full" @click="login()">se connecter</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>