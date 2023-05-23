<template>
  <button @click="toggle">click</button>
  <transition name="fase">
    <h1 v-if="showTitle">你好Vue3</h1>
  </transition>
</template>

<script setup>
import { ref } from "vue";
let showTitle = ref(true)
function toggle() {
  showTitle.value = !showTitle.value
}
</script>