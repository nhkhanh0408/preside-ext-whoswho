var whoiswhoExt = function() {

	// Collapsible, add class .accordion to .collapsible to make it accordion.
	var collapsibleHandler = function( $container ) {

		$( ".collapsible", $container ).each(function() {
			var $me = $( this ),
				isAccordion = $me.hasClass( "accordion" );
			$me.find( "> .collapsible-item > .collapsible-item-header > a" ).click( function( e ) {
				e.preventDefault();
				var collapsible_item = $( this ).closest( ".collapsible-item" );
				if ( isAccordion ) {
					collapsible_item.addClass( "is-open" ).find( "> .collapsible-item-content:first" ).slideDown();
					collapsible_item.siblings().removeClass( "is-open" ).find( "> .collapsible-item-content" ).stop().slideUp();
				} else {
					collapsible_item.toggleClass( "is-open" ).find( "> .collapsible-item-content" ).stop().slideToggle();
				}
			});
			if ( isAccordion ) {
				$me.find( "> .collapsible-item.is-open > .collapsible-item-header > a" ).trigger( "click" );
			} else {
				$me.find( "> .collapsible-item.is-open > .collapsible-item-content" ).slideDown();
			}
		});

		// Text content toggler
		$('.text-toggler:not(.ext)').append('<a href="#" class="text-toggler-link js-toggle-content">Show <span class="more-label">more</span><span class="less-label">less</span></a>');

		$('.text-toggler:not(.ext)').each(function() {
			var textToggler        = $(this),
			    isContentShown     = textToggler.hasClass('is-content-shown'),
			    textTogglerContent = textToggler.find('> .text-toggler-content:not(.ext)');

			if ( isContentShown ) {
				textTogglerContent.show();
			}
		});

		$('.text-toggler .js-toggle-content:not(.ext)').on('click', function(e) {
			e.preventDefault();

			var textToggler = $(this).parent('.text-toggler:not(.ext)');
			var isContentShown = textToggler.hasClass('is-content-shown');
			var textTogglerContent = textToggler.find('> .text-toggler-content:not(.ext)');

			if ( isContentShown ) {
				textToggler.removeClass('is-content-shown');
				textTogglerContent.slideUp(300);
			} else {
				textToggler.addClass('is-content-shown');
				textTogglerContent.slideDown(300);
			}
		});

		// Quick links
		$('.quick-links-list-item').each(function() {
			var thisItem = $(this);
			var hasSubNav = thisItem.hasClass('has-sub-nav');
			var isOpen = thisItem.hasClass('is-open');
			var thisItemList = thisItem.find('> .quick-links-list');
			var thisItemLink = thisItem.find('> .quick-links-list-item-link');
			var subNavToggler = $('<span class="sub-nav-toggler"></span>');

			if ( hasSubNav ) {
				thisItemLink.append(subNavToggler);
			}

			if ( isOpen ) {
				thisItemList.slideDown();
			}
		});

		$('.quick-links-list-item-link .sub-nav-toggler').on( 'click', function(e) {
			e.preventDefault();

			var thisToggler = $(this);
			var togglerParentItem = thisToggler.closest('.quick-links-list-item');
			var togglerParentItemIsOpen = togglerParentItem.hasClass('is-open');
			var togglerParentItemSubNav = togglerParentItem.find('> .quick-links-list');

			if ( togglerParentItemIsOpen ) {
				togglerParentItemSubNav.slideUp();
				togglerParentItem.removeClass('is-open');
			} else {
				togglerParentItemSubNav.slideDown();
				togglerParentItem.addClass('is-open');
			}
		});

		// Show more/less widget
		$('.show-more-less-widget').each(function() {
			var $thisWidget = $(this);
			var $button = $thisWidget.find('.show-more-less-button');

			$thisWidget.filter('.is-active').find('.show-more-less-content').show();

		}).on('click', '.show-more-less-button', function(e) {
			e.preventDefault();
			var $thisWidget = $(this);
			var $parent = $thisWidget.closest('.show-more-less-widget');
			var $content = $parent.find('.show-more-less-content');
			var isActive = $parent.hasClass('is-active');

			if ( isActive ) {
				$content.slideUp({
					complete: function() {
						$parent.removeClass('is-active');
					}
				});
			} else {
				$content.slideDown();
				$parent.addClass('is-active');
			}
		});

		// Block widget toggle
		$('.block-widget.toggle-widget').each(function() {
			var $thisWidget = $(this);

			$thisWidget.filter('.is-active').find('.widget-content').show();
		}).on('click', '.widget-header .heading', function(e) {
			e.preventDefault();
			var $thisBtn = $(this);
			var $parent = $thisBtn.closest('.block-widget.toggle-widget');
			var $content = $parent.find('.widget-content');
			var isActive = $parent.hasClass('is-active');

			if ( isActive ) {
				$content.slideUp({
					complete: function() {
						$parent.removeClass('is-active');
					}
				});
			} else {
				$content.slideDown();
				$parent.addClass('is-active');
			}
		});

		// Footer toggle widget
		$('.footer-toggle-widget').append('<span class="arrow-toggler js-toggle-widget-content"></span>');
		$('.footer-toggle-widget.is-active .footer-toggle-widget-content').css({ display: 'block' });

		$('.js-toggle-widget-content').on('click', function(e) {
			e.preventDefault();

			var $thisBtn = $(this);
			var $theWidget = $thisBtn.closest('.footer-toggle-widget');
			var $theWidgetContent = $theWidget.find('.footer-toggle-widget-content');
			var isActive = $theWidget.hasClass('is-active');

			if ( isActive ) {
				$theWidgetContent.slideUp({
					complete: function() {
						$theWidget.removeClass('is-active');
					}
				});
			} else {
				$theWidget.addClass('is-active');
				$theWidgetContent.slideDown();
			}
		});

	}

	var ie8Handler = function () {

		$( "input[type='radio'], input[type='checkbox']" ).each(function() {
			if ( $(this).is( ":checked" ) ) {
				$( this ).next( "label" ).toggleClass( "checked" );
			}
		});

		$( "body" ).on( "change", "input[type='checkbox']", function() {
			$(this).next("label").toggleClass("checked");
		});

		$( "body" ).on( "change", "input[type='radio']", function() {
			if ( $( this ).is( ":checked" ) ) {
				$( "input[name='" + $(this).attr( "name" ) + "']" ).next( "label" ).removeClass( "checked" );
				$( this ).next( "label" ).addClass( "checked" );
			}
		});

	}

	return {

		  isIE8: $( "html" ).hasClass( "lt-ie9" )

		, isIE7: $( "html" ).hasClass( "lt-ie8" )

		/* Media queries breakpoints */
		, mediaWidth: {
			  SM: 991
			, XS: 767
		} /* End media queries breakpoints */

		, afterResized: function() {}

		/* Initiate handlers */
		, init: function() {

			var afterResize  = 0;

			collapsibleHandler( $("body") );

			if ( this.isIE8 ) {
				ie8Handler();
			}

			$(window).on( "resize", function() {
				clearTimeout( afterResize );
				afterResize = setTimeout( whoiswhoExt.afterResized, 250 );
			});

			// Trigger resize onload to make the other plugin works properly eg. masonry
			$(window).on( "load", function() {
				$(window).trigger( "resize" );
			});

			return this;

		} /* End initiate handlers */

	};

}();

( function( $ ) {

	$( document ).ready( function() {

		whoiswhoExt.init();

	} );

} )( JQuery );