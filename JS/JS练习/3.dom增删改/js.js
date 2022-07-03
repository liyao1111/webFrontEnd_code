window.onload = function(){
    var myclick = function(idstr,fun){
        var btn = document.getElementById(idstr);
        btn.onclick = fun;
    }

    //添加一广州节点
    myclick('btn01',function(){
        var city = document.getElementById('city');
        /*
         document.createElement() 需要一个标签名作为参数 并根据标签名创建节点对象
        document.createTextNode() 创建文本节点 
        a.append(b)  将后者添加入前者中
        */
       var li = document.createElement('li');
       var gz = document.createTextNode('广州');
       li.appendChild(gz);
       city.append(li);
    });

    //将"广州"节点插入到#bj前面
    myclick('btn02',function(){
       // alert(123);
        var bj = document.getElementById('bj');
        var city = document.getElementById('city');
        var li = document.createElement('li');
        var gz = document.createTextNode('广州');
        li.append(gz);
        city.insertBefore(li,bj); // li插入你到bj前面

    });

    //使用"广州"节点替换#bj节点
    myclick('btn03',function(){
        //replaceChild(a,b)   用a替换b
        var city = document.getElementById('city');
        var bj = document.getElementById('bj');
        var li = document.createElement('li');
        var gz = document.createTextNode('广州');
        li.append(gz);
        city.replaceChild(li,bj);
    });

    //>删除#bj节点
    myclick('btn04',function(){
        
        var city = document.getElementById('city');
        var bj = document.getElementById('bj');
        //若不知道父元素 可以 bj.parentNode.removeChild(bj)
        city.removeChild(bj);


    });
    
    //读取#city内的HTML代码
    myclick('btn05',function(){
        //alert(123);
        var city = document.getElementById('city');
        alert(city.innerHTML);
    

    });

    //设置#bj内的HTML代码
    myclick('btn06',function(){
       var bj = document.getElementById('bj');
       bj.innerHTML ='南京' ;


    });

    //创建一个"广州"节点,添加到#city下 使用innerHTML方式创建广州代码
    myclick('btn07',function(){
    
        var city = document.getElementById('city');
        city.innerHTML += '<li>广州</li>';
    });
    


}