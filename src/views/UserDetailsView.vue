<script setup>
    import { ref } from 'vue';
    const user = JSON.parse(sessionStorage.getItem("user"))
    const username = ref(user.username)
    const email = ref(user.email)
    const firstName = ref(user.firstName)
    const lastName = ref(user.lastName)
    const phoneNumber = ref(user.phoneNumber)
    const address = ref(user.address)
</script>
<template>
    username: <input type="text" v-model="username"><br>
    email: <input type="text" v-model="email"><br>
    firstName: <input type="text" v-model="firstName"><br>
    lastName: <input type="text" v-model="lastName"><br>
    phoneNumber: <input type="text" v-model="phoneNumber"><br>
    address: <input type="text" v-model="address"><br>
</template>