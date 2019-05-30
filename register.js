$(function(){
	
	
	$(".xiaohe").click(function(){
		window.location.replace("user.html");
	})
	
//	function checkEmail(str){
//	}
	
//	var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
//	var youxian=document.getElementById("youxian");
//	youxian.onblur=function(){	
//	}
//	$("#youxian").blur(function(){
//		var zhi=this.value;//获取输入宽的值
//			if(reg.test(zhi)){
//				$("#youxian").css("border","1px solid green")
//			}else{
//				$("#youxian").css("border","1px solid red")
//			}
//	})
	
	//因为会注册多个账号 所有遍历数组 对比每一项 
	$(".qued").click(function(){
		// 变量（储存的是数组）	解码		本地储存		名称
		var mycount=JSON.parse(localStorage.register);
		//遍历	数组				下标		值
		$.each(mycount, function(index,ele) {
			// 判断	邮箱		的值	是否等于	储存邮箱			密码		的值	 是否等于	储存密码	
			if(($("#youxian").val()==ele.username)&&($("#mima").val()==ele.password)){
				alert("登录成功,跳转网页")
//				$("#head").load("首页.html");
				window.location.replace("homepage.html");
			}
		});
		
	})
	
})
