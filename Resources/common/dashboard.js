//------------------
// DASHBOARD
//------------------
exports.dashboardWin = function() {
	
	//------------------
	// WINDOW
	//------------------
	var mainWin = makeWindow('Dashboard', false);
	
	//-- CONTENT BLOCK
	var blockContent = Ti.UI.createView({width:280,height:Ti.UI.SIZE,layout:'horizontal'});
	mainWin.content.add(blockContent);
	
	//-- RED BLOCK
	var redBlockOn = makeLedButton("on",0,"#cc0000",false);
	blockContent.add(redBlockOn);
	
	var redBlockOff = makeLedButton("off",0,"#cc0000",true);
	blockContent.add(redBlockOff);
	
	//-- GREEN BLOCK
	var greenBlockOn = makeLedButton("on",1,"#00cc00",false);
	blockContent.add(greenBlockOn);
	
	var greenBlockOff = makeLedButton("off",1,"#00cc00",true);
	blockContent.add(greenBlockOff);
	
	//-- CLICK ACTION
	blockContent.addEventListener('click', function(e){
		if(e.source.touchId == "light"){
			lightAction(e);
		}
	});
	
	//-- SETTINGS
	var settingsContent = Ti.UI.createView({width:60,height:60,bottom:20,right:20});
	var settingsButton = Ti.UI.createImageView({image:"/images/config.png"});
	settingsContent.add(settingsButton);
	mainWin.content.add(settingsContent);
	
	//-- CLICK SETTINGS
	settingsContent.addEventListener('click', function(){
		tabGroup.setActiveTab(1);
	});
	
	//------------------
	// FUNCTIONS
	//------------------
	
	/*
	 * lightAction
	 * Appel de la requête
	 *  
	 * btn {Obj} : Bouton qui vient d'être cliqué
	 * 
	 */
	function lightAction(btn){
		var thisBtn = btn.source;
		var thisAction = btn.source.touchAction;
		var thisLed = btn.source.dataLed;
			
		var thisURL = SERVER_URL+"/"+thisAction+"/"+thisLed;
		
		lightManager(thisURL, 
		//-- Success
		function(){
			deactiveButton(thisLed);
			activeButton(thisBtn);
		},
		//-- Error
		function(){
			alert("Une erreur s'est produite.");
		});
	}
	
	/*
	 * deactiveButton
	 * Désactive les boutons correspondant à la led
	 * 
	 * led {Int} : ID de la led
	 *  
	 */
	function deactiveButton(led){
		var nbBtn = blockContent.children.length;
		
		for(var i=0; i<nbBtn; i++){
			var thisBtn = blockContent.children[i];
			if(thisBtn.dataLed == led) thisBtn.backgroundColor = thisBtn.backgroundDeactive;
		}
	}
	
	/*
	 * activeButton
	 * Active le bouton
	 * 
	 * btn {Object} : Bouton à activer
	 * 
	 */
	function activeButton(btn){
		btn.backgroundColor = btn.backgroundActive;
	}
	
	return mainWin;

};