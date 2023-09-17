import { defineStore } from 'pinia';

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        // user: {
        //     name: "Adnan",
        //     email: "test@test.com"
        // },
        user: {},
    }),
    getters: {
      fullname: (state) => `${state.user.first_name} ${state.user.last_name}`,
    },
    actions: {
        logout(){
            this.$patch((state) => {
                (state.isAuthenticated = false), (state.user = {});
            });
        },

        async login(){

            // this.$patch((state) => {
            //     (state.isAuthenticated = true), (state.user = {name: "Adnan", email: "test@test.com"});
            // });

            const res = await fetch("https://reqres.in/api/users/2");
            const { data } = await res.json();
            this.user = data;
            this.isAuthenticated = true;
        }
    }
});