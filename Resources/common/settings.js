//------------------
// DASHBOARD
//------------------
exports.settingsWin = function() {
	
	//------------------
	// WINDOW
	//------------------
	var mainWin = makeWindow('Settings', false);
	
	var header = new makeHeader(mainWin);
	
	//-- IP adress input
	var adresseLabel = Ti.UI.createLabel({left:30,text:"IP Serveur :",color:'#2A2A2A',top:100});
	var adresseInput = Ti.UI.createTextField({top:130,left:30,right:30,height:40,color:"#2A2A2A",borderColor:"#E1E1E1",hintText:"IP Serveur",value:SERVER_URL,borderWidth:1,paddingLeft:20,returnKeyType:Ti.UI.RETURNKEY_DONE});
	mainWin.content.add(adresseLabel);
	mainWin.content.add(adresseInput);
	
	//-- SETTINGS
	var settingsButton = Ti.UI.createImageView({image:"/images/material-config-dark.png",bottom:30,right:20});
	mainWin.content.add(settingsButton);
	
	//-- Save IP address
	settingsButton.addEventListener('click', function(){
		SERVER_URL = adresseInput.value;
		tabGroup.setActiveTab(0);
	});
	
	return mainWin;
	
};