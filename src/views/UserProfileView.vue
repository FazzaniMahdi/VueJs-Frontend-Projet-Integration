<script setup>
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const user = ref({})
    const username = ref("")
    const email = ref("")
    const firstName = ref("")
    const lastName = ref("")
    const phoneNumber = ref("")
    const address = ref("")
    const router = useRouter()
    onMounted(() => {
        if(sessionStorage.getItem("user") != null) {
            user.value = JSON.parse(sessionStorage.getItem("user"))
            username.value = user.value.username
            email.value = user.value.email
            firstName.value = user.value.firstName
            lastName.value = user.value.lastName
            phoneNumber.value = user.value.phoneNumber
            address.value = user.value.address
        }else {
            router.push("/")
        }
    })
</script>

<template>
    <h1>My profile</h1> <br>
    username : {{ username }} <br>
    email: {{ email }} <br>
    firstname: {{ firstName }} <br>
    lastName: {{ lastName }} <br>
    phoneNumber: {{ phoneNumber }} <br>
    address : {{ address }}
</template>