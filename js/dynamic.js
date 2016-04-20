function slider() {
	$('.slider .temp > div').each(function() {
		var path = $(this).children('img').attr('src');
		$(this).css({
			'background': 'url("'+path+'") no-repeat center center'
		});
	})
	$('.slider .container').empty();
	$('.slider .prev, .slider .next, .slider .pagination').remove();
	$('.slider .container').html($('.slider .temp').html());
	$('.slider, .slider .container, .slider .container > div').width($('.wrapper').width());
	$('.slider').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuad',
		play: 10000,
		pause: 2500,
	});
}
$(document).ready(function() {
	if ( $('.slider').length > 0 ) {
		slider();
		$('.slider').bind('swipeleft', function() {
			$('.slider .next').trigger('click');
		});
		$('.slider').bind('swiperight', function() {
			$('.slider .prev').trigger('click');
		});
	}
	if ( $('.card').length > 0 ) {
		$('.card .photos').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 500,
			slideEasing: 'easeInOutQuad',
			play: 10000,
			pause: 2500,
		});
		$('.card .photos').bind('swipeleft', function() {
			$('.card .photos .next').trigger('click');
		});
		$('.card .photos').bind('swiperight', function() {
			$('.card .photos .prev').trigger('click');
		});
	}
	if ( $('.similar').length > 0 ) {
		$('.similar ul').jcarousel({
			scroll: 5,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.similar .jcarousel-container').bind('swipeleft', function() {
			$('.similar .jcarousel-container .jcarousel-next').trigger('click');
		});
		$('.similar .jcarousel-container').bind('swiperight', function() {
			$('.similar .jcarousel-container .jcarousel-prev').trigger('click');
		});
	}
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	if ( $('.gallery-b').length > 0 ) {
		if ( $('.gallery-b div img').length > 1 ) {
			$('.gallery-b div').append('<span class="prev"></span>');
			$('.gallery-b div').append('<span class="next"></span>');
		}
	}
	$('[data-preview]').bind('click', function(e) {
		e.preventDefault();
		var t = $(this).attr('data-preview');
		$('[data-big="'+t+'"]').show().siblings().hide();
	}).filter(':first').click();
	$('.gallery-b .next').bind('click', function(e) {
		e.preventDefault();
		var c = eval($('[data-big]:visible').attr('data-big'));
		if ( c < $('[data-big]').size() ) {
			var n = c+1;
		} else {
			var n = 1;
		}
		$('[data-big="'+n+'"]').show().siblings().hide();
		$('.gallery-nav > div').slick('slickNext');
	});
	$('.gallery-b .prev').bind('click', function(e) {
		e.preventDefault();
		var c = eval($('[data-big]:visible').attr('data-big'));
		if ( c > 1 ) {
			var p = c-1;
		} else {
			var p = $('[data-big]').size();
		}
		$('[data-big="'+p+'"]').show().siblings().hide();
		$('.gallery-nav > div').slick('slickPrev');
	});
	$('.gallery-nav .item').each(function() {
		$(this).css({
			'background': 'url("'+$(this).children('img').attr('src')+'") no-repeat center center',
			'background-size': 'cover'
		});
	});
	$('.gallery-nav > div').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		centerMode: true,
		focusOnSelect: true
	});
	$('.gallery-nav > div').on('afterChange', function() {
		$('.gallery-nav .slick-current').trigger('click');
	});
	$('[data="more"]').bind('click', function(e) {
		e.preventDefault();
		$('.desc-more').show();
		$(this).hide();
	});
	$('[data="all"]').bind('click', function(e) {
		e.preventDefault();
		$(this).parent().siblings('.hidden').removeClass();
		$(this).hide();
	});
	$('.modal').append('<span class="close"></span>');
	$('[data-target]').bind('click', function(e) {
		e.preventDefault();
		$('.modal').hide();
		var target = $('.modal[data-modal="'+$(this).attr('data-target')+'"]');
		target.css({
			'top': $(document).scrollTop()+($(window).height()/2)-(target.outerHeight()/2)+'px'
		}).stop(true,true).fadeIn(250);
		$('.fade').stop(true,true).fadeIn(250);
		return false;
	});
	$('.modal .close, .fade').bind('click', function(e) {
		e.preventDefault();
		$('.modal, .fade').stop(true,true).fadeOut(250);
		return false;
	});
});
$(window).load(function() {
	$('nav ul li a span').each(function() {
		if ( $(this).height() > 20 ) {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2+'px'
			});
		}
	});
	$('nav ul').css({
		'opacity': '1'
	});
});