


let arr = [1,2,3,4,5,4,3,2,1]

//      1、数组去重
// let result = [...new Set(arr)]
// console.log(result)
//      2、交集
let arr2 = [4,5,6,5,6,7]
// let result = [...new Set(arr)].filter(item=>{
//    let s2 = new Set(arr2)
//    if(s2.has(item))
//        return true
//    return false
// })

// let result = [...new Set(arr)].filter(item=>new Set(arr2).has(item))
// console.log(result)
//          3、并集
    //  let s = new Set(arr)
    //   let s2 = new Set(arr2)
    //   for(let v of s){
    //       if(!s2.has(v)){
    //           console.log('s2中没有：'+v)
    //           s2.add(v)
    //       }
    //   }
    //   console.log(s2)
   let union = [...new Set([...arr,...arr2])]
   console.log(union)

//          4、差集
let result = [...new Set(arr)].filter(item=>!(new Set(arr2).has(item)))
console.log(result)