$(document).ready(function(){

	// var map;
	//       function initMap() {
	//         map = new google.maps.Map(document.getElementById('map'), {
	//           center: {lat: 43.761539, lng: -79.411079},
	//           zoom: 14
	//         });
	//       }
	
	// https://developers.google.com/maps/articles/geolocation#DetectingUserLocation

	// var initialLocation;
	// var siberia = new google.maps.LatLng(60, 105);
	// var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
	// var browserSupportFlag =  new Boolean();

	// function initialize() {
	//   var myOptions = {
	//     zoom: 6,
	//     mapTypeId: google.maps.MapTypeId.ROADMAP
	//   };
	//   var map = new google.maps.Map(document.getElementById("map"), myOptions);
	// // Try W3C Geolocation (Preferred)
	//   if(navigator.geolocation) {
	//     browserSupportFlag = true;
	//     navigator.geolocation.getCurrentPosition(function(position) {
	//       initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	//       map.setCenter(initialLocation);
	//     }, function() {
	//       handleNoGeolocation(browserSupportFlag);
	//     });
	//   }
	//   // Browser doesn't support Geolocation
	//   else {
	//     browserSupportFlag = false;
	//     handleNoGeolocation(browserSupportFlag);
	//   }

	//   function handleNoGeolocation(errorFlag) {
	//     if (errorFlag == true) {
	//       alert("Geolocation service failed.");
	//       initialLocation = newyork;
	//     } else {
	//       alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
	//       initialLocation = siberia;
	//     }
	//     map.setCenter(initialLocation);
	//   }
	// }

});