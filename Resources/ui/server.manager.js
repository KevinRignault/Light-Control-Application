//------------------
// SERVER FUNCTIONS
//------------------


/*
 * lightManager
 * Permet d'envoyer une requête afin de contrôler les leds du raspberry
 * 
 * url {String} : URL à appeler
 * callback {Function} : Callback de succes
 * callbackError {Function} : Callback d'erreur
 * 
 */
function lightManager(url,callback,callbackError) {
	var xhr = Titanium.Network.createHTTPClient();
	
	Ti.API.info(url);
	
    xhr.onload = function(e) { 
    	var response = this.responseText;
		callback();
    	response = null;
    };
    xhr.onerror = function(e) {
    	callbackError(e);
	};
	
	xhr.open('GET', url);
	xhr.send();	
};