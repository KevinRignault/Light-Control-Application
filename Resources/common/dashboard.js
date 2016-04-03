//------------------
// DASHBOARD
//------------------
exports.dashboardWin = function() {
	
	//------------------
	// WINDOW
	//------------------
	var mainWin = makeWindow('Dashboard', false);
	
	//-- CONTENT BLOCK
	var blockContent = Ti.UI.createView({top:0,bottom:0,left:0,right:0});
	mainWin.content.add(blockContent);	
	
	//-- RED BLOCK
	var redBlockOn = Ti.UI.createView({touchId:"light",touchAction:"on",dataLed:0,top:0,left:0,width:'50%',height:'50%',backgroundColor:'#CCC',backgroundActive:'red',backgroundDeactive:'#CCC'});
	var redBlockOnLabel = Ti.UI.createLabel({text:"ON",color:'black',touchEnabled:false});
	redBlockOn.add(redBlockOnLabel);
	blockContent.add(redBlockOn);
	
	var redBlockOff = Ti.UI.createView({touchId:"light",touchAction:"off",dataLed:0,top:0,right:0,width:'50%',height:'50%',backgroundColor:'red',backgroundActive:'red',backgroundDeactive:'#CCC'});
	var redBlockOffLabel = Ti.UI.createLabel({text:"OFF",color:'black',touchEnabled:false});
	redBlockOff.add(redBlockOffLabel);
	blockContent.add(redBlockOff);
	
	//-- GREEN BLOCK
	var greenBlockOn = Ti.UI.createView({touchId:"light",touchAction:"on",dataLed:1,top:'50%',left:0,width:'50%',height:'50%',backgroundColor:'#CCC',backgroundActive:'green',backgroundDeactive:'#CCC'});
	var greenBlockOnLabel = Ti.UI.createLabel({text:"ON",color:'black',touchEnabled:false});
	greenBlockOn.add(greenBlockOnLabel);
	blockContent.add(greenBlockOn);
	
	var greenBlockOff = Ti.UI.createView({touchId:"light",touchAction:"off",dataLed:1,top:'50%',right:0,width:'50%',height:'50%',backgroundColor:'green',backgroundActive:'green',backgroundDeactive:'#CCC'});
	var greenBlockOffLabel = Ti.UI.createLabel({text:"OFF",color:'black',touchEnabled:false});
	greenBlockOff.add(greenBlockOffLabel);
	blockContent.add(greenBlockOff);
	
	//-- CLICK ACTION
	blockContent.addEventListener('click', function(e){
		if(e.source.touchId == "light"){
			lightAction(e);
		}
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