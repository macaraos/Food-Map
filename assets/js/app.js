
$(document).ready(function(){

$(function(){
	$("#chilena").click(function(){
		$(".photo").hide();
		$(".container2").removeClass('hide');
	})

	$("#española").click(function(){
		$(".photo").hide();
		$(".photo2").hide();
		$(".container3").removeClass('hide');
	})

	$("#italiana").click(function(){
		$(".photo").hide();
		$(".photo2").hide();
		$(".photo3").hide();
		$(".container4").removeClass('hide');
	})

	$("#mexicana").click(function(){
		$(".photo").hide();
		$(".photo2").hide();
		$(".photo3").hide();
		$(".photo4").hide();
		$(".container5").removeClass('hide');
	})

});

$('.contenedor').mouseover(function () {
    $('.sailor-overlay').show();
}).mouseout(function () {
    $('.sailor-overlay').hide();
});

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
}, 4000);



});