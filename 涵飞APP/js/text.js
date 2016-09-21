(function($){
	// 响应式布局
	var d=document.documentElement.clientWidth;
		document.getElementsByTagName('html')[0].style.fontSize=d/320*625+'%';//320 基于iphone4排

	prev();
	function prev(){
		$("#prev").on("tap",function(){
			location.href="index.html";
		})
	}
	add();
	function add(){
		$("#xie").on("tap",function(){
			$("#text_").show();
			$(this).hide();
		})
		 // 发布
		 $("#btn").on("tap",function(){
		 	var nums=$("#_val").val().length,
		 		val=$("#_val").val(),
		 		date=new Date(),
		 		y=date.getFullYear(),
		 		m=date.getMonth()+1,
		 		d=date.getDate();
		 	if(nums==0){
		 		if(confirm("您确定放弃评论了吗")){
		 			$("#text_").hide();
		 			$("#xie").show();
		 		}
		 	}else{
		 		$("#text_").hide();
		 		$("#xie").show();
		 		$('<p class="text"><span><b>'+y+'-'+m+'-'+d+'</b>最新评论</span><span>'
		 			+val+'</span></p>').prependTo("#add");
		 	}
		 	
		 })
	}
})(Zepto)