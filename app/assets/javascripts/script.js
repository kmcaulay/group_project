 $(document).ready(function(){ 
  
  var imageFound = false;

    var showImage = function(x){       
      $('#picturecontainer').append("<img class='imageshow tooltip' src='assets/"+x+".jpg' width=300 height=300></img><br><br>");
                
      $('.tooltip').tooltipster({
        content: $("<span><img src='https://gigaom.com/wp-content/uploads/sites/1/2013/06/new-york-2013.png'/></span>")
      });
    }


       
    var tags=["newyorkliberty","icecreamnyc","timsquare","babypizza","donuts","italy","yankees","sub","taxi","Centralpark","bridge","brooklyn","rock"]
       
    $('#transbox').hide();
    $("#searchbutton").click(function() {
      $('#picturecontainer').empty();
      findBy($("#search").val());
      $('#transbox').show();
    });

    $("#search").keyup(function(e){
      if(e.keyCode == 13){
        $('#picturecontainer').empty();
        findBy($("#search").val());
        $('#transbox').show();
      }
    });

    $("#search").keyup(function(e){
      console.log(e.keyCode);
    })


    function findBy(keyword){ 
      var index=0;
                   
      while( index<tags.length ){
        if( keyword.search(tags[index] )> -1){
          showImage(tags[index]);
             // If keyword matches the tag, the imageFound var is set to true
          imageFound = true;     
        }
        index++;
      }        
    }
});