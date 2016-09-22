;(function($){
	init();
	var list_oneIs;
	var list_oneIs_1;
	var list_oneIs_2;
	var list_oneIs_3;
	var list_oneIs_4;
	var list_oneIs_5;
	function init(){
		start(); //引导页
		iscroll();
		auto();
		getListData();  //ajax 渲染
	}
	function iscroll(){
		 	list_oneIs = new iScroll("sy",{
			onBeforeScrollStart:function(e){
				var tar = e.target || e.srcElement,
					tag = tar.nodeName.toLowerCase()
				if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
					e.preventDefault();
			}  // 解除iscroll4的bug
			//var homeIs = new IScroll("List",{"click":true});
		})
		var homeIs = new iScroll("sx",{
			onBeforeScrollStart:function(e){
				var tar = e.target || e.srcElement,
					tag = tar.nodeName.toLowerCase()
				if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
					e.preventDefault();
			}
		})
		list_oneIs_1 = new iScroll("rq",{
			onBeforeScrollStart:function(e){
				var tar = e.target || e.srcElement,
					tag = tar.nodeName.toLowerCase()
				if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
					e.preventDefault();
			}
		})
		list_oneIs_2 = new iScroll("sx_",{
			onBeforeScrollStart:function(e){
				var tar = e.target || e.srcElement,
					tag = tar.nodeName.toLowerCase()
				if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
					e.preventDefault();
			}
		})
		list_oneIs_3 = new iScroll("xl_",{
			onBeforeScrollStart:function(e){
				var tar = e.target || e.srcElement,
					tag = tar.nodeName.toLowerCase()
				if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
					e.preventDefault();
			}
		})
		list_oneIs_4 = new iScroll("zk",{
			onBeforeScrollStart:function(e){
				var tar = e.target || e.srcElement,
					tag = tar.nodeName.toLowerCase()
				if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
					e.preventDefault();
			}
		})
		list_oneIs_5 = new iScroll("ss",{
			onBeforeScrollStart:function(e){
				var tar = e.target || e.srcElement,
					tag = tar.nodeName.toLowerCase()
				if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
					e.preventDefault();
			}
		})
	}
	function start(){
		$("#start").on("tap",function(){
			$(this).hide(500);
			$("#list1").find("li").eq(0).find("img").addClass("animated fadeIn");
			$("#list1").find("li").eq(0).find("p").addClass("animated zoomIn");
		})
		var x=0,
			len=$("#list1").find("li").length;
		$(document).on("swipeLeft",function(){
			x++;
			if(x>len-1) x=len-1;
			change(x);
		}).on("swipeRight",function(){
			x--;
			if(x<=0) x=0;
			change(x);
		});
		$("#list1").find("input").on("tap",function(){
			$("#end").css("transform","translate3d("+(-100)+"%,0,0)");
			$("#list1").hide();
		})
		$("#list1").find("li").last().on("tap",function(){
			$("#end").hide();
		})
	}
	function change(x){
		$("#list1").css("transform","translate3d("+(-100*x)+"%,0,0)");
		$("#list2").find("li").eq(x).addClass("bg").siblings().removeClass("bg");
		$("#list1").find("li").eq(x).find("img").addClass("animated fadeIn").parent().siblings().find("img").removeClass("animated fadeIn");
		$("#list1").find("li").eq(x).find("p").addClass("animated zoomIn").parent().siblings().find("p").removeClass("animated zoomIn");
	}

	function auto(){
		$(document).on("click","a",function(e){
			e.preventDefault();
		})
		$(document).on("tap","a",function(){
			if($(this).parent()[0].nodeName=="FOOTER"){
				var _href=$(this).attr("href"),
					tit=$(this).attr("title");
				$(_href).css("left",0).siblings().css("left",100+"%");
				$(this).find("span").addClass("ys").parent().siblings().find("span").removeClass("ys");
				$(this).find("label").addClass("ys").parent().siblings().find("label").removeClass("ys");
				$("#bt").text(tit);
				if(_href=="#sx"){
					$("#a1").hide();
					$("#a2").show();
				}else{
					$("#a1").show();
					$("#a2").hide();
				}

			}
			if($(this).parent()[0].nodeName=="NAV"){
				var _href=$(this).attr("href");
				$(_href).css("left",0).siblings().css("left",100+"%");
			}
		})
	};

	// 渲染页面
	
	function getListData(){
		$.ajax({
			url:"data/data1.json",
			type:"post",
			dataTape:"json",
			success:function(json){
				//alert("请求成功");
				randerListPage(json);
			},
			error:function(){
				alert("请求失败");
			}
		})
	}
	
	function randerListPage(json){
		//  渲染第一个
		xuanran(json,json.fuzhuang,json.fz,"#xr_1");
		//  渲染第二个
		xuanran(json,json.rq,json.rqtwo,"#xr_2");
		//  渲染第三个
		xuanran(json,json.sx,json.sxtwo,"#xr_3");
		//  渲染第四个
		xuanran(json,json.xl,json.xltwo,"#xr_4");
		//  渲染第五个
		xuanran(json,json.zk,json.zktwo,"#xr_5");
		//  渲染第六个
		xuanran(json,json.ss,json.sstwo,"#xr_6");
		// 重新加载scroll
		list_oneIs.refresh();
		list_oneIs_1.refresh();
		list_oneIs_2.refresh();
		list_oneIs_3.refresh();
		list_oneIs_4.refresh();
		list_oneIs_5.refresh();
	}
	function xuanran(json,one,two,id){
		var str="<ul>";
		$.each(one.fenlei,function(idx,val){
			str+='<dl><dt><img src="img/'+val.img+'" alt=""></dt><dd>'+val.title1+'</dd><dd><a>'+val.title2+'</a><a>'+val.title3+'</a></dd></dl>';
		})
		str+="</ul>";
		var str1="<ul>";
		$.each(two.fenlei,function(idx,val){
			str1+='<dl><dt><img src="img/'+val.img+'" alt=""></dt><dd>'+val.title1+'</dd><dd><a>'+val.title2+'</a><a>'+val.title3+'</a></dd></dl>';
		})
		str1+="</ul>";
		$(id).html(str+str1);
	}

})(Zepto)
;(function(){
	$("#nav").find("a").on("click",function(){
		var idx=$(this).attr("title");
		$("#hdt").stop().animate({"left":(20*idx)+"%"},100);
		$(this).addClass("dd").siblings().removeClass("dd");
	});
	$("#a1").on("click",function(){
		$("#mc").show();
		$("#contain").stop().animate({"margin-left":-85+"%"},300);
		$("#sousuo").stop().animate({"left":15+"%"},300);
	});
	$("#mc").on("click",function(){
		$(this).hide();
		$("#contain").stop().animate({"margin-left":0+"%"},300);
		$("#sousuo").stop().animate({"left":100+"%"},300);
	});
	$("#ls_1").find("li").on("click",function(){
		var idx=$(this).index();
		$("#ls_2").find("li").eq(idx).show().siblings().hide();
		if(idx==0){
			$("#_tiao").stop().animate({"left":15+"%"},100);
		}else if(idx==1){
			$("#_tiao").stop().animate({"left":65+"%"},100);
		}
	});
	$("#none").on("click",function(){
		$("#gw").find("div").eq(0).slideUp(200).siblings().slideDown(200);
	});
	$("#gb_").on("click",function(){
		$("#gw").find("div").eq(0).slideDown(200).siblings().slideUp(200);
	});
})(jQuery)