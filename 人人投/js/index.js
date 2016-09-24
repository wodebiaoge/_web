$(function(){
	//  轮播
	var num=0;
	var len=$('#list1').children().length+1;
	var w=$('#list1 li').eq(0).width();
	$('#list1').width(len*w);
	$('#box4').find('p').eq(0).slideDown(1500).siblings().slideUp(1500);
	time=setInterval(auto,3600);
	function auto(){
		num++;
		if(num>len-2){
			var newLi=$('#list1 li').first().clone().appendTo($('#list1'));
			$('#list1').stop().animate({"marginLeft":-w*num},1000,function(){
				newLi.remove();
				$('#list1').css({"marginLeft":0})
			})
			num=0;
			$('#list2 li').eq(0).addClass('bg').siblings().removeClass('bg');
			$('#box4').find('p').eq(0).slideDown(1500).siblings().slideUp(1500)
		}else{
			change();
		}
	}
	$('#list2 li').on('mouseover',function(){
		num=$(this).index();
		change();
	});
	function change(){
		$('#list1').stop().animate({"marginLeft":-w*num},1000)
		$('#list2 li').eq(num).addClass('bg').siblings().removeClass('bg');
		$('#box4').find('p').eq(num).slideDown(1000).siblings().slideUp(1000)
	};
	$('.logo_R').hover(function(){
		clearInterval(time);
	},function(){
		time=setInterval(auto,3600);
	});




	//蒙城
	$(".rg").on('click',function(){
		var newDiv=$('<div id=mc></div>').appendTo('body');
		var s="登陆",g="关闭",m="请登录",a="账号:",y="密码:",t="邮箱:";
		var str="<div><span id=close>"+g+"</span><p>"+m+"</p><p>"+a+"<input type=text></p><p>"+y+"<input type=password></p><p>"+t+"<input type=text></p><input type=button id=btn value="+s+"></div>"
		$('#dl').html(str);
		newDiv.width($(window).width());
		newDiv.height($(document).height());
		newDiv.css({"top":0+"px","left":0+"px"});
		$('#dl').show();
		$('#close').on('click',function(){
			newDiv.remove();
			$('#dl').hide();
		})
	});
	var nmd=Number($('#bb').text())+1;
	$('.shuz').toggle(function(){
		$(this).find('img').attr("src","img/love1.png")
		$(this).find('b').text(nmd)
	},function(){
		if(confirm("您确定取消喜欢吗？")){
			$(this).find('img').attr("src","img/xin.png")
			$(this).find('b').text(nmd-1);
		}
	});
	$('.db').on('click',function(){
		alert("没有什么可对比的")
	});
	var lens=$('#bh').width();
	$('#aa').find('a').eq(0).css({"color":'red'})
	$("#bh b").stop().animate({"width":lens},2000)
	$('#aa').find('a').on('click',function(){
		var idx=$(this).index()+1;
		$(this).css({"color":'red'}).siblings().css({"color":'#000'})
		$("#bh b").stop().animate({"width":lens/idx},2000)
	});
	var lens=$('#bh1').width();
	$('#aa1').find('a').eq(0).css({"color":'red'})
	$("#bh1 b").stop().animate({"width":lens},2000)
	$('#aa1').find('a').on('click',function(){
		var idx=$(this).index()+1;
		$(this).css({"color":'red'}).siblings().css({"color":'#000'})
		$("#bh1 b").stop().animate({"width":lens/idx},2000)
	});
	$("#foot dl").on('mouseover',function(){
		$(this).stop().animate({"marginTop":-15},300).parent().siblings()
		.find('dl').stop().animate({"marginTop":0},300);
	});
	$('.footer').on('mouseout',function(){
		$(this).find('dl').stop().animate({"marginTop":0},300)
	});
	$(window).scroll(function(){
		var hh=$(this).scrollTop();
		console.log(hh);
		if(hh>$(this).height()){
			$('#help').show(300);
		}else{
			$('#help').hide(300);
		}
		$('#h_right').find('img').eq(2).on('click',function(){
			$('body').stop().animate({scrollTop:0},1500);
		});
		$('#h_right').find('img').eq(2).on('mouseover',function(){
			$('#h_left li').hide(700);
		})

	});
	$('#h_right').find('img').not(":last()").on('mouseover',function(){
		var idx=$(this).index();
		$('#h_left li').eq(idx).show(1000).siblings().hide();
	});
	$('#h_left').on('mouseout',function(){
		$('#h_left li').hide(700);
	});

	timer=setInterval(function(){
		$('.logo_L').stop().animate({'opacity':0.2},1000,function(){
			$('.logo_L').stop().animate({'opacity':1},1000)
		})
	},2000)
})