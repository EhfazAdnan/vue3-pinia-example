<script setup>
  import Counter from "@/components/Counter.vue";
  import { useAuthStore } from "@/stores/auth";
  import {storeToRefs} from "pinia";

  const authStore = useAuthStore();
  const { isAuthenticated, user, fullname } = storeToRefs(authStore);
</script>

<template>
  <main>
    <div v-if="isAuthenticated">
      User name is: {{fullname}}
    </div>
    <Counter />
  </main>
</template>
