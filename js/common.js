// JavaScript Document
$(function() {
	
	var portraitWidth,landscapeWidth;
	$(window).bind("resize", function(){
		if(Math.abs(window.orientation) === 0){
			if(/Android/.test(window.navigator.userAgent)){
				if(!portraitWidth)portraitWidth=$(window).width();
			}else{
				portraitWidth=$(window).width();
			}
			$("html").css("zoom" , portraitWidth/640 );
		}else{
			if(/Android/.test(window.navigator.userAgent)){
				if(!landscapeWidth)landscapeWidth=$(window).width();
			}else{
				landscapeWidth=$(window).width();
			}
			$("html").css("zoom" , landscapeWidth/640 );
		}
	}).trigger("resize");
	
	
	$('.tn_btn_maxheight').on('click',function(){
		var mh_father = $(this).parent( ".tn_box_maxheight" )
		if(mh_father.hasClass('open')){
			mh_father.removeClass('open');
			$(this).html('...続き&raquo;');
		}else{
			mh_father.addClass('open');
			$(this).html('閉じる');
		}		
	});
	$('.acco_box .acco_a').on("click",function(){
		$(this).toggleClass('opened');
		$(this).next('.acco_dv').slideToggle('slow');
	});
});
