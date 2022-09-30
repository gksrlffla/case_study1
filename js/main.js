$(function(){
	//header
	$(function(){
	$("nav > ul > li").hover(
		function(){
			$(this).addClass("active");
			$("#header").stop().animate({height:285}, 300);
		},
		function(){
			$(this).removeClass("active");
			$("#header").animate({height:155}, 300);
		}
	);
	$("nav > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
		$("#header").stop().animate({height:285}, 300);
	});
	$("nav li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
	});
	$("nav li:last-child li:last-child").focusout(function(){
		$("#header").stop().animate({height:155}, 300);
	});
});


	//slder
	var sliderN=0;
   var sliderTotal=4;

   $(".slider_moving li").eq(sliderN).addClass("current");

   $(".direction .left").click(function(e){
      e.preventDefault();
      prevMoving();
   });
   $(".direction .right").click(function(e){
      e.preventDefault();
      nextMoving();
   });

   setInterval(function(){
      nextMoving();
   }, 7000);

	function galleryInterface(){
		$(".slider_moving li").removeClass("current");
		$(".slider_moving li").eq(sliderN).addClass("current");
	}

   function prevMoving(){
      if(sliderN > 0){
            sliderN = sliderN-1;
      }
      else{
         sliderN=(sliderTotal-1);
      }
		galleryInterface();
   }

   function nextMoving(){
      if(sliderN < sliderTotal-1){
         sliderN = sliderN+1;
      }
      else{
         sliderN=0;
      }
	  	galleryInterface();
   }


});