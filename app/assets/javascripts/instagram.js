$(document).ready(function(){

    var imageFound = false;
    var showImage = function(x){       
                $('#picturecontainer').append("<img id='imageshow' src='"+x+"'></img>");
            }


    function searchByLocation(keyword) {

        var lat= 40.708129980554766;
        var lng= -74.006392967216;
        // var lat= givenLat;
        // var lng= givenLng;

            // This uri allows us to search by media, within a specified location.
            // https://www.instagram.com/developer/endpoints/media/

        var uri = 'https://api.instagram.com/v1/media/search?lat='+lat+'&lng='+lng+'&access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?'

            // Use of jQuery here to parse through the Object
        $.getJSON(uri, function(data) {
                    var parsed = data
                    console.log(parsed);

            // This tells us how long the data array is
                    x = parsed.data.length

           // As we go through the different Objets
            for(i=0; i<x; i++){

                // imageFound = false;
             // We're setting the length of the number of tags within that object as max
                max = parsed.data[i].tags.length;
            // As we lop through, we're cross checking the tags against our given keyword
                    for(j=0; j<max; j++){
            // If the keyword matches a tag from the object
                        if(parsed.data[i].tags[j] == keyword){
                            // alert(parsed.data[i].tags[j]);
            // We set it as image, and then show the image.
                var image = parsed.data[i].images.thumbnail.url;
                            showImage(image);
            // If keyword matches the tag, the imageFound var is set to true
                    imageFound = true;     
                        } else {

                        }
                }
                       
                }
                    console.log(image);
            // If the above isn't met, meaning no keyword and tag match, then we run function findBy(keyword)
                    if(imageFound == false){
                        findBy(keyword);
                    }

            }
        );

    }
    $("#searchbutton").click(function() {
                 $('#picturecontainer').empty();
        searchByLocation($("#search").val(),false);

     });

            
    function findBy(keyword) {
              // This uri allows us to search by keyword without location.
               var uri = 'https://api.instagram.com/v1/tags/'+keyword+'/media/recent?access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?&count=20'
               
            $.getJSON(uri, function(data) {
                        var parsed = data
                        console.log(parsed);
                        a = parsed.data.length;

                        for(k=0; k<a; k++){
                        var image = parsed.data[k].images.standard_resolution.url;
                            console.log(image);

                            showImage(image);
                        }
                }
            );

        }

});
