//邮箱手机登陆选择
$(document).ready(function(){
	$(".regis_phone a").click(function(){
		$(".regis_phone").hide();
		$(".regis_email").show();
	})
	$(".regis_email a").click(function(){
		$(".regis_email").hide();
		$(".regis_phone").show();
	})
})