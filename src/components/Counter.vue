<template>
  <div>
    <br/>
    <button @click="counterStore.increment">+</button>
    Count Value: {{count}}
    <button @click="counterStore.decrement">-</button>
    <br />
    length: {{countDigitLength}}
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import {storeToRefs} from "pinia";
const counterStore = useCounterStore();
const { count, countDigitLength } = storeToRefs(counterStore);
</script>