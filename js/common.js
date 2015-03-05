// JavaScript Document
$(function() {
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
