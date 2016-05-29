$(document).ready(function(){

    function searchBy(keyword) {

        var lat= 35.4634200;
        var lng= -97.5151200;

        var uri = 'https://api.instagram.com/v1/media/search?lat='+lat+'&lng='+lng+'&access_token=3273809834.1677ed0.f58f670503ba42e28b80825f4b5dd3c6&callback=?'

        $.getJSON(uri, function(data) {
                    var parsed = data
                    console.log(parsed);
                    x = parsed.data.length

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

