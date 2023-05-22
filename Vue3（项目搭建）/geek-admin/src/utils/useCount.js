import { ref,reactive,computed,watchEffect } from "vue"

export function useCount() {
  let count = ref(1)
  let color = ref('red')
  function add() {
    count.value++
    color.value = Math.random() > 0.5? "blue":"red"
  }
  let obj = reactive({
    count: 1
  })
  let double = computed(() => obj.count*2)
  obj.count = 2
  watchEffect(() => {
    console.log('数据被修改了',obj.count,double.value);
  })
  return { count, add, color, obj, double }
}