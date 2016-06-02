 $(document).ready(function(){ 
  
    var imageFound = false;

       var showImage = function(x){       

                   $('#picturecontainer').append("<img id='imageshow' src='assets/"+x+".jpg' width=300 height=300></img><br><br>");
               }

       
       var tags=["newyorkliberty","icecreamnyc"]
     
       $("#searchbutton").click(function() {
           $('#picturecontainer').empty();

           findBy($("#search").val());
        });


      function findBy(keyword){

       //alert(keyword);
         
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