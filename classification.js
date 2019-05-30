$(function(){
	flag=false;
	//排序下拉
	$(".paixu").click(function(){
		if(flag==false){
			$(".paixuchu").show()
			$(".img2").show()
			$(".img1").hide()
			flag=true;
			
		}else{
			$(".paixuchu").hide()
			$(".img1").show()
			$(".img2").hide()
			flag=false;
		}
	});
	//类别下拉
	$(".leibie").mouseenter(function(){
		$(".leibie").css("background","#999999")
	})
	$(".leibie").mouseleave(function(){
		$(".leibie").css("background","white")
	})
	
	$(".yanse").mouseenter(function(){
		$(".yanse").css("background","#999999")
	})
	$(".yanse").mouseleave(function(){
		$(".yanse").css("background","white")
	})
	
	$(".leibie").click(function(){
		if(flag==false){
			$(".xuanzhi").show()
			$(".shangtu").show()
			$(".xiatu").hide()
			$(".saixuan").hide()
			$(".leibie").css("background","#999999")
			flag=true;
		}else{
			$(".xuanzhi").hide()
			$(".xiatu").show()
			$(".shangtu").hide()
			$(".leibie").css("background","white")
			flag=false;
		}
	});
	//颜色选择
	$(".yanse").click(function(){
		if(flag==false){
			$(".saixuan").show()
			$(".shangtu1").show()
			$(".xiatu1").hide()
			$(".xuanzhi").hide()
			$(".yanse").css("background","#999999")
			flag=true;
		}else{
			$(".saixuan").hide()
			$(".xiatu1").show()
			$(".shangtu1").hide()
			$(".yanse").css("background","white")
			flag=false;
		}
	})
	
	
	$.ajax({
		type:"get",
		url:"list.json",
		async:true,
		//成功             		sre
		success:function(sre){
//			打印			sre
			console.log(sre);
//			先创建个空
			var str="";
//				循环	sre的data			下标	内容
			$.each(sre.data, function(index,ele) {
//					li=空
				var colorStr = "";
//					循环	内容	颜色				下标			内容
				$.each(ele.color, function(colorindex,colorele) {
//					li			=				颜色内容
					colorStr += '<li><img src="'+colorele+'"/></li>'
				});
//				ele= 内容的循环
				str+='<div class="yifu1" pid="'+ele.pid+'">'
						+'<div class="baozhu">'
							+'<img src="'+ele.img+'"/>'
						+'	<div class="minchen">'+ele.pname+'</div>'
							+'<p>'+ele.style+'</p>'
							+'<div class="jiage">'
								+'<div class="jiage1">'
									+'<span>￥</span><span><s>'+ele.mp+'</s></span>'	
								+'</div>'
								+'<div class="jiage2">'
									+'<span>￥</span><span>'+ele.jp+'</span>'
								+'</div>'
							+'</div>'
							+'<div class="yifuse">'
								+'<ul>'
								+colorStr	
								+'</ul>'
							+'</div>'
						+'</div>'
					+'</div>'
					
				});
			$("#chaoda").html(str)
			$("#chaoda>div").click(function(){
				var pid=$(this).attr("pid");
				location.href="details.html?pid="+pid;
			})
		}
		
		
	})
		
})
	
