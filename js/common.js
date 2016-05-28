
//開いた画面の高さと幅を取得する
var WindowHeight = $(window).height(); 
var WindowWidth = $(window).width(); 
//WindowHeightは変数のため任意の名前をつける
$(function(){
	if(WindowWidth > 380){ //開いた画面が指定px以上なら実行
	//--要素に高さを書き込む
	//$('.view').css('height',WindowHeight+'px');
	$('.slaid').css('height',WindowHeight+'px');	//これ消すとスライドの高さが狂う、主にPC版で弊害
	}
	else{
	};
}); 

$(document).ready(function(){
  $('.bxslider').bxSlider({
	auto: false,
	adaptiveHeight: true,
	pagerCustom: '#bx-pager',
	controls: false,
	touchEnabled: false,
	swipeThreshold:60,
	oneToOneTouch:false,
	speed: 1000,
});
  $('.bxslider2').bxSlider({
	auto: true,
	infiniteLoop: true,
	pager:false,
	controls: false,
	autoHover: true,
	mode: 'fade',
	speed: 1000,
	pause: 10000
});

  $('.bxslider3').bxSlider({
	auto: true,
	infiniteLoop: true,
	pager:false,
	controls: false,
	autoHover: true,
	randomStart: true,
	mode: 'fade',
	pause: 20000,
	speed: 1000,
});
});

$(function(){
    $('a[href^=#]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
