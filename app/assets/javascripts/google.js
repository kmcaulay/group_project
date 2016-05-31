// // $(document).ready(function(){
	
	function initMap() {
	  var map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: -34.397, lng: 150.644},
	    zoom: 12
	  });
	  var infoWindow = new google.maps.InfoWindow({map: map});

// get location from user
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
       pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  	}
	}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

// // function to add markers to map for instagram posts
// // var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // var labelIndex = 0;

// // function initialize() {
// //   var bangalore = { lat: 12.97, lng: 77.59 };
// //   var map = new google.maps.Map(document.getElementById('map'), {
// //     zoom: 12,
// //     center: bangalore
// //   });

// //   // This event listener calls addMarker() when the map is clicked.
// //   google.maps.event.addListener(map, 'click', function(event) {
// //     addMarker(event.latLng, map);
// //   });

// //   // Add a marker at the center of the map.
// //   addMarker(bangalore, map);
// // }

// // // Adds a marker to the map.
// // function addMarker(location, map) {
// //   // Add the marker at the clicked location, and add the next-available label
// //   // from the array of alphabetical characters.
// //   var marker = new google.maps.Marker({
// //     position: location,
// //     label: labels[labelIndex++ % labels.length],
// //     map: map
// //   });
// // }

// // google.maps.event.addDomListener(window, 'load', initialize);
// // });