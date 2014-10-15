$('.sticky a.hamburger').click(function (e) {
	e.preventDefault();
	$('.sticky nav').toggle();
});

$('.sticky nav > a').click(function (e) {
	$('.sticky nav').toggle();
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 539) {
        $('.sticky').addClass('active');
    } else {
        $('.sticky').removeClass('active');
    }
});

$('nav').onePageNav({
    currentClass: 'selected',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
    }
});