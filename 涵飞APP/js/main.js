(function($){
	// 响应式布局
	var d=document.documentElement.clientWidth;
		document.getElementsByTagName('html')[0].style.fontSize=d/320*625+'%';//320 基于iphone4排
	init();
	function init(){
		var arr=["scro","_scro","scro_two","_secs","_secn"];
		for(var i=0;i<arr.length;i++){
			var isc_i = new iScroll(arr[i],{
					onBeforeScrollStart:function(e){
						var tar = e.target || e.srcElement,
							tag = tar.nodeName.toLowerCase()
						if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
							e.preventDefault();
					}  // 解除iscroll4的bug
			})
		}
		$(document).on("click","a",function(e){
			e.preventDefault();
		})
		
		pargram() // 获取地址栏

		prev();

		next();
	}

	function pargram(){
		if(!location.search) return false;
		var pars=location.search.slice(1),
		brr=["火热报名","涵飞动态","旅游展示","游玩攻略","为你服务","我的中心","活动","分享","我的收藏"];
		$("#bt").html(brr[pars]);
		$("#list").find("section").eq(pars).css("left","0").siblings().css("left",100+"%")
	}

	function prev(){
		$("#prev").on("tap",function(){
			location.href="index.html";
		})
	}

	function next(){
		$(document).find(".sp").on("tap",function(){
			var nums=$(this).data("title");
			location.href="contain.html?"+nums;
		})

		$("#scro").find("p").on("tap",function(){
			location.href="text_banner.html"
		})
	}
})(Zepto)
