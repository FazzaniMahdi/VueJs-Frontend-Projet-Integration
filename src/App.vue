<script setup>
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
//import Login from './components/LoginView.vue';
//import { useRouter } from 'vue-router';
//const router = useRouter()
const route = useRoute()
const router = useRouter()
const refreshCounter = ref(0)
router.beforeEach(async (to, from) => {
  console.log(to.name+" "+from.name)
  console.log(route.fullPath)
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- NavBar -->
    <NavBar :key="refreshCounter"/>

    <!-- Main Content -->
    <main class="flex-grow">
      <RouterView :key="route.fullPath"/>
    </main>

    <!-- Footer -->
    <FooterComponent :key="route.fullPath"/>
  </div>
</template>