$(document).ready(function(){
	$.getJSON(
        'https://api.instagram.com/v1/users/25025320/media/recent/?access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?',
        function(data) {
        		var parsed = data
        		console.log(parsed);
        		var image = parsed.data[0].images.standard_resolution.url;
            console.log(image);

            make(image);
        }
    );

	var make = function(x){
		console.log('hiihashdfasdf');
		$('body').append("<img id='image' src='"+x+"'></img>")
	}

});