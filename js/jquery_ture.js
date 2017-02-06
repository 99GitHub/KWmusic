window.onload = function(){
   if(location.search.indexOf("?")==-1){
      location.href += "?myurl";
   }
   else{
      if(location.search.indexOf("myurl")==-1) location.href += "&myurl";
   }
}
 $(document).ready(function(){
var curIndex = 0,      
imgLen = $(".imgList li").length; 
var autoChange = setInterval(function(){    
	if(curIndex < imgLen-1){
		curIndex ++;    
	}else{      
		curIndex = 0;   
	}
changeTo(curIndex);  },1500);

 $("#prev").hover(function(){ 
 	clearInterval(autoChange); },function(){   
 		autoChangeAgain(); 
 	}); 
 	$("#prev").click(function(){
 		curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);  
 		changeTo(curIndex); 
 	});

$("#next").hover(function(){
	clearInterval(autoChange);  },function(){     
		autoChangeAgain();  
	});  
	$("#next").click(function(){     
		curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;    
		changeTo(curIndex);  
	});
	 
function autoChangeAgain(){        
	autoChange = setInterval(function(){        
		if(curIndex < imgLen-1){          
			curIndex ++;       
		}else{         
			curIndex = 0;       
		}         
		changeTo(curIndex);     
	},2500);    
}

function changeTo(num){      
	var goLeft = num * 1920;    
	$(".imgList").animate({left: "-" + goLeft + "px"},600);   
	$(".infoList").animate({left: "-" + goLeft + "px"},600); 
//	$(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");     
	$(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");   
}
 
$(".indexList").find("li").each(function(item){      
	$(this).hover(function(){        
		clearInterval(autoChange);       
		changeTo(item);       
		curIndex = item;     
	},function(){        
		autoChangeAgain();     
	});  
});
$(".infoList").find("li").each(function(item){      
	$(this).hover(function(){        
		clearInterval(autoChange); 
//		changeTo(item);
		curIndex = item;     
	},function(){        
		autoChangeAgain();     
	});  
});
$(".small").find("img").each(function(item){
	$(this).mouseenter(function(){
		$("#img_3").attr('src','img/index/player/player_3'+(item+1)+'.jpg');
		$(".index_3").find(".index_30").hide().eq(item).show();
	})
})
})



