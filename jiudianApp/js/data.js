(function($){
	// 响应式布局
	var d=document.documentElement.clientWidth;
		document.getElementsByTagName('html')[0].style.fontSize=d/320*625+'%';//320 基于iphone4排
	init();
	function init(){
		$("#main").rili({
			startM:new Date(),
			size:2
		});
	}
	$("#_fh").on("tap",function(){
		if(confirm("您确定要重新选择日期吗？")){
			location.href="index.html";
		}
	})
})(Zepto)