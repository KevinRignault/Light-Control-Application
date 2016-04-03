//------------------
// DASHBOARD
//------------------
exports.settingsWin = function() {
	
	//------------------
	// WINDOW
	//------------------
	var mainWin = makeWindow('Settings', false);
	
	//-- IP adress input
	var adresseInput = Ti.UI.createTextField({top:30,left:30,right:30,height:40,borderColor:"#999999",hintText:"IP Serveur",value:SERVER_URL,borderWidth:1,paddingLeft:20,returnKeyType:Ti.UI.RETURNKEY_DONE});
	mainWin.content.add(adresseInput);
	
	//-- Save IP address
	adresseInput.addEventListener('return', function(){
		SERVER_URL = adresseInput.value;
	});
	
	return mainWin;
	
};