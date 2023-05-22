<template>
  <div>
    <!-- --{{ x }}<br>
    --{{ y }} -->
    <h1>{{ count }}</h1>
    <h1>{{ obj }}</h1>
    <h1>{{ double }}</h1>
    <Rate :value="score" @update-rate="update">
      111111
    </Rate>
    <!-- <Rate :value="3" />
    <Rate :value="4" theme="red" /> -->
    <!-- <Rate :value="3.5" theme="green" /> -->
    <button @click="add">累加器</button>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ active }} / {{ all }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodos } from '@/utils/useTodos.js'
import { useMouse } from '@/utils/useMouse.js'
import { useCount } from '@/utils/useCount.js'
import Rate from './Rate.vue'
let { title, todos, addTodo, clear, active, all, allDone } = useTodos()
let { x,y } = useMouse()
let { count,add,color, obj, double } = useCount()
let score = ref(3.5)
function update(num) {
  score.value = num
}
</script>

<style scoped>
.done {
  color: gray;
  text-decoration: line-through;
}
h1 {
  color:v-bind(color)
}
</style>