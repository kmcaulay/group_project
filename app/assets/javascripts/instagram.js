$(document).ready(function(){

    var imageFound = false;
    var showImage = function(x){       
                $('#picturecontainer').append("<img id='imageshow' src='<%= asset_path("+x+")%>'></img><br>");
               
            }

  
    $("#searchbutton").click(function() {
        $('#picturecontainer').empty();
        // searchByLocation($("#search").val(),false);
        findBy($("#search").val());
     });

            
    function findBy(keyword) {
              // This uri allows us to search by keyword without location.
               var uri = 'https://api.instagram.com/v1/tags/'+keyword+'/media/recent?access_token=3293728878.1677ed0.4b24d91df6db4f2e88bfaf25ab6c29af&callback=?&count=33&max_tag_id=AQCxFqFlbX7jvEO74uFZdZhF9Qcp6wpdMlZMpfdRSXFBJQAmciTXzh7UvVdEtwQ0z5XtbbgJFSnJD1kVK8Attw96nRHz4FwlwWQgJfxos4Mm8p_miBv9gtz658Q1R-0r9G4'           

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

