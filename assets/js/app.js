
$(document).ready(function(){

//selector de fotos
	$(function(){
		$("#chilena").click(function(){
			$(".photo").css('display', 'none');
			$(".photo2").css('display', 'block');
			$(".photo3").css('display', 'none');
			$(".photo4").css('display', 'none');
			$(".photo5").css('display', 'none');
		})

		$("#española").click(function(){
			$(".photo").css('display', 'none');
			$(".photo2").css('display', 'none');
			$(".photo3").css('display', 'block');
			$(".photo4").css('display', 'none');
			$(".photo5").css('display', 'none');
		})

		$("#italiana").click(function(){
			$(".photo").css('display', 'none');
			$(".photo2").css('display', 'none');
			$(".photo3").css('display', 'none');
			$(".photo4").css('display', 'block');
			$(".photo5").css('display', 'none');
		})

		$("#mexicana").click(function(){
			$(".photo").css('display', 'none');
			$(".photo2").css('display', 'none');
			$(".photo3").css('display', 'none');
			$(".photo4").css('display', 'none');
			$(".photo5").css('display', 'block');
		})
	});

//Mouseover
	$('.contenedor').mouseover(function () {
		$('.sailor-overlay').show();
	}).mouseout(function () {
		$('.sailor-overlay').hide();
	});

//Funcion de splash
	$.fn.center = function () {
		this.css("position","absolute");
		this.css("top", Math.max(0, (
			($(window).height() - $(this).outerHeight()) / 2) +
		$(window).scrollTop()) + "px"
		);
		this.css("left", Math.max(0, (
			($(window).width() - $(this).outerWidth()) / 2) +
		$(window).scrollLeft()) + "px"
		);
		return this;
	}

	$("#overlay").show();
	$("#overlay-content").show().center();

	setTimeout(function(){
		$("#overlay").fadeOut();
	}, 3000);

});