$(window).scroll(function(){

	var wScrollDistance=$(this).scrollTop();
	
	$('.logo').css({
		'transform':'translate(0px, '+wScrollDistance/2+ '%)'
	});
	
	$('.back-comp').css({
		'transform':'translate(0px, '+wScrollDistance/4+ '%)'
	});
	
	$('.front-comp').css({
		'transform':'translate(0px, '+wScrollDistance/-15+ '%)'
	});
	
	if(wScrollDistance > $('.clothes-pics').offset().top-($(window).height() /6)) {
	
	$('.clothes-pics figure').each(function(i){
	
	  setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
	
	   });
	}
	
});