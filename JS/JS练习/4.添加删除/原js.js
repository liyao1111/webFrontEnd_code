
	
	window.onload = function(){
		
		/*
		 * 点击超链接以后，删除一个员工的信息
		 */
		
		//获取所有额超链接
		var allA = document.getElementsByTagName("a");
		
		//为每个超链接都绑定一个单击响应函数
		for(var i=0 ; i < allA.length ; i++){
			allA[i].onclick = function(){
				
				//点击超链接以后需要删除超链接所在的那行
				//这里我们点击那个超链接this就是谁
				//获取当前tr
				var tr = this.parentNode.parentNode;
				
				//获取要删除的员工的名字
				//var name = tr.getElementsByTagName("td")[0].innerHTML;
				var name = tr.children[0].innerHTML;
				
				//删除之前弹出一个提示框
				/*
				 * confirm()用于弹出一个带有确认和取消按钮的提示框
				 * 	需要一个字符串作为参数，该字符串将会作为提示文字显示出来
				 * 如果用户点击确认则会返回true，如果点击取消则返回false
				 */
				var flag = confirm("确认删除"+name+"吗?");
				
				//如果用户点击确认
				if(flag){
					//删除tr
					tr.parentNode.removeChild(tr);
				}
				
				/*
				 * 点击超链接以后，超链接会跳转页面，这个是超链接的默认行为，
				 * 	但是此时我们不希望出现默认行为，可以通过在响应函数的最后return false来取消默认行为
				 */
				return false;
			};
		}
		
	};

	
