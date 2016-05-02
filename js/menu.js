$(document).ready(function(){
	$('.eye').click(function(e){
		$(this).next().toggle( "slow", function(e) {  });
		$(this).next().next().toggle( "slow", function(e) {  });
		$(this).find('span').toggleClass("glyphicon-eye-close");
	});
});