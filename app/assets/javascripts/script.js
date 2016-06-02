 $(document).ready(function(){ 
  
    var imageFound = false;

       var showImage = function(x){       

                   $('#picturecontainer').append("<div class='target'><img id='imageshow' class='target' src='assets/"+x+".jpg' width=300 height=300></img></div><br><br>");
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

  $('#target').tooltip({
      items: 'img.target',
      content: 'SHOW UP!!',
      show: null, // show immediately
      open: function(event, ui)
      {
          if (typeof(event.originalEvent) === 'undefined')
          {
              return false;
          }
          
          var $id = $(ui.tooltip).attr('id');
          
          // close any lingering tooltips
          $('div.ui-tooltip').not('#' + $id).remove();
          
          // ajax function to pull in data and add it to the tooltip goes here
      },
      close: function(event, ui)
      {
          ui.tooltip.hover(function()
          {
              $(this).stop(true).fadeTo(400, 1); 
          },
          function()
          {
              $(this).fadeOut('400', function()
              {
                  $(this).remove();
              });
          });
      }
  });




});