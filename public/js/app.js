$('.sticky a.hamburger').click(function (e) {
	e.preventDefault();
	$('.sticky nav').toggle();
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 580) {
        $('.sticky').addClass('active');
    } else {
        $('.sticky').removeClass('active');
    }
});