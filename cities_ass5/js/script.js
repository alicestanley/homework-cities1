
console.log('chicken');

//WHEN user clicks update change background to image relevant to the content the user input


function updateToCity(){
	event.preventDefault();
	// console.log('chicken2');
	//assign the variable for the user input as city
	var city;
	 
	city = $('#city-type').val();

	//change the casing so that it always matches
	city = city.toLowerCase().trim();
	

	//make sure the city is being picked up correctly
	console.log(city);

	//match the user input to an image name

	if(city == 'new york' || city == 'new york city' || city == 'nyc'){
		$('body').attr('class','nyc');
	} else if(city == 'san francisco' || city == 'sf' || city == 'bay area'){
		$('body').attr('class','sf'); 
	} else if(city == 'los angeles' || city == 'la' || city == 'lax' ){
		$('body').attr('class','la'); 
	} else if(city == 'austin' || city == 'atx'){
		$('body').attr('class','austin'); 
	} else if(city == 'sydney' || city == 'syd'){
		$('body').attr('class','sydney');
	} 
 
}

//make sure the javascript loads after the html
$(document).ready(function(){
	//call the updateToCity function with the submit button is pressed
	$('#submit-btn').click(updateToCity);
});



