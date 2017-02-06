$(document).ready(function(){
	setInterval(function(){
		$("#singer_img").css({
			"transform": "rotate(2160deg)",
			"transitionProperty":"transform",
			"transitionDuration":"180s",
			"transitionTiming-function":"linear",
			"transitionDelay": "0.5s;"});
		},0)
})