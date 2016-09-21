(function($){
	// 响应式布局
	var d=document.documentElement.clientWidth;
		document.getElementsByTagName('html')[0].style.fontSize=d/320*625+'%';//320 基于iphone4排

	init();
	function init(){
		$(document).on("click","a",function(e){
			e.preventDefault();
		})
		var arr=["sec_one","sec_two","sec_three"];
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

		pargram() // 获取地址栏
		prev();
	}

	function pargram(){
		if(!location.search) return false;
		var pars=location.search.slice(1),
		brr=["报名项目","活动","游玩攻略","为你服务","我的中心"];
		$("#bt").html(brr[pars]);
		$("#list").find("section").eq(pars).css("left","0").siblings().css("left",100+"%")
	}
	function prev(){
		$("#prev").on("tap",function(){
			history.go(-1);
		})
	}
})(Zepto)