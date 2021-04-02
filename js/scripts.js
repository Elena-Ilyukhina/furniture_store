$(function(){
	$('#hide').hide();
	var i = 0;
	$('figure a').click(function(){
		i = i+1;
		$('#basket').html(i);
	});
});