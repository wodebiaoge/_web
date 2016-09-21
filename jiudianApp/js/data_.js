;(function($){
	var jm=0,jday=0,_end=0,_cha=0,_mm=0,days=0;
	$.fn.rili=function(opt){
		var settings=$.extend({},{
			startM:new Date(),
			size:3
		},opt);
		var b=0;
		function addLing(num){
			if(num<10){
				num="0"+num;
			}else{
				num=num;
			}
			return num;
		}
		var y=settings.startM.getFullYear(),   //获取年
			m=settings.startM.getMonth();

		return $(this).each(function(idx,ele){
			for(var i=0;i<settings.size;i++){
				var newDate=new Date(y,m+i);  // 超过12月 自动变为下一年 一月
				createRili(ele,i,newDate.getFullYear(),newDate.getMonth()+1) // 创建日历
			}
			$(".next").on("tap",function(){
				b++;
				if(b>=2) b=2;
				$("#main").find(".list").eq(b).show().siblings().hide();
			})
			$(".prev").on("tap",function(){
				b--;
				if(b<=0) b=0;
				$("#main").find(".list").eq(b).show().siblings().hide();
			})
		})
		function createRili(e,i,y,m){
			var node=$('<div class="list"><p class=pp><a href="" class="prev"></a><span class="yf">'+y+'年'+addLing(m)+'月</span><a href="" class="next"></a></p><ul><li>周日</li><li>周一</li><li>周二</li><li>周三</li><li>周四</li><li>周五</li><li>周六</li></ul></div>');
			var str='';
				str+=createTr(y,m);
			node.append($(str))
			$(e).find(".scroll").append(node);
		};
		function createTr(y,m){
			var str="<table id=tab"+m+">",
				pDays=new Date(y,m-1,1).getDay(), // 回去一号是星期几
				pvDays=getDays(y,m-1),  // 上个月天数
				daa=new Date();
				jm=daa.getMonth()+1;   // 获取今天几月
				jday=daa.getDate(); // 获取今天几号
				days=getDays(y,m); // 获取天数
				console.log(m)
				$("#star").html(""+jm+"月"+jday+"号");
				console.log(days)
			// 行数= 前一个月的天数加上这一个月的天数/7
			var rows=Math.ceil((days+pDays)/7);
			console.log(rows)
			// 遍历行 添加td
			for(var i=0;i<rows;i++){
				str+='<tr>'
				for(var j=1;j<=7;j++){
					var d=(j+i*7)-pDays //  i 一次加一  乘于7与前面相加  遍历出每一行对应相加
					if(d<1){   // 上个月的日子
						str+='<td  class="prev"><small>'+(pvDays+d)+'</small></td>'
					}else if(d<=days){
						if(d<jday && m==jm){  // 本月过去的日子
							str+='<td class="over">'+addLing(d)+'</td>'
						}else if(d==jday && m==jm){
							str+='<td id="start">'+addLing(d)+'</td>'
						}else{
							str+='<td>'+addLing(d)+'</td>'
						}
					}
					
				}
				
			}
			str+='</tr></table>'
			return str;
		};
		function getDays(y,m){
			if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12){
				return 31;
			}else if(m==4 || m==6 || m==9 || m==11){
				return 30;
			}else{
				if(y/400==0 || (y/4==0 && y/100!=0)){
					return 29;
				}else{
					return 28;
				}
			}
		}
	}
	$("#main").on("tap","td",function(){
		if($(this).attr("class")){
			return false;
		}else{
			$(this).addClass("jintian").siblings().removeClass("jintian").parent().siblings().find("td").removeClass("jintian");
			_end=$(this).text();
			_cha=_end-jday;
			_mm=$(this).parents(".list").find(".yf").text();
			_mm=_mm.slice(_mm.length-2,_mm.length-1)
		}
	})
	// 跳转
	$("#suss").on("tap",function(){
		_click(jm,jday);
	})
	function _click(m,d){
		var _class=$("#main").find(".jintian");
		if(_class.length==0){
			alert("请选择离店日期!")
		}else{
			if(_mm==jm){
				location.href="index.html?data_m="+m+"&data_e="+_end+"&data_y="+_mm+"&data_c="+_cha+"&data_d="+d;
			}else{
				location.href="index.html?data_m="+m+"&data_e="+_end+"&data_y="+_mm+"&data_c="+_cha+"&data_ts="+31+"&data_d="+d;
			}
			
		}
	}
})(Zepto)
