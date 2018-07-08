$(document).ready(function(){

	$(".menu-icon").click(function(){
		$(".nav-list").toggleClass("selected");
	});

	$(".nav-list").click(function(){
		$(this).toggleClass("selected");
	});

	$(document).on('click', '.nav', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
	});


	//$(".day-name").addClass("hidden1");
	$(".day-name").addClass("hidden1");
	$(".day-name").click(function(){
		$(this).toggleClass("hidden");
		$(this).toggleClass("hidden1");
		$(this).next().next().toggleClass("show");
		$(this).next().toggleClass("hide");
	});

});