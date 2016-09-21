(function($){
	// 响应式布局
	var d=document.documentElement.clientWidth;
		document.getElementsByTagName('html')[0].style.fontSize=d/320*625+'%';//320 基于iphone4排

	init();
	function init(){
		$(document).on("click","a",function(e){
			e.preventDefault();
		})

		$(".text").on("tap",function(){
			location.href="text_banner.html"
		})
		$(document).on("tap","._tap",function(){
			var idx=$(this).data("title");
			location.href="main.html?"+idx;
		})
		$("#_click").on("tap",function(){
			location.href="http://weibo.com/u/3541943581";
		})
	}
})(Zepto)