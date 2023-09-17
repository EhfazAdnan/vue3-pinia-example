import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
export const useCounterStore = defineStore('counter',{
  state: () => ({
    count: 0,
  }),
  getters: {
    countDigitLength: (state) => state.count.toString().length,
  },
  actions: {
    increment(){
      this.count++;
    },
    decrement(){
      this.count--;
    }
  }
});
