$(document).ready(function(){
	$('.eye').click(function(e){
		$(this).next().toggle( "slow", function(e) {  });
		$(this).next().next().toggle( "slow", function(e) {  });
		$(this).find('span').toggleClass("glyphicon-eye-close");
	});
	$(document).on('click', '.pagination form input', function(e){
		e.preventDefault();
		getId = $(this).attr('id');
		$('.page').hide();
		$('#screen_'+getId).show();
		$('.pagination form input').attr("class", "");
		$(this).attr('class', 'active');
		$( "#dialog-2" ).dialog( "close" );
	});
 
	$( "#dialog-2" ).dialog({
		autoOpen: false,
		maxWidth:400,
		maxHeight: 300,
		width: 278,
		height: 278,
		modal: true,
		title: "Menu Selector"
	});

	$( "#clickableAwesomefont" ).click(function() {
		$( "#dialog-2" ).dialog( "open" );
	});

	$( "#save" ).click(function() {
		$(".alert-success").show().delay(2000).fadeOut();
	});	

});
