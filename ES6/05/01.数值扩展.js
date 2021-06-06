
/*
 0.Number.EPSILON 是JavaScript 表示的最小精度
*/

function equal(a,b){
    if(Math.abs(a-b) < Number.EPSILON)
      return true
    return false
}
// console.log(0.1+0.2 === 0.3)
// console.log(equal(0.1+0.2,0.3))

//1.二进制和八进制
// let b = 0b1010; //2
// console.log(b)
// let o = 0o777;  //8
// console.log(o)
// let x = 0xff;  //16
// console.log(x)

//2. Number.isFinite 检测一个数值是否为有限数
// console.log(Number.isFinite(100))
// console.log(Number.isFinite(100/0))
// console.log(Number.isFinite(Infinity))

//3. Number.isNaN 检测一个数值是否为NaN
// console.log(Number.isNaN(123))
// console.log(Number.isNaN(NaN+123))

//4. Number.parseInt Number.parseFloat 字符串转换为整数、浮点数
// console.log(Number.parseInt('5211313love'))
// console.log(Number.parseFloat('5211.313love'))

//5. Number.isInteger 判断是否为整数
// console.log(Number.isInteger(5))
// console.log(Number.isInteger(5.5))

//6. Math.trunc 将数字的小数部分抹掉
// console.log(Math.trunc(5.23134))

//7. Math.sigh 判断一个数为正数、负数还是 0
console.log(Math.sign(100))
console.log(Math.sign(0))
console.log(Math.sign(-10000))