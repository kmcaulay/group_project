$(document).ready(function(){

    var imageFound = false;

    function searchByLocation(keyword) {

        var lat= 40.6234400;
        var lng= -74.1575500;

            // This uri allows us to search by media, within a specified location.

        var uri = 'https://api.instagram.com/v1/media/search?lat='+lat+'&lng='+lng+'&access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?'

        $.getJSON(uri, function(data) {
                    var parsed = data
                    console.log(parsed);
                    x = parsed.data.length

            // This allows us to loop through and display the max number of pics for a tag. With IG, max = 20.
            
            for(i=0; i<x; i++){

                // imageFound = false;
                max = parsed.data[i].tags.length;
                    for(j=0; j<max; j++){
                        if(parsed.data[i].tags[j] == keyword){
                            // alert(parsed.data[i].tags[j]);
                var image = parsed.data[i].images.thumbnail.url;
                            make(image);
                    imageFound = true;     
                        } else {

                        }
                }
                       
                }
                    console.log(image);
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

            var make = function(x){       
                $('#picturecontainer').append("<img id='imageshow' src='"+x+"'></img>");
            }

    function findBy(tag) {
              var res=encodeURIComponent(tag);
               var uri = 'https://api.instagram.com/v1/tags/'+res+'/media/recent?access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?&count=10'
               
            $.getJSON(uri, function(data) {
                        var parsed = data
                        console.log(parsed);
                        a = parsed.data.length;

                        for(k=0; k<a; k++){
                        var image = parsed.data[k].images.standard_resolution.url;
                            console.log(image);

                            make(image);
                        }
                }
            );

        }

});
