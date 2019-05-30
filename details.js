$(function(){
	//大图切换
//	$(".xiaotu li:nth-child(1)").click(function(){
//		$(".datu").children().hide()
//		$(".datu img:nth-child(1)").show()
//	})
//	
	var colors = null;
	$(".Fotos_one li:nth-child(1)").click(function(){
		$(".Fotos_two img:nth-child(1)").show().siblings().hide()
	})
		
	$(".Fotos_one li:nth-child(2)").click(function(){
		$(".Fotos_two img:nth-child(2)").show().siblings().hide()
	})
	
	$(".Fotos_one li:nth-child(3)").click(function(){
		$(".Fotos_two img:nth-child(3)").show().siblings().hide()
	})
	
	
	var lis=document.querySelectorAll(".Fotos_one li");
	var imgs=document.querySelectorAll(".Fotos_two img");
	console.log(imgs)
	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		lis[i].onclick = function(){
			console.log("img/详细"+(this.index+1)+".jpg")
			imgs[this.index].src = "img/大图"+(this.index+1)+".jpg";
		}
	}
		
		
	//正则获取参数
		function getQueryString(name) {
	       var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	       var r = window.location.search.substr(1).match(reg);
	       if(r != null) {
	             return decodeURIComponent(r[2]);
	       }
	       return '';
		}
		var pid=getQueryString("pid");//1002
		console.log(pid)

	
	$.ajax({
		type:"get",
		url:"list.json",
		async:true,
		success:function(sre){
			console.log(sre)
			var infoarr=sre.data;
			var str='';
			var productStr='';
			var liStr='';
			$.each(infoarr, function(index,ele) {
				//过滤数据 数据中pid==上个页面传来的pid
				
				if(ele.pid==pid){
					
					
					
					var xiaoStr="";
					$.each(ele.xianxii.imgth, function(xiaoindex,xiaoele) {
						xiaoStr+='<li><img src="'+xiaoele+'"/></li>'
					});
					var zhi="";
					$.each(ele.style, function(zhiindex,zhiele){
						zhi+=ele.style+'</br>'
					})
					var yanseStr="";
					$.each(ele.xianxii.color, function(yanseindex,yanseele){
						yanseStr+='<div><img src="'+yanseele+'"/></div>'
					})
					var datu="";
					$.each(ele.xianxii.imgs,function(datuindex,datuele){
						datu+='<img src="'+datuele+'"/>'
						
					});
					var chun=ele.More;
					console.log(chun)
					var genduo="";
					$.each(chun, function(genindex,genele) {
						genduo+='<div><img src="'+genele.inage+'"/></div>'
					});
					str='<div class="Fotos">'
							+'<div class="Fotos_one">'
								+'<ul>'
									+xiaoStr
								+'</ul>'
							+'</div>'
							+'<div class="Fotos_two">'
								+datu
							+'</div>'
						+'</div>'
						+'<div class="Details">'
							+'<div class="Titulo">'
								+'<p>'+ele.pname+'</p>'
							+'</div>'
							+'<div class="classic">'
								+zhi
							+'</div>'
							+'<div class="price">'
								+'<span><s>￥'+ele.mp+'</s></span>'
								+'<span>￥'+ele.jp+'</span>'
							+'</div>	'
							+'<span>含增值税</span>'
							+'<div class="Shipping">'
								+'购物满 299 元人民币免邮！'
							+'</div>'
							+'<div class="size">'
								+'<div class="display">'
									+yanseStr
								+'</div>'
								+'<div class="size_under">尺码</div>'
									+'<ul>'
										+'<li>XS</li>'
										+'<li>S</li>'
										+'<li>M</li>'
										+'<li>L</li>'
										+'<li>XL</li>'
										+'<li>XXL</li>'
									+'</ul>'
								+'</div>'
								+'<div class="Add">'
									+'<div class="Add_to" panduan="1">添加到购物袋</div>'
									+'<div class="Collection"><img src="img/灰心.png"/></div>'
								+'</div>'
								+'<div class="Supply">'
									+'查看门店供货情况'
								+'</div>'
							+'</div>'
					+'</div>'
				+'</div>'
				
				productStr='<div class="product_under">'
					+'<div class="Figure">'
						+'<img src="'+ele.img+'"/>'
					+'</div>'
					+'<div class="Introduction">'
						+'<div class="description">'
							+'产品详情'
						+'</div>'
						+'<div class="shirt">'
							+ele.Details.commodity
						+'</div>'
						+'<div class="Fabric">面料和护理</div>'
						+'<div class="Nursing">'
							+'<ul>'
								+'<li>棉, 氨纶</li>'
								+'<li>冷水机洗, 可与相似色同洗</li>'
								+'<li>仅允许非氯漂</li>'
								+'<li>低温翻转干燥</li>'
								+'<li>如果需要可低温熨烫</li>'
								+'<li>不可干洗</li>'
							+'</ul>'
						+'</div>'
						+'<div class="Store">'
							+ele.Details.mark
						+'</div>'
					+'</div>'
				+'</div>'
				$.each(ele.More, function(moreindex,moreele) {
//					console.log(moreele)
					liStr+='<li>'
							+'<img src="'+moreele.image+'"/>'
							+'<div class="Men">'
								+moreele.gender
							+'</div>'
							+'<div class="Polo">'
								+moreele.namea
							+'</div>'
							+'<div class="Offer">'
								+'<div class="Offer_price">'
									+'<span><s>￥'+moreele.price+'</s></span>'
									+'<span>￥'+moreele.Offer+'</span>'
								+'</div>'
							+'</div>'
						+'</li>'
				});
				$(".Dentro").html(str);
				$(".product").html(productStr);
				$(".select>ul").html(liStr);
				$(".Add_to").click(function(){
					console.log(1)
				var arr=localStorage.cart;	
				if(!arr){
					localStorage.cart = "[]";
				}
				arr=JSON.parse(localStorage.cart);
				var panduan = 1;
				var Arrs = JSON.parse(localStorage.cart);
				console.log(Arrs)
				$.each(Arrs, function(Arrsindex,Arrsele) {
					console.log(pid)
					if(Arrsele.name==pid){
//						alert(1)
						panduan++;
					}
				});
//				console.log(panduan)
				var obj={
					"name":pid,
					"size":$(".size ul li").eq(sizeIndex).text(),
					"color":colors,
					"panduan":panduan
				}
				$.each(arr, function(arrindex,arrele) {
					if(arrele.pid==pid){
						obj.panduan = Number(obj.panduan)+1;
					}
				});
					arr.push(obj);
					localStorage.cart = JSON.stringify(arr);
					console.log(arr)
//				location.href="购物车.html?pid="+pid;
			})
			var sizeIndex = 0;
			$(".size ul li").click(function(){
				sizeIndex = $(this).index();
				$(this).css({
					"background":"black",
					"color":"white"
				}).siblings().css({
					"background":"white",
					"color":"black"
				})
				console.log($(".size ul li").eq(sizeIndex).text())
			})
			
			var colorIndex = 0;
			$(".display>div").click(function(){
				colorIndex = $(this).index();
				$(this).addClass("color").siblings().removeClass("color");
				console.log(colorIndex)
				colors = ele.xianxii.colour[colorIndex+1]
				console.log(colors)
			})
				
				}
			});
			
			
			
			
		}
		
	});
	
	

})
