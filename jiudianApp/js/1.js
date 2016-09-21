;(function($){
	// 响应式布局
	var d=document.documentElement.clientWidth;
		document.getElementsByTagName('html')[0].style.fontSize=d/320*625+'%';//320 基于iphone4排
	var ls=window.localStorage,has=false;
	$("#lca").on("tap",function(){
		ls.setItem("fj","附近的酒店");
		//location.href="data.html";
		set();
	})
	$("#_p").on("tap",function(){
		location.href="data.html";
		$("#sou").sttr("id","_sou")
	})
	$("#_pp").on("tap",function(){
		location.href="data.html";
	})
	//跳转
	$("#tz").on("tap",function(){
		location.href="chengshi.html";
	})
	// 默认时间
	var date=new Date(),
		mm=date.getMonth()+1,
		_day=date.getDate();
		$("#star").html(""+mm+"月"+_day+"号");
		$("#end").html(""+1+"晚("+mm+"月"+(_day*1+1)+"号离店)");
	
	
	function set(){
		var _in=ls.getItem("fj");
		if(!ls.getItem("fj")){
			$("#fj").html("广州");
		}else{
			$("#fj").html(_in);
			ls.removeItem("fj");  // 清除  还原
		}
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
	var par=getPargram();
	if(par.data_ts){
		_ts=par.data_ts;
	}else{
		_ts=0;
	}
	var _m=par.data_m,
		_d=par.data_d,
		_c=par.data_c*1+_ts*1,
		_ed=par.data_e,
		_y=par.data_y;
		
	if(!location.search){
		// 搜索
		$("#sou").on("tap",function(){
			location.href="jiudian.html?date_mm="+mm+"&date_dys="+_day;
		})
		return false;
	}else{
		$("#star").html(""+_m+"月"+_d+"号");
		$("#end").html(""+_c+"晚("+_y+"月"+_ed+"号离店)");

	}
	$("#sou").on("tap",function(){
		location.href="jiudian.html?date_mm="+_y+"&date_dys="+_ed;
	})
})(Zepto)