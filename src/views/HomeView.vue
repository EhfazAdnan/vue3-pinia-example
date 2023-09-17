<script setup>
  import Counter from "@/components/Counter.vue";
  import { useAuthStore } from "@/stores/auth";
  import {storeToRefs} from "pinia";

  const authStore = useAuthStore();
  const { isAuthenticated, user } = storeToRefs(authStore);
</script>

<template>
  <main>
    <div v-if="isAuthenticated">
      User name is: {{user.name}}
    </div>
    <Counter />
  </main>
</template>
