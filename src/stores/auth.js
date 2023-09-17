import { defineStore } from 'pinia';

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: true,
        user: {
            name: "Adnan",
            email: "test@test.com",
        },
    }),
});