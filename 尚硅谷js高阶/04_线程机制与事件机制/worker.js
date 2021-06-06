function fibonacci(number){
    if(number==1||number==2)
      return 1
    return  (fibonacci(number-1) + fibonacci(number-2))
}
var onmessage = function(event){//绑定接收消息的监听
    var number = event.data
    console.log('分线程接收到主线程发送的数据:'+number)
  
   console.log(this) //DedicatedWorkerGlobalScope 全局专用worker
   
   //计算
   var result = fibonacci(number)
   postMessage(result)  //向主线程发送消息
   console.log('分线程向主线程返回数据:'+result)
   alert(result) //alert是window的方法，在分线程中不能调用
    //分线程中的全局对象不再是window，所以在分线程中不可能更新界面（UI），不能操作DOM
}