// JavaScript Document
$(function() {
	//More-Less Text
	$(".maxheight_show").append("<span class='maxheight_btn'>...続き&raquo;</span>");
	$(".maxheight_hide").append("<span class='maxheight_btn'>閉じる</span>");
	$(".maxheight_show .maxheight_btn").on('click',function(){
		$(this).parent().next(".maxheight_hide").slideDown();
		$(this).hide();
	});
	$(".maxheight_hide .maxheight_btn").on('click',function(){
		$(this).parent().slideUp(function(){
			$(this).prev(".maxheight_show").children(".maxheight_btn").show();
		});
	});
	
	//Accordion
	$('.acco_box .acco_a').on("click",function(){
		$(this).toggleClass('opened');
		$(this).next('.acco_dv').slideToggle('slow');
	});
});
