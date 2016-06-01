$(document).ready(function(){

    var imageFound = false;
    var showImage = function(x){       
                $('#picturecontainer').append("<img id='imageshow' src='"+x+"'></img><br>");
            }

  
    $("#searchbutton").click(function() {
        $('#picturecontainer').empty();
        // searchByLocation($("#search").val(),false);
        findBy($("#search").val());
     });

<<<<<<< HEAD
            
    function findBy(keyword) {
              // This uri allows us to search by keyword without location.
               var uri = 'https://api.instagram.com/v1/tags/'+keyword+'/media/recent?access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?&count=33&max_tag_id=AQCxFqFlbX7jvEO74uFZdZhF9Qcp6wpdMlZMpfdRSXFBJQAmciTXzh7UvVdEtwQ0z5XtbbgJFSnJD1kVK8Attw96nRHz4FwlwWQgJfxos4Mm8p_miBv9gtz658Q1R-0r9G4'
               
=======
    function searchByLocation(keyword) {

        var lat= 40.708129980554766;
        var lng= -74.006392967216;
        // var lat= givenLat;
        // var lng= givenLng;

            // This uri allows us to search by media, within a specified location.
            // https://www.instagram.com/developer/endpoints/media/

        var uri = 'https://api.instagram.com/v1/media/search?lat='+lat+'&lng='+lng+'&access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?'

            // Use of jQuery here to parse through the Object
>>>>>>> 4f26b1d289abd932c7598ad4701b827715348ade
        $.getJSON(uri, function(data) {
                var parsed = data
                console.log(parsed);
                a = parsed.data.length;

                for(k=0; k<a; k++){
                    var image = parsed.data[k].images.standard_resolution.url;
                    console.log(image);
                            
                            
                    max = parsed.data[k].tags.length;
                // console.log(max);
            // As we lop through, we're cross checking the tags against our given keyword
                    for(j=0; j<max; j++){
            // If the keyword matches a tag from the object
                        if(parsed.data[k].tags[j].search("nyc") == "newyorkcity"){
                            // alert(parsed.data[i].tags[j]);
            // We set it as image, and then show the image.
                        var image = parsed.data[k].images.standard_resolution.url;
                        console.log(image);
                        showImage(image);
            // If keyword matches the tag, the imageFound var is set to true
                            imageFound = true;     
                        }

                    }        
                         
                            //showImage(image);
                       }
                }
            );

        }

});

