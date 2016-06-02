$(document).ready(function(){


    function searchBy(keyword) {
 

          var res=encodeURIComponent(keyword);
           // var uri = 'https://api.instagram.com/v1/tags/'+res+'/media/recent?access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?&count=10'
            
    

        $.getJSON(uri, function(data) {
                    var parsed = data
                    console.log(parsed);
                    var image = parsed.data[0].images.standard_resolution.url;
                    console.log(image);

                make(image);
            }
        );

        var make = function(x){
            // will attach the image to element that the pictures should show on before it atttached to the body  
            $('.newsfeed').append("<img id='image' src='"+x+"'></img>")
        }

    }
    $(".newsfeed").hide();
    $("#searchbutton").click(function() {
        searchBy($("#search").val());
        $(".newsfeed").show();
    });

   
        // how to get this to show up on the new div

        //  $("#searchbutton").click(function() {
        // searchBy($("#search").val());



// wants this to lead to newsfeed 
        // $("#searchbutton").click(function(){

            // submit is a input class
                // $(".newsfeed").show();
                // newsfeed is a class that will show a new page that includes the newsfeed
            // });
            
            // $(".img2"). on('click',function(){
            //     img2 we maynot need anymore but when you click on the image maps will show 
            // $(".newsfeed").hide();
            //  });


            // $(".img1").click(function(){
            //     $(".map").show();
            //  });


  
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
