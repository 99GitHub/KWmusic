$(document).ready(function(){
	$(".part_5buttons").find("li").each(function(item){
		$(this).click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			showhide(item);
		})
	})
})
function showhide(num){
	$(".singer_left").find("div").hide().eq(num).show();
}
