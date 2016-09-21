(function(){
	var d=document.documentElement.clientWidth;
		document.getElementsByTagName('html')[0].style.fontSize=d/320*625+'%';//320 基于iphone4排
	$("#add").on("tap",function(){
		$(".sec").eq(0).show(1000);
	})
	$("#_add").on("tap",function(){
		$(".sec").eq(1).show(1000);
	})
	$("#prev").on("tap",function(){
		location.href="jiudian.html";
	})
	// 电话
	$("#cell").on("tap",function(){
		var _h=$(document).height();
		$("#mark").css("height",_h+"px");
		$("#lst").show(200);
	})
	$("#mark").on("tap",function(){
		$(this).css("height",0+"px");
		$("#lst").hide();
	})
	// 介绍
	$("#js").on("tap",function(){
		location.href="jieshao.html";
	})
})(Zepto)