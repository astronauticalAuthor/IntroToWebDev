var count = 0;
var images = ['activitiesFair.jpg', 'KTP_logo.png', 'old_execs.jpg'];


function startSlider() {
	$('#imageSlider').empty();
	$('#imageSlider').append('<img src="images/' + images[count] + '" class="sliderimage" />');
	count = (count + 1) % 3;

	setTimeout(startSlider, 3000);	
}