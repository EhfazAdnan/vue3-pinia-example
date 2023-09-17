<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="authStore.logout" v-if="authStore.isAuthenticated">Logout</button>
        <button @click="authStore.login" v-else>Login</button>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
