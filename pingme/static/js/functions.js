$(document).ready(function() {

	/* Check if the user entered a valid url. If the url is not valid, shows error message. If it's valid, shows welcome message.*/
    $('#is-up-form').submit(function() {
		urlVal = $("#txt-web-page").val();
		var url_check = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
		if (!url_check.test(urlVal)) {
			$('#invalid-url').stop();
			$('#invalid-url').css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 4000);
			return false;
		}else{
			$('#invalid-url').stop();
			$('#invalid-url').css({visibility: "hidden"});
		}

		$.ajax({
            url: this.action,
            type: this.method,
            data: $(this).serialize(),
            success: function() {
				/* Show congrats message */
				$("#try-on-message").show();
				$('html, body').animate({
					scrollTop: $("#try-on-message").offset().top
				}, 700);
			}
        });
        return false;
    });

	/* Shows try-on section */
	$("#find-more-button").click(function(event){
		$("#try-on").show();
		$('html, body').animate({
			scrollTop: $("#try-on").offset().top
		}, 900);

	});

	/* Shows paypal sign-in form */
	$("#paypal-button").click(function(event){
		$(this).attr("class", "selected");
		$("#no-paypal-button").attr("class", "no-paypal-button");
		$('#sign-in').slideDown('slow');
		$('#sign-up').hide();
	});

	/* Shows paypal sign-up form */
	$("#no-paypal-button").click(function(event){
		$(this).attr("class", "selected");
		$("#paypal-button").attr("class", "paypal-button");
	    $('#sign-up').slideDown('slow');
		$('#sign-in').hide();
	});

	 $('#sign-in-form').submit(function(e) {
		emailValue = $("#txt-your-email-sign-in").val();
		var email_check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
		if (!email_check.test(emailValue)) {
			$(".error-email").show();
			return false;
		}
		$(".error-email").hide();
		var urlRef = this.action;
		e.preventDefault();
		$.ajax({
			url: this.action,
			type: this.method,
            data: $(this).serialize(),
			success: function(){
				document.location = urlRef;
			}
		});
    });


	/* Click on sign-up button */
	$('#sign-up-form').submit(function() {
		emailValue = $("#txt-your-email-sign-up").val();
		var email_check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
		if (!email_check.test(emailValue)) {
			$(".error-email").show();
			return false;
		}
		$(".error-email").hide();
		var urlRef = this.action;
		e.preventDefault();
		$.ajax({
			url: this.action,
			type: this.method,
            data: $(this).serialize(),
			success: function(){
				document.location = urlRef;
			}
		});
	});

	/* Close sign-in form */
	$("#close-sign-in").click(function(event){
		$('#sign-in').slideUp('slow', function() {
			$("#paypal-button").attr("class", "paypal-button");
		});
	});

	/* Close sign-in form */
	$("#close-sign-up").click(function(event){
		$('#sign-up').slideUp('slow', function() {
			$("#no-paypal-button").attr("class", "paypal-button");
		});
	});

});
