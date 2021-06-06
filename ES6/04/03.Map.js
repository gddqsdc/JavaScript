


//声明Map
let m = new Map()

//添加元素
m.set('name','atguigu')

m.set('change',function(){
    console.log('我们可以改变你！')
})

let key = {
    school : 'ATGUIGU'
}
m.set(key , ['北京','上海','深圳'])

//长度 size
// console.log(m.size)

//删除 delete
// m.delete('name')

//获取 get
// console.log(m.get('change'))
// console.log(m.get(key))

//清空 clear
// m.clear()

//遍历
for(let v of m){
    console.log(v)
}

 console.log(m)