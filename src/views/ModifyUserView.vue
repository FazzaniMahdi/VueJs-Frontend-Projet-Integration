<script setup>
import axios from 'axios';
    import { ref } from 'vue';
    const user = JSON.parse(sessionStorage.getItem("user"))
    const username = ref(user.username)
    const email = ref(user.email)
    const firstName = ref(user.firstName)
    const lastName = ref(user.lastName)
    const phoneNumber = ref(user.phoneNumber)
    const address = ref(user.address)
    function modifyUser() {
        console.log(username.value)
        axios.put(`http://localhost:5000/api/users/${user.id}`, {
            "username": username.value,
            "email": email.value,
            "firstName": firstName.value,
            "lastName": lastName.value,
            "phoneNumber": phoneNumber.value,
            "address": address.value
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
</script>
<template>
    username: <input type="text" v-model="username"><br>
    email: <input type="text" v-model="email"><br>
    firstName: <input type="text" v-model="firstName"><br>
    lastName: <input type="text" v-model="lastName"><br>
    phoneNumber: <input type="text" v-model="phoneNumber"><br>
    address: <input type="text" v-model="address"><br>
    <button @click="modifyUser()">submit</button>
</template>