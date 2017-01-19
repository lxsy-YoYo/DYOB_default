// JavaScript Document
$(document).ready(function(){
	lazyload();
	/* 右侧淡入 */
	$(".table-area").animate({right:"0", opacity:"1"},1000);
	
	/* allread */
	$(".allread").click(function(){
		setTimeout(function(){$('.list-area li:nth-child(1)').addClass("delete")},0);
		setTimeout(function(){$('.list-area li:nth-child(2)').addClass("delete")},50);
		setTimeout(function(){$('.list-area li:nth-child(3)').addClass("delete")},100);
		setTimeout(function(){$('.list-area li:nth-child(4)').addClass("delete")},150);
		setTimeout(function(){$('.list-area li:nth-child(5)').addClass("delete")},200);
		setTimeout(function(){$('.list-area').slideUp()},200);
		setTimeout(function(){$('.list-area li').fadeOut()},250);
	});
	
	/* Sidebar */
	$(".sidebar-control").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$("#sidebar").removeClass("open");
			$(".top").removeClass("open");
			$("#content").removeClass("open");
			//$(this).children("img").prop("src","img/sidebarclose.png");
			$("footer").removeClass("active");
		}
		else{
			$(this).addClass("active");
			$("#sidebar").addClass("open");
			$(".top").addClass("open");
			$("#content").addClass("open");
			//$(this).children("img").prop("src","img/sidebaropen.png");
			$("footer").addClass("active");
		}
	});
	
	/* Placeholder */
	$("input[type=text]").each(function(){
		var placeholderText;
		if($(this).attr("placeholder")!=""){
			placeholderText= $(this).attr("placeholder");
		}
		$(this).focus(function(){
			$(this).prop("placeholder","");
		});
		$(this).blur(function(){
			$(this).prop("placeholder",placeholderText);
		});
	});
});
