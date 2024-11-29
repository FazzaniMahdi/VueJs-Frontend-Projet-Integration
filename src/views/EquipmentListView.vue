<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    const listMateriel = ref({})

    onMounted(() => {
        axios.get("http://localhost:5000/")
        .then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    })
</script>

<template>
    equipment list 
    {{ listMateriel.value == null }}
    {{ listMateriel.value }}
</template>