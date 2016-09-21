(function($){
	// 响应式布局
	var d=document.documentElement.clientWidth;
		document.getElementsByTagName('html')[0].style.fontSize=d/320*625+'%';//320 基于iphone4排
	init();
	function init(){
		setList("A");
		clickFn();
		getJsonList();
	}
	function setList(x){
		var str="";
		for(var i=0;i<=22;i++){
			str+="<section id=S_"+i+"><div class=scol id=sc><p class=p><span class=sp>"+x+"</span>顶部</p></div></section>";
		}
		$("#main").html(str);
	}
	function clickFn(){
		$(document).on("click","a",function(e){
			e.preventDefault();
		})
		$("#clk").on("tap","a",function(){
			var x=$(this).text();
			var _href="S_"+$(this).attr("title");
			$("#_href").show().siblings().hide();
			setList(x);
			getJsonList();
			nums();
			//跳转
			$("#main").find("p").not(".p").on("tap",function(){
				var val=$(this).text();
				$("#_dz").html(val+"<span></span>");
			})
		})
	}
	function getJsonList(){
		var str1="";
		for(var j=0;j<CITIES.length;j++){
			var ele=CITIES[j][1].slice(0,1);
			
			if(ele==$(".sp").text()){
				str1+="<p>"+CITIES[j][0]+"</p>"
			}
		}
		$("#sc").append($(str1));
	}
	nums();
	function nums(){
		for(var i=0;i<=22;i++){
			var s="h_"+i+"";
			var s = new iScroll("S_0",{
				onBeforeScrollStart:function(e){
					var tar = e.target || e.srcElement,
						tag = tar.nodeName.toLowerCase()
					if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
						e.preventDefault();
				}  // 解除iscroll4的bug
			})
		}
	}
	//跳转
	$("#main").find("p").not(".p").on("tap",function(){
		var val=$(this).text();
		$("#_dz").html(val+"<span></span>");
	})
	$("#hed").on("tap",function(){
		if(confirm("您确定要返回首页吗？")){
			location.href="index.html"
		}
	})
})(Zepto)
