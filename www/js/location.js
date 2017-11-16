var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
      window.addEventListener('load', this.onDeviceReady, false);
    },
     
    onDeviceReady: function() {
        
        var id;

        function hello() {
            
          id=window.setTimeout(hello, 2000);
          window.navigator.geolocation.getCurrentPosition(
                function(e){
                   alert ("Lat"+ e.coords.latitude);
                   alert ("Long"+ e.coords.longitude);     
                   alert ("Alt"+ e.coords.altitude);      
    
                },
                function(e) {
                   alert("Erreur" + e.toString());     
                } 
            );   

            }
            hello();
        }

    }


        // var opt = (enableHighAccuracy: true);
        // window.navigator.geolocation.watchPosition(
        //     function(e){
        //        alert ("Lat"+ e.coords.latitude);
        //        alert ("Long"+ e.coords.longitude);     
        //        alert ("Alt"+ e.coords.altitude);      

        //     },
        //     function(e) {
        //        alert("Erreur" + e.toString());     
        //     } 
        // );     
        // window.navigator.geolocation.getCurrentPosition(
        //     function(e){
        //        alert ("Lat"+ e.coords.latitude);
        //        alert ("Long"+ e.coords.longitude);     
        //        alert ("Alt"+ e.coords.altitude);      

        //     },
        //     function(e) {
        //        alert("Erreur" + e.toString());     
        //     } 
        // );     
        // }
 
