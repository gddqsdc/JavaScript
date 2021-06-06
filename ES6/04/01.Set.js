
//声明一个Set
let s = new Set()
console.log(s, typeof s)
let s2 = new Set([1,2,3,4,5,4,3,2,1])
console.log(s2)

//元素个数
console.log(s2.size)

//添加新元素
s2.add(100)
console.log(s2)

//删除元素
s2.delete(2)
console.log(s2)

//检测
console.log(s2.has(51))

//清空
// s2.clear()
// console.log(s2)
for(let v of s2){
    console.log(v)
}
