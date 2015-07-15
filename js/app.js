(function() {
	"use strict";
	$(document).ready(function() {
        var $window = $(window);
        var $this = $(this);
		$window.scroll(function() {
			if ($this.scrollTop() > 22 && $window.width() > 766) {
				$('nav').addClass('sticky');
				$('nav').removeAttr('id');
				$('li').addClass('sticky');
				$('.logo').addClass('sticky');
				$('.navbar-nav > li > a').addClass('sticky');    
			} else {
				$('nav').removeClass('sticky');
				$('nav').attr('id', 'main-nav');
				$('li').removeClass('sticky');
				$('.logo').removeClass('sticky');
				$('.navbar-nav > li > a').removeClass('sticky');
			}
		});
		$('#slide-ani').each(function() {
			var imagePos = $(this).offset().top,
				imageHeight = $(this).height(),
				topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight >
				topOfWindow) {
				$(this).addClass("slideRight");
			} else {
				$(this).removeClass("slideRight");
			}
		});
        
        var win_height_padded = $window.height() * 1.1,
			isTouch = Modernizr.touch;
		if (isTouch) {
			$('.revealOnScroll').addClass('animated');
		}

		function revealOnScroll() {
			var scrolled = $window.scrollTop(),
				win_height_padded = $window.height() * 0.98;
			// Showed...
			$(".revealOnScroll:not(.animated)").each(function() {
				var $this = $(this),
					offsetTop = $this.offset().top;
				if (scrolled + win_height_padded > offsetTop) {
					if ($this.data('timeout')) {
						window.setTimeout(function() {
							$this.addClass('animated ' + $this.data('animation'));
						}, parseInt($this.data('timeout'), 100));
					} else {
						$this.addClass('animated ' + $this.data('animation'));
					}
					$('.chart').easyPieChart({
						barColor: '#555',
						trackColor: '#E0E0E0',
						scaleColor: '#000',
						scaleLength: 0,
						lineCap: 'butt',
						lineWidth: 17,
						trackWidth: undefined,
						size: 170,
						rotate: 0,
						animate: {
							duration: 3500,
							enabled: true
						},
						easing: 'easeInOutExpo',
						onStart: function(from, to) {
							return;
						},
						onStep: function(from, to, percent) {
							$(this.el).find('.percent').text(Math.round(percent));
						},
						onStop: function(from, to) {
							return;
						}
					});
				}
			});
			// Hidden...
			$(".revealOnScroll.animated").each(function(index) {
				var $this = $(this),
					offsetTop = $this.offset().top;
				if (scrolled + win_height_padded < offsetTop) {
					$(this).removeClass(
						'animated zoomIn fadeInSoft fadeInLeftSoft fadeInRightSoft fadeInUpSoft'
					);
				}
			});
		}
		revealOnScroll();
		$window.on('scroll', revealOnScroll);
	});
})();