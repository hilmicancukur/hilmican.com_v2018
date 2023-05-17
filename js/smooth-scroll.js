$(function () {
	$('a[href*=\\#]').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 53}, 1000);
		return false;
	});
});