$(function(){
	//勾显示
	var falg=true;
	$(".kuan").click(function(){
		if(falg){
			$(".gou").show();
			falg=false;
		}else{
			$(".gou").hide();
			falg=true;
		}
	});
	//勾显示
	$(".kuan1").click(function(){
		if(falg){
			$(".gou1").show();
			falg=false;
		}else{
			$(".gou1").hide();
			falg=true;
		}
	});
	//验证邮箱
	var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
	
	$("#youxian").blur(function(){
		var zhi=this.value;//获取输入宽的值
			if(reg.test(zhi)){
				$(".biankuan").css("border","1px solid green")
			}else{
				$(".biankuan").css("border","1px solid red")
			}
	
	});
	
	var mima = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,25}$/ ;
	
	$("#mimi").blur(function(){
		var zhi=this.value;
			if(mima.test(zhi)){
				$(".bor").css("border","1px solid green")
			}else{
				$(".bor").css("border","1px solid red")
			}
	});
	$(".zhanhu").click(function(){
		//创建储存
		var arr = localStorage.register;
//		判断是否为空
		if(!arr){
			localStorage.register = "[]";
		}
		//arr   解析 	储存
		arr = JSON.parse(localStorage.register);
		//对象
		var obj={
			//用户名			输入框	的值
			"username":$("#youxian").val(),
			//密码 			输入框	的值
			"password":$("#mimi").val()
		}
		//把obj添加到arr
		arr.push(obj);
		localStorage.register = JSON.stringify(arr);
	})
	
//	var mycount=sessionStorage.getItem("register");
//			

//		var 
	
	var books=localStorage.getItem("localStorage.register");//得到字符串
	var bookArr=JSON.parse(books);
	var s=JSON.stringify(bookArr);
	localStorage.setItem("localStorage.register",s);

//	$(".denlu").click(function(){
//		$(".hezhi").hide()
//		$("#content").css({"width":"100%","height":"2000px"})
//	})
	$(".denlu").click(function(){
		window.location.replace("register.html");
	})
	
});	