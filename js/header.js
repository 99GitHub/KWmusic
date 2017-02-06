//更多服务下拉菜单
$(document).ready(function(){
	$(".more_service").hide();
	$(".more_use").on("mouseover",function(){
		$(".more_service").show();
		$(".login").hide();
	})
	$(".more_service").on("mouseover",function(){
		$(this).show();
	}).on("mouseleave",function(){
		$(this).hide();
	})
	
	$("i").on("mouseenter",function(){
		$(".more_service").hide();
	})
})
//登陆下拉菜单
$(document).ready(function(){
	$(".login").hide();
	$(".KWlogin").hide();
	
	$("input").on("mouseenter",function(){
		$(".login").hide();
	})
	
	$(".link_login").on("mouseover",function(){
		$(".login").show();
		$(".more_service").hide();
	}).click(function(){
		$(".KWlogin").show();
		$(".login").hide();
	})
	
	$(".login").mouseover(function(){
		$(".login").show();
		$(".icon_0").addClass("icon0_hover");
		
	}).on("mouseleave",function(){
		$(".login").hide();
		$(".icon_0").removeClass("icon0_hover");
	})
	
})
//登录框
$(document).ready(function(){
	$(".link_login1").click(function(){
		$(".KWlogin").show();
	})
	$(".close").click(function(){
		$(".KWlogin").hide();
	})
	$("#inp1").on("click",function(){
		$(this).addClass("change_color");
		$("#inp2").removeClass("change_color");
	})
	$("#inp2").on("click",function(){
		$(this).addClass("change_color");
		$("#inp1").removeClass("change_color");
	})
	$("#cleck").click(function(){
		if ($("#cleck").className == "offi") {
			$("#cleck").removeClass("offi");
		} else{
			$("#cleck").addClass("offi");
		}
		
	})
})