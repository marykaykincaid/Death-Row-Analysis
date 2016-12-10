$(document).ready(function(){
	$('.loading-wrapper').show();

	AOS.init();
	addText();
	setTimeout(function(){
		$('.loading-wrapper').fadeOut(300);
	}, 5000);
});
$(window).scroll(function(){
	var start = ($('#text-div-last').position().top - $(window).scrollTop()) * (-1);
	var overall = $('#contents').position().top - $('#text-div-last').position().top;
	if(($(window).scrollTop() - $('#text-div-last').position().top) > 0 && ($(window).scrollTop() - $('#contents').position().top) < 0){
		$(".top").css("opacity", 1 - (start / overall));
	}
});
function addText(){
	var text = ["love","family","know","thank","sorry","want","god","like"];
	
	for(var i = 0; i < text.length; i++){
		var id = "text-div-"+i;
		if(i % 2 == 0){
			$('#text-viz').append('<div class="first" id="'+id+'" data-aos="fade-right"><p>' + text[i] + '</p></div>');
			$('#'+id).addClass('left')
		}
		else{
			$('#text-viz').append('<div class="first" id="'+id+'" data-aos="fade-left"><p>' + text[i] + '</p></div>');
			$('#'+id).addClass('right')
		}
	}          
	var text_last = "<p>These are the <span>most frequently used words</span> from final statements of <span>execution offenders</span>.</p>";

	$('#text-viz').append('<div id="text-div-last" class="last" data-aos="fade-up">' + text_last + '</div>');

}