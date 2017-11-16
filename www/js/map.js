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

function getMap(){
return new google.maps.Map (
    container,
    {   
     center: position,
     zoom: 15,
     maxZoom: 20,
     minZoom: 10, 
     maxTypeId: google.maps.MapTypeId.ROALMAP,
     disableDefautUI:true,
     mapTypeControlOptions: {
         mapTypeIds: [
            google.maps.MapTypeId.ROALMAP,
            "style"
          ]
     }   
   }
);

}; 

return {
    initialize: function() {
        window.addEventListener('load', this.onDeviceReady, false);
    },
    
        
    onDeviceReady: function() {
                
        window.navigator.geolocation.getCurrentPosition(
                function(e){
                setPosition(e.coords.latitude,e.coords.longitude);
                map = getMap();
                marker = getMarker("HERE");
                map.panTo(position);
                marker.setPosition(position);   
               
                },
                function(e) {
                     alert("Erreur" + e.toString());     
                } 
            );   

        }
        
    };
    
    })();    

   
    

 

 
