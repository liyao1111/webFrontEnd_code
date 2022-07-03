window.onload = function(){
    function myclick(idstr,fun){
         var btn = document.getElementById(idstr);
         btn.onclick = fun();
    }
    
    //全选
    var checkedAllBtn = document.getElementById('checkedAllBtn');
    checkedAllBtn.onclick = function(){
       var items = document.getElementsByName('items');
       for(var i=0;i<items.length;i++){
           //items[i].click();
           items[i].checked =true;
      }
      var times = 0;
      for(var j=0;j<items.length;j++){
          if(items[j].checked){
              times++;

          }
      }
      if(times == 4){
          checkedAllBox.checked = true;
      }
      else
      checkedAllBox.checked = false;
    }
      

    //全不选
    var checkedNoBtn = document.getElementById('checkedNoBtn');
    checkedNoBtn.onclick = function(){
        var items = document.getElementsByName('items');
        for(var i=0;i<items.length;i++){
            //items[i].click();
            items[i].checked =false;
       }
       var times = 0;
       for(var j=0;j<items.length;j++){
           if(items[j].checked){
               times++;

           }
       }
       if(times == 4){
           checkedAllBox.checked = true;
       }
       else
       checkedAllBox.checked = false;   
    }

    //反选
    var checkedRevBtn = document.getElementById('checkedRevBtn');
    checkedRevBtn.onclick = function(){
        var items = document.getElementsByName('items');
        for(var i=0;i<items.length;i++){
            if(items[i].checked){
                items[i].checked = false;
            }
            else{
                items[i].checked = true;
            }
        }
    }
    

    //提交
    var sendBtn = document.getElementById('sendBtn');
    sendBtn.onclick = function(){
        var items = document.getElementsByName('items');
        for(var i=0;i<items.length;i++){
            while(items[i].checked){
                alert(items[i].value);
                break;
            }
        }
    }

    
    var checkedAllBox = document.getElementById('checkedAllBox');
    var items = document.getElementsByName('items');
    for(var i=0;i<items.length;i++){
        items[i].onclick = function(){
            var times = 0;
            for(var j=0;j<items.length;j++){
                if(items[j].checked){
                    times++;

                }
            }
            if(times == 4){
                checkedAllBox.checked = true;
            }
            else
            checkedAllBox.checked = false;
        }
    }
}
        

 










