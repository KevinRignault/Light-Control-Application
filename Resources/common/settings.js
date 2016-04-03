//------------------
// DASHBOARD
//------------------
exports.settingsWin = function() {
	
	//------------------
	// WINDOW
	//------------------
	var mainWin = makeWindow('Settings', false);
	
	//-- IP adress input
	var adresseLabel = Ti.UI.createLabel({left:30,text:"IP Serveur :",color:'white',top:70});
	var adresseInput = Ti.UI.createTextField({top:100,left:30,right:30,height:40,color:"white",borderColor:"white",hintText:"IP Serveur",value:SERVER_URL,borderWidth:1,paddingLeft:20,returnKeyType:Ti.UI.RETURNKEY_DONE});
	mainWin.content.add(adresseLabel);
	mainWin.content.add(adresseInput);
	
	//-- Back button
	var backContent = Ti.UI.createView({width:60,height:60,bottom:20,left:20});
	var backButton = Ti.UI.createImageView({image:"/images/arrow-back.png"});
	backContent.add(backButton);
	mainWin.content.add(backContent);
	
	//-- Save IP address
	backButton.addEventListener('click', function(){
		SERVER_URL = adresseInput.value;
		tabGroup.setActiveTab(0);
	});
	
	return mainWin;
	
};