$(document).ready(function(){
	$('.animate-content').addClass('hidden').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});

	$objWindow = $(window);
	$('div[data-type="background"]').each(function(){
		var $bgObj = $(this);
		$(window).scroll(function(){
			var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));

			var coords = '100%' + yPos + 'px';
			//Animate backgorund
			$bgObj.css({backgorundPosition: coords});
		});
	});

	
});