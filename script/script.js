$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger, .navigation').toggleClass ('active');
		$('body').toggleClass('lock');
	})
})