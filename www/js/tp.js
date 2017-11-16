var google = google|| {};

var app = (function(){

var container = window.document.getElementById("map");
var position = { lat: 0, lng :0} ;
var map;
var marker;

function setPosition (lat, lng){
    position.lat= lat;
    position.lng =lng;
}

function getMarker(title){
    return new google.maps.Marker({
        position: position,
        map: map,
        title: title,
        icon: "./img/icon.png"
    });
}

function initMap(lat, lng) {
      var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat:lat, lng:lng}, 
     });
       
    var elevator = new google.maps.ElevationService;
    var infowindow = new google.maps.InfoWindow({map: map});
     
    // Add a listener for the click event. Display the elevation for the LatLng of
    // the click inside the infowindow.
    map.addListener('click', function(event) {
      displayLocationElevation(event.latLng, elevator, infowindow);
    });
  }
  
  function displayLocationElevation(location, elevator, infowindow) {
    // Initiate the location request
    elevator.getElevationForLocations(
        {'locations': [location]},
        function(results, status) {
      infowindow.setPosition(location);
      if (status === 'OK') {
        // Retrieve the first result
        if (results[0]) {
          // Open the infowindow indicating the elevation at the clicked position.
          infowindow.setContent('The elevation at this point <br>is ' +
              results[0].elevation + ' meters.');
        } else {
          infowindow.setContent('No results found');
        }
      } else {
        infowindow.setContent('Elevation service failed due to: ' + status);
              }
                                }   );
    } 

return {
    initialize: function() {
        window.addEventListener('load', this.onDeviceReady(), false);
    },
            
    onDeviceReady: function() {

       window.navigator.geolocation.getCurrentPosition(
                function(e){
                                 
                marker = getMarker("HERE");
                marker.setPosition(position);     
                initMap(e.coords.latitude,e.coords.longitude);
                marker.setMap(map);
                                        },
                function(e) {
                     alert("Erreur" + e.toString());     
                } 
            );   
    }

};
})();    

   
    

 

 
