window.onload = function(){
//innerHTML
var allA = document.getElementsByTagName("a");
    for(var i=0;i<allA.length;i++){ 
      allA[i].onclick = function(){
          //点击超链接后 删除所在行
      var tr = this.parentNode.parentNode;
      var name = tr.getElementsByTagName('td')[0].innerHTML ;
      var str = "确认删除" + name + "吗？";
      //删除tr
      //confirm 弹出确认取消按钮的提示窗
      var flag = confirm(str);
      if(flag)
      tr.parentNode.removeChild(tr);
      };
    }


var addEmpButton = document.getElementById('addEmpButton');
addEmpButton.onclick = function(){
    var nameTxt = document.getElementById('empName').value;
    var emailTxt = document.getElementById('email').value;
    var salaryTxt = document.getElementById('salary').value;
    // var a = documen.createElement('a');
    // a.onclick = function(){
    //     var tr = this.parentNode.parentNode;
    //   var name = tr.getElementsByTagName('td')[0].innerHTML ;
    //   var str = "确认删除" + name + "吗？";
    //   //删除tr
    //   //confirm 弹出确认取消按钮的提示窗
    //   var flag = confirm(str);
    //   if(flag)
    //   tr.parentNode.removeChild(tr);
    // };

    var tr = document.createElement('tr');
    tr.innerHTML = '<td>'+ nameTxt +'</td>' + 
                    '<td>'+ emailTxt  +'</td>' + 
                    '<td>'+ salaryTxt  +'</td>' + 
                    '<td>'+ '<a href="javascript:;">Delete</a>'  +'</td>' ;
    var employeeTable = document.getElementById('employeeTable');
    var a = tr.getElementsByTagName('a')[0];
    a.onclick = function(){
      var tr = this.parentNode.parentNode;
      var name = tr.getElementsByTagName('td')[0].innerHTML ;
      var str = "确认删除" + name + "吗？";
      //删除tr
      //confirm 弹出确认取消按钮的提示窗
      var flag = confirm(str);
      if(flag)
      tr.parentNode.removeChild(tr);

    };
    var tbody = employeeTable.getElementsByTagName('tbody')[0];
    tbody.appendChild(tr);
};



}