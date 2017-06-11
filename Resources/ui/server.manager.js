//------------------
// SERVER FUNCTIONS
//------------------

exports.ServerRequest = function() {

};

/*
 * lightManager
 * Permet d'envoyer une requête afin de contrôler les leds du raspberry
 * 
 * url {String} : URL à appeler
 * callback {Function} : Callback de succes
 * callbackError {Function} : Callback d'erreur
 * 
 */
exports.ServerRequest.prototype.lightManager = function(url,callback,callbackError) {
	var xhr = Titanium.Network.createHTTPClient({
		onload : function(e) { 
	    	var response = this.responseText;
			callback();
	    	response = null;
	   	},
	   	onerror : function(e) {
	    	callbackError(e);
		},
		timeout : 3500
	});
	
	xhr.open('GET', url);
	xhr.send();
};