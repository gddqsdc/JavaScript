
//父类
class Phone{
    //构造方法
    constructor(brand, price){
     this.brand = brand
     this.price = price
    }
    //父类的成员属性
    call(){
        console.log('我可以打电话')
    }
}

class SmartPhone extends Phone{
    //构造方法
    constructor(brand, price, color, size){
      super(brand, price)     // Phone.call(this,brand,price)
      this.color = color
      this.size =size
    }
    photo(){
        console.log('拍照')
    }
    playGame(){
        console.log('玩游戏')
    }
    call(){  //子类对父类方法进行重写
        console.log('我可以进行视频通话')
    }
}

const xiaomi = new SmartPhone('小米',799,'黑色','4.7inch')
console.log(xiaomi)
xiaomi.call()
xiaomi.photo()
xiaomi.playGame()