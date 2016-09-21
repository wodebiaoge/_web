(function($){
	// 响应式布局
	var d=document.documentElement.clientWidth;
		document.getElementsByTagName('html')[0].style.fontSize=d/320*625+'%';//320 基于iphone4排
		init();
		function init(){
			var homeIs=null;
			iscroll();// 局部滚动
			getListJson();// 渲染页面
			//preventDt();// 阻止默认行为
		}
		//跳转
		$("#prev").on("tap",function(){
			if(confirm("您确定要重新选择吗？")){
				location.href="index.html";
			}
		})
		function iscroll(){
			homeIs = new iScroll("scro",{
				onBeforeScrollStart:function(e){
					var tar = e.target || e.srcElement,
						tag = tar.nodeName.toLowerCase()
					if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
						e.preventDefault();
				}  // 解除iscroll4的bug
			})
		}
		function getListJson(){
			$.ajax({
				url:"data/hotel.json",
				type:"post",
				dataType:"json",
				success:function(data){
					console.log("成功")
					randerList(data); // 渲染
				},
				error:function(){
					console.log("失败")
				}
			})
		}
		function randerList(_json){
			var _data=_json.result.hotel_list;
			var str="";
			$.each(_data,function(i,ele){
				str+='<a href=""><dl><dt><img src="'+ele.image+'" alt=""></dt><dd><p>'+ele.name+'</p><p>4.7分 <span>礼</span></p><p><span>'+ele.stars+'</span></p><p><span>'+ele.hotel_id+'km</span>'+ele.addr+'</p><p>￥55<span>起</span></p></dd></dl></a>'
			})
			$("#list").html(str);
			homeIs.refresh();// 当数据渲染后需要重新加载iscroll
		}
		function getPargram(){
			var arr=location.search.slice(1).split("&"),//["data_m=8", "data_d=18"]
				obj={};
				for(var i=0;i<arr.length;i++){
					var brr=arr[i].split("=");//["data_m", "8"] ["data_d", "18"]
					obj[brr[0]]=brr[1];
				}
			return obj;
		}
		// 星级
		$("#xj").on("tap",function(){
			$("#lst").css("bottom",".36rem");
			$("#mark").css("display","block");
		})
		$("#lst").on("tap",function(){
			$(this).css("bottom",""+-50+"%");
			$("#mark").css("display","none");
		})
		$("#mark").on("tap",function(){
			$("#lst").css("bottom",""+-50+"%");
			$(this).css("display","none");
		})
		//修改
		$("#_gz").on("tap",function(){
			location.href="data.html";
		})
		// 跳转
		$("#list").on("tap","a",function(){
			location.href="xiangqing.html";
		})
		//  时间
		var par=getPargram();
		var mm=par.date_mm,days=par.date_dys;
		var date=new Date(),
			mm=date.getMonth()+1,
			_day=date.getDate();
			$("#star").html("入住"+mm+"月"+_day+"号");
			$("#end").html("离店"+mm+"月"+(_day*1+1)+"日");
		if(!location.search){
			return false;
		}else{
			$("#end").html("离店"+mm+"月"+(days*1+1)+"日");
		}
		

})(Zepto)