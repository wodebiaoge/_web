(function(){
	var d=document.documentElement.clientWidth;
		document.getElementsByTagName('html')[0].style.fontSize=d/320*625+'%';//320 基于iphone4排
	$("#prev").on("tap",function(){
		location.href="jieshao.html";
	})
	$("#next").on("tap",function(){
		location.href="db.html";
	})
})(Zepto)