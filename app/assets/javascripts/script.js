 $(document).ready(function(){ 
  
  var imageFound = false;

  var showImage = function(x){       

    $('#picturecontainer').append("<img class='imageshow' src='assets/"+x+".jpg' width=250 height=250></img>");
    }

       
   var tags=["newyorkliberty","icecreamnyc"]
   $('#transbox').hide();
   $("#searchbutton").click(function() {
       $('#picturecontainer').empty();

       findBy($("#search").val());
       $('#transbox').show();
    });

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