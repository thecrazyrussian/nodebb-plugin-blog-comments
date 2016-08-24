$('document').ready(function() {
	if (window.opener && window.location.hash === "#blog/authenticate") {
		$('#header-menu, .forum-header').hide();
		$('body').css('paddingTop', '25px');

	/*	window.onbeforeunload = function () {
			window.close();
		} */
	}
	if (window.opener && (window.location.hash === "#_=_" || window.location.hash === "")) {
		 window.onbeforeunload = function () {
                        window.close();
                }
	}
});
