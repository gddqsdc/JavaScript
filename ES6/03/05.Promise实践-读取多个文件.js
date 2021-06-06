//引入fs模块
const fs = require('fs');

// fs.readFile('D:/VS Code/workspace/JavaScript/ES6/03/静夜思.md',(err,data1)=>{

//     fs.readFile('D:/VS Code/workspace/JavaScript/ES6/03/为学.md',(err,data2)=>{
       
//         fs.readFile('D:/VS Code/workspace/JavaScript/ES6/03/早发白帝城.md',(err,data3)=>{
//             let  result = data1+'\r\n' + data2+'\r\n' + data3;
//             console.log(result);
//         });
//     });
// });

//使用Promise实现
const p = new Promise((resolve,reject)=>{
    fs.readFile('D:/VS Code/workspace/JavaScript/ES6/03/静夜思.md',(err,data)=>{
        resolve(data)
    })
})
p.then(value=>{
     return new Promise((resolve,reject)=>{
    fs.readFile('D:/VS Code/workspace/JavaScript/ES6/03/为学.md',(err,data)=>{
        resolve([value,data])
    })
  })
},reason=>{}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('D:/VS Code/workspace/JavaScript/ES6/03/早发白帝城.md',(err,data)=>{
            //压入
            value.push(data)
            resolve(value)
    })
})
}).then(value=>{
    console.log(value.join('\r\n'))
})