$(window).resize(function() {
	resizeLanding();


});

$(document).ready(function() {
	resizeLanding();

});

function resizeLanding() {
	var bgHeight = $(".landing-background img").height();
	$(".landing-background").height(bgHeight);
	$(".top").height(bgHeight/2);
	$(".top").width((bgHeight/2)*2);
	
	var windowWidth = $(window).width();
	if(windowWidth < 560){
		$(".video-wrapper iframe").width("100%");
		$(".video-wrapper iframe").height("100%");
	}
	else if(windowWidth < 768 && windowWidth > 640){
		$(".video-wrapper iframe").width(600);
		$(".video-wrapper iframe").height(338);
	}
	else if (windowWidth >= 768 && windowWidth <900){
		$(".video-wrapper iframe").width(700);
		$(".video-wrapper iframe").height(394);
	}
	else if (windowWidth > 900){
		$(".video-wrapper iframe").width(853);
		$(".video-wrapper iframe").height(480);
	}
}

