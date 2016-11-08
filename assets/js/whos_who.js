( function( $ ){	
	// Text content toggler

	$('.ext.text-toggler').append('<a href="#" class="text-toggler-link js-toggle-content">Show <span class="more-label">more</span><span class="less-label">less</span></a>');

	$('.ext.text-toggler').each(function() {
		var textToggler        = $(this),
			isContentShown     = textToggler.hasClass('is-content-shown'),
			textTogglerContent = textToggler.find('> .ext.text-toggler-content');

		if ( isContentShown ) {
			textTogglerContent.show();
		}
	});

	$('.ext.text-toggler .js-toggle-content').on('click', function(e) {
		e.preventDefault();

		var textToggler = $(this).parent('.ext.text-toggler');
		var isContentShown = textToggler.hasClass('is-content-shown');
		var textTogglerContent = textToggler.find('> .ext.text-toggler-content');

		if ( isContentShown ) {
			textToggler.removeClass('is-content-shown');
			textTogglerContent.slideUp(300);
		} else {
			textToggler.addClass('is-content-shown');
			textTogglerContent.slideDown(300);
		}
	});
} )( presideJQuery );