$(function () {
	$(window).scroll(function () {

		if ($(this).scrollTop() > 58) {
			$("header").addClass("fixed");
		} else {
			$("header").removeClass("fixed");
		}
		if ($(window).width() > 992) {
			if ($(this).scrollTop() > 58) {
				$("header").addClass("fixed");
			} else if ($(this).scrollTop() <= 58) {
				$("header").removeClass("fixed");
			}
		}
	});
	$(".hamburger").click(function () {
		$("header").addClass("open");
	});
	$(".close-nav").click(function () {
		$("header").removeClass("open");
	});
	$(".owl-gallery").owlCarousel({
        items: 3,
        margin: 30,
		dots: false,
		nav: false,
		loop: true,
		autoplay: true,
		navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
		responsive : {
			0 : {
				items: 1,
			},
			768 : {
				items: 2,
			},
			992 : {
				items: 4,
			}

		}
	});
	
	
	$("#ajaxForm").submit(function(e){
		e.preventDefault();
		var action = $(this).attr("action");
		$.ajax({
			type: "POST",
			url: action,
			crossDomain: true,
			data: new FormData(this),
			dataType: "json",
			contentType: "multipart/form-data",
			processData: false,
			contentType: false,
			headers: {
				"Accept": "application/json"
			}
		}).done(function() {
			$('.success').addClass('is-active');
		}).fail(function() {
			alert('An error occurred please try again later.')
		});
	});

});