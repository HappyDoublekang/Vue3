<template>
  <button @click="toggle">click</button>
  <h1 v-if="showTitle">你好Vue3</h1>
</template>

<script setup>
import { ref } from "vue";
let showTitle = ref(true)
function toggle() {
  showTitle.value = !showTitle.value
}
</script>