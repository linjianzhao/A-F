$(function(){

	//放大镜点击显示
	//var fanda=document.getElementById("fanda");
	//var inpu=document.getElementById("inp");
	//fanda.onclick=function(){
	//	console.log(1)
	//	inpu.style.display="block"
	//	inpu.style.width="200px";
	//}

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
		
	//	$("input").css("display","block")
					//动画效果	样式			秒数
		
//	})
	
	//切换语言
	var shopping_Four=document.getElementsByClassName("shopping_Four")[0];
	var pop=document.getElementById("pop");
		flag=false;
		shopping_Four.onclick=function(){
			if(flag==false){
				pop.style.display="block";
				flag=true;
			}else{
				pop.style.display="none";
				flag=false;
			}
		}
	//登录
	var shopping_tow=document.getElementsByClassName("shopping_tow")[0];
	var Login=document.getElementById("Login");
		flag=false;
		shopping_tow.onclick=function(){
			if(flag==false){
				Login.style.display="block";
				flag=true;
			}else{
				Login.style.display="none";
				flag=false;
			}
		}
	
	$(".Login:nth-child(1)").click(function(){
		window.location.replace("register.html");
	})
	$(".Login:nth-child(2)").click(function(){
		window.location.replace("user.html");
	})
	//var purchase=document.getElementsByClassName("purchase")[0];
	//purchase.onmouseenter=function(){
	//	console.log("yiru ")
	//	purchase.style.cssText="background:whitesmoke; color:black";
	//}
	//purchase.onmouseleave=function(){
	//	console.log("yoc")
	//	purchase.style.background="";
	//}
	
	//购物车
	$(".shopping_one").click(function(){
		window.location.replace("Shopping.html");
	})
	
	
	//购买
	$(".purchase").mouseenter(function(){
		$(".purchase").css({"background":"whitesmoke","color":"black"});
		$(".purchase p").css({"background":"whitesmoke","color":"black"});
	})
	$(".purchase").mouseleave(function(){
		$(".purchase").css({"background":"","color":"white"})
		$(".purchase p").css({"background":"","color":"white"})
	})
	//了解更多
	$(".understand").mouseenter(function(){
		$(".understand").css({"background":"whitesmoke","color":"black"});
	})
	$(".understand").mouseleave(function(){
		$(".understand").css({"background":"","color":"white"})
	})
	//购买男装
	$(".Choose_nens").mouseenter(function(){
		$(".Choose_nens").css({"background":"whitesmoke","color":"#253646"});
	})
	$(".Choose_nens").mouseleave(function(){
		$(".Choose_nens").css({"background":"","color":"white"})
	})
	//购买连衣裙
	$(".Choose_woman").mouseenter(function(){
		$(".Choose_woman").css({"background":"whitesmoke","color":"#253646"});
	})
	$(".Choose_woman").mouseleave(function(){
		$(".Choose_woman").css({"background":"","color":"white"})
	})
	//中间——购买男装
	$(".Man").mouseenter(function(){
		$(".Man").css({"background":"#253646","color":"white"});
	})
	$(".Man").mouseleave(function(){
		$(".Man").css({"background":"","color":"#253646"})
	})
	//中间——购买女装
	$(".madam").mouseenter(function(){
		$(".madam").css({"background":"#253646","color":"white"});
	})
	$(".madam").mouseleave(function(){
		$(".madam").css({"background":"","color":"#253646"})
	})
	//质感男装
	$(".menswear").mouseenter(function(){
		$(".menswear").css({"background":"whitesmoke","color":"#253646"});
	})
	$(".menswear").mouseleave(function(){
		$(".menswear").css({"background":"","color":"white"})
	})
	//质感女装
	$(".Ladies_Suits").mouseenter(function(){
		$(".Ladies_Suits").css({"background":"whitesmoke","color":"#253646"});
	})
	$(".Ladies_Suits").mouseleave(function(){
		$(".Ladies_Suits").css({"background":"","color":"white"})
	})
	//邮箱盒子
	$(".mailbox").mouseenter(function(){
		$(".mailbox").css({"background":"whitesmoke","color":"black"});
	})
	$(".mailbox").mouseleave(function(){
		$(".mailbox").css({"background":"","color":"white"})
	})
	//邮箱连接
	$(".mailbox a").mouseenter(function(){
		$(".mailbox a").css("color","black");
	})
	$(".mailbox a").mouseleave(function(){
		$(".mailbox a").css("color","white");
	})
	$(".mens a").click(function(){
		window.location.replace("classification.html")
	})
	$(".Choose_nens").click(function(){
		window.location.replace("classification.html")
	})
	
	//回到顶部
	var xians=document.getElementById("top");
	window.onscroll=function(){
		var top=document.documentElement.scrollTop||document.body.scrollTop;
	//		console.log(top)
		if(top>=100){
			xians.style.display="block";
		}else{
			xians.style.display="none";
		}
	}
		//点击
		xians.onclick=function(){
			//获取滚动条位置
		var top=document.documentElement.scrollTop||document.body.scrollTop;
		console.log(top);
		var timer=setInterval(function(){
			//滚动条长度减少
			window.scrollBy(0,-100);
			//重新获取滚动条位置
			var top=document.documentElement.scrollTop||document.body.scrollTop;
			//如果小于等于0
			if(top<=0){
				console.log(top);
				//清空计时器
				clearInterval(timer);
				}
			//每隔20毫秒
			},20)			
		}
	
});

