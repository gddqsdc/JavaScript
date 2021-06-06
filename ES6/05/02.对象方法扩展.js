
//1. Object.is 判断两个值是否完全相等
// console.log(Object.is(1220,121))//false
// console.log(Object.is(121,121))  //true
// console.log(Object.is(NaN,NaN)) //true
// console.log(NaN === NaN) //false

//2. Object.assign 对象的合并
const config1 ={
    host: 'localhost',
    port:3306,
    name :'root',
    pass:'root',
    test:'test'
}
const config2 ={
    host: '127.0.0.1',
    port:33060,
    name :'liujie',
    pass:'iloveyou',
    test2 :'test2'
}
// console.log(Object.assign(config1,config2))

//3. Object.setPrototypeOf 设置原型对象 
//   Object.getPrototypeof

const school = {
    name:'atguigu'
}
const cities ={
    xiaoqu:['beijing','shanghai','shenzhen']
}
Object.setPrototypeOf(school,cities)
console.log(Object.getPrototypeOf(school))
console.log(school.__proto__)