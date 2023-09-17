<template>
  <div>
    <br/>
    <button @click="increment">+</button>
    Count Value: {{store.count}}
    <button @click="decrement">-</button>
    <br />
    length: {{store.countDigitLength}}
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import {computed} from "vue";
const store = useCounterStore();

function increment(){
  store.count++;
}
function decrement(){
  store.count--;
}
</script>