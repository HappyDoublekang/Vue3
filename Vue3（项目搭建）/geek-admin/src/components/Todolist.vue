<template>
  <div>
    <!-- --{{ x }}<br>
    --{{ y }} -->
    <h1>{{ count }}</h1>
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
import { useTodos } from '@/utils/useTodos.js'
import { useMouse } from '@/utils/useMouse.js'
import { useCount } from '@/utils/useCount.js'
let { title, todos, addTodo, clear, active, all, allDone } = useTodos()
let { x,y } = useMouse()
let { count,add,color } = useCount()
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