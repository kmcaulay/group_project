$(document).ready(function(){
	$.getJSON(
        'https://api.instagram.com/v1/users/25025320/media/recent/?access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?',
        function(data) {
        		var parsed = data
        		console.log(parsed);
        		var image = parsed.data[0].images.standard_resolution.url;
                var image1 = parsed.data[1].images.standard_resolution.url;
                var image2 = parsed.data[2].images.standard_resolution.url;
                var image3 = parsed.data[3].images.standard_resolution.url;
            console.log(image);

            make(image);
            make(image1);
            make(image2);
            make(image3);
        }
    );

	var make = function(x){
		console.log('hiihashdfasdf');
		$('body').append("<img id='image' src='"+x+"'></img>")
	}

});