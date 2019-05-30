$(function(){
	
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
		success:function(res){
			console.log(res)
			var infoarr=res.data;
			var str="";
			var pidArr = JSON.parse(localStorage.cart);
			console.log(pidArr)
			$.each(infoarr, function(index,ele) {
				
			$.each(pidArr, function(pidindex,pidele) {
				//过滤数据 数据中pid==上个页面传来的pid
					
//					var arr=localStorage.register;	
//					
//					arr=JSON.parse(localStorage.register);
//					var obj={
//						"name":ele.pid,
//						"password":ele
//					}
//					arr.push(obj);
//					localStorage.register = JSON.stringify(arr);
					if(pidele.name==ele.pid){
						console.log(ele)
					str+='<li pid="'+ele.pid+'" panduan="'+pidele.panduan+'">'
					+'<img src="'+ele.img+'" />'
							+'<div class="jiesao">'
								+'<div class="zuo">'
									+'<p>'+ele.Sexo+'</p>'
									+'<div class="kuans">'+ele.pname+'</div>'
									+'<div class="sku">SKU:<span>635759150</span></div>'
									+'<div class="jiage"><span>海军蓝</span>:<span>L</span></div>'
								+'</div>'
								+'<div class="you">'
									+'<p>￥'+ele.mp+'</p>'
								+'	<p>￥'+ele.jp+'</p>'
								+'</div>'
							+'</div>'
							+'<div class="bianji">'
								+'<a href="#">编辑</a>'
								+'丨'
								+'<a href="#" class="del">删除</a>'
							+'</div>'	
							+'</li>'
		}
		
})
			});
			console.log(str)
		$(".gouwu ul").html(str);
		$(".del").click(function(){
			
			var thispid = $(this).parent().parent().attr("pid");
			var panduan = $(this).parent().parent().attr("panduan");
			$(this).parent().parent().remove();
			var arrq = JSON.parse(localStorage.cart);
			$.each(arrq, function(arrqindex,arrqele) {
				if((Number(arrqele.name)==Number(thispid))&&(Number(arrqele.panduan)==Number(panduan))){
					console.log(arrqele.panduan)
					arrq.splice(arrqindex,1);
					localStorage.cart = JSON.stringify(arrq);
					addPrice();
					arrq = localStorage.cart;
					if(!arrq){
						localStorage.cart = "[]";
					}
					arrq = JSON.parse(localStorage.cart)
				}
			});
			
			
		})
		function addPrice(){
			var allPrice = 0;
			$.ajax({
				type:"get",
				url:"list.json",
				async:false,
				success:function(r){
					var rpriceArr = r.data;
					var rpid = JSON.parse(localStorage.cart);
					$.each(rpriceArr, function(rindex,rele) {
						$.each(rpid, function(pindex,pele) {
							if(pele.name==rele.pid){
								allPrice += Number(rele.jp);
							}
						});
					});
				}
			});
			$(".shangp span").eq(1).html("￥"+allPrice);
			$(".dindan span").eq(1).html("￥"+allPrice);
		}
		addPrice();
	}
	
	
	
})
})