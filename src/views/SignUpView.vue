<script setup>
import router from '@/router/routes';
import axios from 'axios';
import { ref } from 'vue';
const userName = ref("")
const email = ref("")
const password = ref("")
const firstName = ref("")
const lastName = ref("")
const phoneNumber = ref("")
const address = ref("")
//const role = ref("utilisateur")

function register() {
    axios.post("http://localhost:5000/api/users/register", {
        "username": userName.value ,
        "email": email.value,
        "password": password.value,
        "firstName": firstName.value,
        "lastName": lastName.value,
        "phoneNumber": phoneNumber.value,
        "address": address.value,
        //"role": role.value
    }).then(res => {
        console.log(res.data)
        router.push("/")
    }).catch(err => {
        console.log(err)
    })
    }
</script>
<template>
    <div class="overflow-x-auto">
        <table class="table">
            <tbody>
                <!-- row 1 -->
                <tr>
                    <td><p class="text-5xl">S'authentifier</p></td>
                    <td rowspan="8"><img :src="require('../assets/signup.png')"></td>
                </tr>
                <!-- row 2 -->
                <tr>
                    <td><input v-model="email" type="email" placeholder="email" class="input input-bordered w-1/2 md:w-full" required /></td>
                </tr>
                <!-- row 3 -->
                <tr>
                    <td><input v-model="password" type="password" placeholder="password" class="input input-bordered w-1/2 md:w-full" required /></td>
                </tr>
                <!-- row 4-->
                <tr>
                    <td><input v-model="password" type="password" placeholder="first name" class="input input-bordered w-1/2 md:w-full" required /></td>
                </tr>
                <tr>
                    <td><input v-model="password" type="password" placeholder="last name" class="input input-bordered w-1/2 md:w-full" required /></td>
                </tr>
                <tr>
                    <td><input v-model="password" type="password" placeholder="phone number" class="input input-bordered w-1/2 md:w-full" required /></td>
                </tr>
                <tr>
                    <td><input v-model="password" type="password" placeholder="address" class="input input-bordered w-1/2 md:w-full" required /></td>
                </tr>
                <tr>
                    <td><button class="w-1/2 md:w-full" @click="register()">se connecter</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>