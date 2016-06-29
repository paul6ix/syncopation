$(window).load(function() {

	/* ------------------------------------------------------------------
	 
	 MAIN NAV
	 
	 ------------------------------------------------------------------ */
	$('.nav-slide-button').click(function() {
		$('.pull').slideToggle();
	});

    /**
     * Makes menu close when clicking a link inside the menu
     */
    $('.top-nav > li > a').click(function() {
        $('.pull').slideToggle();
        $("#nav-toggle").toggleClass("active");
    });

	/* ------------------------------------------------------------------
	 
	 FLEXSLIDER SLIDERS
	 
	 ------------------------------------------------------------------ */
	$('#testimonials-slider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		useCSS: false,
		start: function() {
			$.waypoints('refresh');
		}
	});

	/* ------------------------------------------------------------------
	 
	 ISOTOPE
	 
	 ------------------------------------------------------------------ */
	//Define your containers and option sets
	var $container = [$('#work-masonry'), $('#journal-masonry')], $optionSets = [$('#options-work .option-set'), $('#options-journal .option-set')];

	//Initialize isotope on each container
	$('#work-masonry').isotope({
		itemSelector: '.masonry-item',
		getSortData: {
			name: '.name',
			category: '[data-category]'
		}
	});

	$('#journal-masonry').isotope({
		itemSelector: '.masonry-item',
		getSortData: {
			name: '.name',
			category: '[data-category]'
		}
	});

	//Initialize filter links for each option set
	jQuery.each($optionSets, function(index, object) {

		var $optionLinks = object.find('a');

		$optionLinks.click(function() {
			var $this = $(this), $optionSet = $this.parents('.option-set'), options = {},
					key = $optionSet.attr('data-option-key'),
					value = $this.attr('data-option-value');
			// don't proceed if already selected
			if ($this.hasClass('selected')) {
				return false;
			}

			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');

			// make option object dynamically, i.e. { filter: '.my-filter-class' }

			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			options[key] = value;
			if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
				// changes in layout modes need extra logic
				changeLayoutMode($this, options);
			} else {
				// otherwise, apply new options

				$container[index].isotope(options);
			}

			return false;
		});
	});

});

$(function() {
	/* ------------------------------------------------------------------
	 
	 LOADING
	 
	 ------------------------------------------------------------------ */
	NProgress.start();
	NProgress.done();

	/* ------------------------------------------------------------------
	 
	 SMOOTH SCROLL
	 
	 ------------------------------------------------------------------ */
	smoothScroll.init();

	/* ----------------------------------------------------------------
	 
	 Hover state on div - for iOS (for Team Section members)
	 
	 ---------------------------------------------------------------- */

	if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
		$(".masonry-overlay").click(function() {  // Update class to point at the head of the list
		});
	}

	/* ------------------------------------------------------------------
	 
	 TWEETIE - Display latest tweets
	 
	 ------------------------------------------------------------------ */
	$('.twitter-feed').twittie({
		username: 'VisualCoffee_',
		count: 5,
		dateFormat: '%d %B %Y',
		template: '{{tweet}} <div class="twitter-date"><a href="{{url}}" target="_blank">{{date}}</a> <span class="twitter-user">@{{user_name}}</span></div>',
		apiPath: 'twitter/api/tweet.php'
	},
	function() {
		var ticker = $('.twitter-feed ul');
		ticker.children('li:first').show().siblings().hide();
		setInterval(function() {
			ticker.find('li:visible').fadeOut(500, function() {
				$(this).appendTo(ticker);
				ticker.children('li:first').fadeIn(500);
			});
		}, 5000);
	});
});

$(document).ready(function() {
	/* ------------------------------------------------------------------
	 
	 COLIO PLUGIN
	 
	 ------------------------------------------------------------------ */
	// "scrollTop" plugin
	$.scrollUp();

	// "colio" plugin
	var colio_run = function() {
		$('#colio-1').remove();
		$('#services .colio-items').colio({
			id: 'colio-1',
			theme: 'white',
			placement: '#services-expand',
			scrollOffset: 100,
			onContent: function(content) {
				// init "flexslider" plugin
				$('.flexslider', content).flexslider({slideshow: false, animationSpeed: 300});
			}
		});
	};

	colio_run();

	/* ------------------------------------------------------------------
	 
	 WAYPOINTS
	 
	 ------------------------------------------------------------------ */
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp8').waypoint(function() {
		$('.wp8').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp9').waypoint(function() {
		$('.wp9').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp10').waypoint(function() {
		$('.wp10').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp11').waypoint(function() {
		$('.wp11').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp12').waypoint(function() {
		$('.wp12').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp13').waypoint(function() {
		$('.wp13').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp14').waypoint(function() {
		$('.wp14').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});

	/* ------------------------------------------------------------------
	 
	 MAGNIFIC POPUP
	 
	 ------------------------------------------------------------------ */
	$('.image-magnific').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		image: {
			// options for image content type
			titleSrc: 'title'
		}
	});

	/* ------------------------------------------------------------------
	 
	 CONTACT FORM
	 
	 ------------------------------------------------------------------ */
	$("#ajax-contact-form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "post",
			url: "contact-form/contact.php",
			data: str,
			success: function(msg) {
				// Message Sent
				if (msg == 'OK') {
					result = '<div class="alert alert-success">Your message has been sent. Thank you!</div>';
					//option to hide the form fields after sending
					$("#fields").hide();
				} else {
					result = msg;
				}
				$('#note').html(result);
			}
		});
		return false;
	});

});

/* ------------------------------------------------------------------
 
 MAIN NAV TRANSFORM ICON
 
 ------------------------------------------------------------------ */
$("#nav-toggle").click(function(e) {
	$(this).toggleClass("active");
	e.preventDefault();
	return false;
});