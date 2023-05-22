// let count = 1
// let double = count * 2
// console.log(double);
// count = 2
// console.log(double);

// let count = 1
// let getDouble = n=>n*2
// let double = getDouble(count)
// console.log(double);
// count = 2
// double = getDouble(count)
// console.log(double);

// 响应式原理(Vue2)
// let getDouble = n => n * 2
// let obj = {}
// let count = 1
// let double = getDouble(count)
// Object.defineProperty(obj,'count',{
//   get() {
//     return count
//   },
//   set(val) {
//     count = val
//     double = getDouble(val)
//   }
// })
// console.log(double);
// obj.count = 2
// console.log(double);
// // 缺陷：删除不刷新
// delete obj.count
// console.log(double);

// 响应式原理(Vue3)
let getDouble = n => n * 2
let obj = {}
let count = 1
let double = getDouble(count)

let proxy = new Proxy(obj,{
  get(target,prop) {
    return target[prop]
  },
  set(target,prop,value) {
    target[prop] = value
    if (prop==='count') {
      double = getDouble(value)
    }
  },
  deleteProperty(target,prop) {
    delete target[prop]
    if (prop === 'count') {
      double = NaN
    }
  }
})
console.log(obj,count,double);
proxy.count = 2
console.log(obj,count,double);
delete proxy.count
console.log(obj,count,double);

