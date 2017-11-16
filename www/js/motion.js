 var app = (function(){

var container= window.document.getElementById("map");
var img=document.createElement("img");
img.src = "./img/icon.png";

function displayXYZ (XYZ) {
    return "<ul>"
          + "<li>" + x + "<li>" 
          + "<li>" + y + "<li>"   
          + "<li>" + z + "<li>"   
          + "</ul>" 

}

return {
    
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
        
    onDeviceReady: function() {
        
        document.body.appendChild(img);
        window.ondeviceorientation= function(e) {
            img.style.transform ="rotate("+ e.alpha + "deg)";
        }

        window.addEventListener('load',this.onDeviceReady,false);
              
        },
        onDeviceReady:function(){
            window.ondeviceorientation = function(e) {
              container.innerHTLM = displayXYZ(e.beta, e.gamma, e.alpha )      

            }
        }
    };
    
    })();    

   
    

 

 
