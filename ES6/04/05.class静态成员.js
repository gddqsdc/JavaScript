
// function Phone(){

// }
// Phone.name = '手机'         //属于函数对象，并不属于实例对象
// Phone.change = function(){
//     console.log('我可以改变世界')
// }
// Phone.prototype.size = '5.5 inch'
// let nokia = new Phone()
// // console.log(nokia.name)
// // nokia.change()
// console.log(nokia.size)

class Phone{
    //static静态属性属于类但不属于实例对象
    static name ='手机'
    static change(){
        console.log('我可以改变世界')
    }
}
let nokia = new Phone()
console.log(nokia.name)
console.log(Phone.name)
nokia.change()