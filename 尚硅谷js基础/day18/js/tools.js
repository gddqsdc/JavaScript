
 function getStyle(obj , name){
    if(getComputedStyle){
    //正常浏览器的方式
   return getComputedStyle(obj , null)[name];
}else{
   //ie8的方式
   return obj.currentStyle[name];
}
}


          //创建一个可以执行简单动画的函数
          /*
          参数： obj 执行动画的对象
                attr:要执行动画的样式 比如left top width height
                target 执行动画的目标位置
                speed 移动速度
                callback 回调函数 会在动画执行完毕后执行
          */
function move(obj ,attr, target,speed,callback){
    clearInterval(obj.timer);
    //获取元素目前的位置
    var current=parseInt(getStyle(obj,attr));
    //判断speed的正负值
    if(current > target){
        speed=-speed;
    }
    //向执行动画的对象中添加一个timer属性，保存该对象的定时器
    obj.timer=setInterval(function(){
      var Old=parseInt(getStyle(obj,attr));
      var New=Old+speed;
      //向左移动时，需判断New是否小于target
      //向右移动时，需判断New是否大于target
      if((speed<0 && New<target) || (speed>0&&New>target)){
          New=target;
      }
      obj.style[attr]=New+"px";
      if(New==target){
        
          clearInterval(obj.timer);
          //动画执行完毕，调用回调函数
          callback && callback();
      }
      
    },30);
}

        //向一个元素中添加指定的class属性值
        //obj:要添加class属性的元素   cn:要添加的class值
        function addClass(obj , cn){
            if(!hasClass(obj,cn))
             obj.className+=" "+cn;
        }
        //判断一个元素中是否含有指定的class属性值
        function hasClass(obj , cn){
            // var reg=/\bb2\b/;
            var reg=new RegExp("\\b"+cn+"\\b");  
            return reg.test(obj.className);
        }
        //删除一个元素中的指定的class属性值
        function removeClass(obj , cn){
          var reg=new RegExp("\\b"+cn+"\\b");
          obj.className=obj.className.replace(reg,"");
        }
        //切换一个类 如果元素中具有该类，则删除
        //          如果元素中没有该类，则添加
        function toggleClass(obj, cn){
          if(hasClass(obj,cn))
            removeClass(obj,cn);
          else
            addClass(obj,cn);
        }