(function($){
	preventDt();
	function preventDt(){
		$(document).on("click","a",function(e){
			e.preventDefault();
		})
	}
	function addLing(num){
		if(num<10){
			num="0"+num;
		}else{
			num=num;
		}
		return num;
	}

	// 获取地址栏
	function getPargram(){
		if(!location.search) return false;
		var arr=location.search.slice(1).split("&"),//["data_m=8", "data_d=18"]
			obj={};
			for(var i=0;i<arr.length;i++){
				var brr=arr[i].split("=");//["data_m", "8"] ["data_d", "18"]
				console.log(brr)
				obj[brr[0]]=brr[1];
			}
		return obj;
	}
})(Zepto)