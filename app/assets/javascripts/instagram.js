$(document).ready(function(){


    function searchBy(keyword) {

        var lat= 35.4634200;
        var lng= -97.5151200;
            // This uri allows us to search by media, within a specified location.
        var uri = 'https://api.instagram.com/v1/media/search?lat='+lat+'&lng='+lng+'&access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?'

        $.getJSON(uri, function(data) {
                    var parsed = data
                    console.log(parsed);
                    x = parsed.data.length
            // This allows us to loop through and display the max number of pics for a tag. With IG, max = 20.
            for(i=0; i<x; i++){

                max = parsed.data[i].tags.length
                    for(j=0; j<max; j++){
                        if(parsed.data[i].tags[j] == keyword){
                var image = parsed.data[i].images.standard_resolution.url;
                            make(image);
                        } else {

                        }
                }
            }
                console.log(image);

            }
        );

        var make = function(x){
            $('body').append("<img id='image' src='"+x+"'></img>")
        }

    }
    $("#searchbutton").click(function() {
        searchBy($("#search").val());
     });


});


	// $.getJSON(
 //        'https://api.instagram.com/v1/users/25025320/media/recent/?access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?',
 //        function(data) {
 //        		var parsed = data
 //        		console.log(parsed);
 //        		var image = parsed.data[0].images.standard_resolution.url;
 //                var image1 = parsed.data[1].images.standard_resolution.url;
 //                var image2 = parsed.data[2].images.standard_resolution.url;
 //                var image3 = parsed.data[3].images.standard_resolution.url;
 //            console.log(image);

 //            make(image);
 //            make(image1);
 //            make(image2);
 //            make(image3);
 //        }
 //    );

	// var make = function(x){
	// 	console.log('hiihashdfasdf');
	// 	$('body').append("<img id='image' src='"+x+"'></img>")
	// }

// });

