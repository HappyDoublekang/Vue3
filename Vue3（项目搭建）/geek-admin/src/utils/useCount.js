import { ref } from "vue"

export function useCount() {
  let count = ref(1)
  function add() {
    count.value++
  }
  return { count, add }
}