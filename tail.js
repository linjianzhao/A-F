$(function(){
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
})