window.onload = function(){
   if(location.search.indexOf("?")==-1){
      location.href += "?myurl";
   }
   else{
      if(location.search.indexOf("myurl")==-1) location.href += "&myurl";
   }
}
$(document).ready(function(){
	$(".songs_list").find("li").each(function(){
		$(this).find("#play").hide();
		$(this).mouseover(function(){
			$(this).find("#play").show();
		}).mouseout(function(){
			$(this).find("#play").hide();
		})
	})	
})
$(document).ready(function(){
	$(".singers").find("li").each(function(){
		$(this).mouseover(function(){
			$(this).find(".songListSplice").show();$(this).find(".songList").show();
			$(this).find(".infoSplice").hide();$(this).find(".info").hide();
		}).mouseout(function(){
			$(this).find(".songListSplice").hide();$(this).find(".songList").hide()
			$(this).find(".infoSplice").show();$(this).find(".info").show();
		})
	})
})
