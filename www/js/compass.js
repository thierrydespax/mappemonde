var app = (function () {
	var img = document.createElement("img");
	img.src = "./img/rdv.png";
	
	document.body.appendChild(img);

	
	function displayHeading(e) {
		
//		return false;
	};
	
	return {
			initialize: function() {
			document.addEventListener(
					'deviceready', 
					this.onDeviceReady, 
					false);
			},
		
	    	onDeviceReady: function () {
	    		
//		    	window.ondeviceorientation = function(e) {
//		    		img.style.transform ="rotate("+e.alpha + "deg)";
//				}
	    		navigator.compass.watchHeading(
	    			function (e) {
	    				img.style.transform ="rotate(-"+ e.magneticHeading + "deg)";
	    				var divHead = document.getElementById("head");
//	    				divHead.innerHTML = window.parseInt(e.magneticHeading *100)/100 + " degrés";
	    				var angle = window.parseInt(e.magneticHeading *100)/100;
	    				switch (angle) {
	    				case (315<angle && angle<359 && 0<angle && angle<44) && angle:
	    					divHead.innerHTML = angle +" N";
	    				  break;
	    				case (45<angle && angle<134) && angle:
	    					divHead.innerHTML = angle +" E";
	    				  break;
	    				case (135<angle && angle<224) && angle:
	    					divHead.innerHTML = angle +" S";
	    				  break;
	    				case (225<angle && angle<314) && angle:
	    					divHead.innerHTML = angle +" O";
	    				  break;
	    				//default:
	    				//  // Instructions à exécuter lorsqu'aucune des valeurs
	    				//  // ne correspond 
	    				//  instructions_def;
	    				//  break;
	    				}
	    				
					},
		    		function (e) {
						alert("error");
					},
					{frequency: 100}
		    	);
	    	}
		};
}) (); 

//var angle = window.parseInt(e.magneticHeading *100)/100;
//switch (angle) {
//case 315<angle && angle<359 && 0<angle && angle<44:
//	divHead.innerHTML = angle +" N";
//  break;
//case 45<angle && angle<134:
//	divHead.innerHTML = angle +" E";
//  break;
//case 135<angle && angle<224:
//	divHead.innerHTML = angle +" S";
//  break;
//case 225<angle && angle<314:
//	divHead.innerHTML = angle +" O";
//  break;
////default:
////  // Instructions à exécuter lorsqu'aucune des valeurs
////  // ne correspond 
////  instructions_def;
////  break;
//}

// http://maps.googleapis.com/maps/api/js
// AIzaSyBKDEPEq3VpC5zM7wx2xZoAMl7_PhVsQUE