$(function(){
	
//搜索
	var falg = true;
	$("#fanda").click(function(){
		if(falg){
			$("input").show();
			$("input").animate({width:"200px"},500,function(){
				falg = false;
			});
			
		}else{
			$("input").animate({width:"0"},500,function(){
				$("input").hide();
				falg = true;
			});
		}
	})
//切换语言
	var falg=false;
	$(".shopping_Four").click(function(){
		if(flag==false){
			$("#Login").hide()
			$("#pop").show()
			console.log(1)
			flag=true;
		}else{
			$("#pop").hide()
			flag=false;
		}	
	})
//登录
	var flag=false;
	$(".shopping_tow").click(function(){
		if(flag==false){
			$("#pop").hide()
			$("#Login").show()
			console.log(2)
			flag=true;
		}else{
			$("#Login").hide()
			flag=false;
		}	
		
	})
	
	$(".shopping_one").click(function(){
		window.location.replace("Shopping.html");
	})
})