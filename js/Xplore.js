$(document).ready(function(){
	$("#today").on("click",function(){
		$(this).removeClass("off").addClass("on");
		$("#all").removeClass("on").addClass("off");
		$(".today_list").show();
		$(".all_list").hide();
	})
	$("#all").on("click",function(){
		$(this).removeClass("off").addClass("on");
		$("#today").removeClass("on").addClass("off");
		$(".today_list").hide();
		$(".all_list").show();
	})
})