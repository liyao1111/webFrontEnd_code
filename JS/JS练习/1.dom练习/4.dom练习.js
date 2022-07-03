/*
    查找#bj节点
    查找所有li节点
    查找name=gender的所有节点
    查找#city下所有li节点
    返回#city的所有子节点
    返回#phone的第一个子节点
    返回#bj的父节点
    返回#android的前一个兄弟节点
    返回#username的value属性值
    设置#username的value属性值
    返回#bj的文本值
*/
    //设置一个响应函数
    // fun 事件的回调函数
    function myclick(idstr,fun){
        var btn = document.getElementById(idstr);
        btn.onclick = fun ;
    }


    window.onload = function(){

        //查找#bj节点
        var btn01 =  document.getElementById('btn01');
        btn01.onclick = function(){
          var bj = document.getElementById('bj');
          alert(bj.innerHTML); //innerHTML获取到标签的内部代码
        }


        //查询所有li节点
        var btn02 = document.getElementById('btn02');
        btn02.onclick = function(){
            var lis = document.getElementsByTagName('li');
            // 返回一个类数组对象 将所有查询到的元素封装到对象中
            //即使查询到的对象只有一个 也会封装到数组中
            //遍历lis
            for(var i=0;i<lis.length;i++){
                alert(lis[i].innerHTML);
            }
        }

        //查找name=gender的所有节点
        var btn03 =  document.getElementById('btn03');
        btn03.onclick = function(){
          var inputs = document.getElementsByName('gender');
          for(var i=0;i<inputs.length;i++){
              //如果要读取元素属性 元素名.属性名
              //例： 元素.id  元素.name
              //class不能采用这种形式 需要用 元素.className   
              alert(inputs[i].value);
          }
        }

        //查找#city下所有li节点
        var btn04 = document.getElementById('btn04');
        btn04.onclick = function(){
            var city = document.getElementById('city');
            var lis = city.getElementsByTagName('li');
            for(var i=0;i<lis.length;i++){
                alert(lis[i].innerHTML);
            }
        }

        //返回#city的所有子节点
        //childNodes属性获取包括文本节点在内的所有节点
        //根据dom标准 标签间空白也会当成文本节点
        /*children 可以获取当前元素的所有子元素、
        */
        var btn05 =document.getElementById('btn05');
        btn05.onclick = function(){
            var city = document.getElementById('city');
        //     var citykids = city.childNodes;
        //    alert(citykids.length);
        //     for(var i=0;i<citykids.length;i++){
        //         alert(citykids[i]);
        //     }
            var citykids2 = city.children;
            alert(citykids2.length);
        }

        /*
        firstchilid 可以获取当前元素的第一个子节点但可能是空
          也可用children[0]
        */

        // 返回#phone的第一个子节点 
        var btn06 =document.getElementById('btn06');
        btn06.onclick = function(){
            var phone = document.getElementById('phone');
            var children = phone.children;
            var first_child = children[0];
            var firstchild = phone.firstElementChild;
            //firstElementChild 可以获取第一个元素节点
            alert(first_child.innerHTML);
            alert(firstchild.innerHTML);
        }
   

        // 返回#bj的父节点 parentNodes

        var btn07 = document.getElementById('btn07');
        btn07.onclick = function(){
            //alert(123);
            var bj = document.getElementById('bj');
            var bj_parent =bj.parentElement;
            alert(bj_parent.id);
            alert(bj_parent.innerHTML);
            alert(bj_parent.innerText);

        }

        //返回#android的前一个兄弟节点 也可能获取空白文本
        var btn08 = document.getElementById('btn08');
        btn08.onclick = function(){
            var andr = document.getElementById('android');
            var andr_pre = andr.previousElementSibling;
            var anr_pre2 = andr.previousSibling;
            alert(andr_pre);
            alert(andr_pre.innerHTML);

        }

        //返回#username的value属性值
        var btn09 = document .getElementById('btn09');
        btn09.onclick = function(){
            var usname = document.getElementById('username');
            var us_value =usname.value;
            alert(us_value);
        }

      //  设置#username的value属性值
        myclick('btn10',function(){
            var usname = document.getElementById('username');
            usname.value = 'hello!' ;

        }
        );

        //返回#bj的文本值
        myclick('btn11',function(){
            var bj = document.getElementById('bj');
            var bj_text = bj.innerText;
            alert(bj_text);
        }
        );











        }
        










            
            

            


        


  


