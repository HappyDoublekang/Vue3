<template>
  <h1>这是关于页面</h1>
  <div class="box" :style="{width:width+'px'}"></div>
  <div class="box1"></div>
  <button @click="change">click</button>
</template>

<script setup>
import { ref } from "vue"
let width = ref(100)
function change() {
  width.value += 100
}
</script>

<style>
.box {
  background: red;
  height: 100px;
  transition: width 1s linear;
}
.box1 {
  width: 30px;
  height: 30px;
  position: absolute;
  background: #d88986;
  animation: move 2s linear infinite;
}
@keyframes move {
  0% {left:0px}
  50% {left:200px}
  100% {left:0px}
}
</style>