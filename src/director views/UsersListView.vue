<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
const usersList = ref({})
const refreshCounter = ref(0)
function deleteUser(userId) {
    if(confirm("are you really sure you want to delete this user?")) {
        axios.delete(`http://localhost:5000/api/users/${userId}`)
        .then(res => {
            usersList.value = usersList.value.filter(user => user._id !== userId);
            refreshCounter.value ++
            console.log(res.data)
        }).catch(err => {
            console.log(err.data)
        })    
    }
}

onMounted(() => {
    axios.get("http://localhost:5000/api/users/")
    .then(res => {
        usersList.value = res.data
        console.log(res.data)
    }).catch(error => {
        console.log(error)
    })
})

</script>
<template :key="refreshCounter">
    <div class="overflow-x-auto">
        <button class="btn no-animation" v-if="false">Ajouter un utilisateur</button>
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>username</th>
                    <th>email</th>
                    <th>address</th>
                    <th colspan="3"><center>action</center></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in usersList" :key="user">
                    {{ console.log(user) }}
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.address }}</td>
                    <td>
                        <RouterLink :to="`/users/inspect/${user._id}`">inspect</RouterLink>
                    </td>
                    <td>
                        <RouterLink :to="`/users/modify/${user._id}`">modify</RouterLink>
                    </td>
                    <td>
                        <button @click="deleteUser(user._id)">delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>