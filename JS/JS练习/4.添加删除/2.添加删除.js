window.onload = function(){
    //添加

  var submit = document.getElementById('addEmpButton');
  submit.onclick = function(){
    var name = document.getElementById('empName').value;
    var email = document.getElementById('email').value;
    var salary = document.getElementById('salary').value;
    var Table = document.getElementById('employeeTable');
    var tbody = Table.getElementsByTagName('tbody')[0];
    //创建tr
    var tr = document.createElement('tr');
    var nameTd = document.createElement('td');
    var emailTd = document.createElement('td');
    var salaryTd = document.createElement('td');
    var nameTxt = document.createTextNode(name);
    var emailTxt = document.createTextNode(email);
    var salaryTxt = document.createTextNode(salary);
    nameTd.append(nameTxt)
    emailTd.append(emailTxt);
    salaryTd.append(salaryTxt);
    tr.append(nameTd);
    tr.append(emailTd);
    tr.append(salaryTd);
    var aTd = document.createElement('td');
     var a = document.createElement('a');
     a.onclick = function(){
       var tr = this.parentNode.parentNode;
      var name = tr.getElementsByTagName('td')[0].innerHTML ;
      var str = "确认删除" + name + "吗？";
      //删除tr
      //confirm 弹出确认取消按钮的提示窗
      var flag = confirm(str);
      if(flag)
      tr.parentNode.removeChild(tr);
     }
     a.href = "#";
     var aTxt = "Delete";
     a.append(aTxt);
     aTd.append(a);
     tr.append(aTd);
     tbody.append(tr);
     }
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
}