
function Phone(brand,price){
    this.brand = brand
    this.price = price
}
Phone.prototype.call = function(){
    console.log("我可以打电话")
}

//子类
function SmartPhone(brand, price, color, size){
    Phone.call(this, brand ,price)
    this.color = color
    this.size = size
}
//设置子级构造函数的原型
SmartPhone.prototype = new Phone()
SmartPhone.prototype.constructor = SmartPhone

//声明子类方法
SmartPhone.prototype.photo = function(){
    console.log('我可以拍照')
}
SmartPhone.prototype.playGame = function(){
    console.log('我可以玩游戏')
}

const  chuizi = new SmartPhone('锤子',2499 , '黑色','5.5inch')
console.log(chuizi)