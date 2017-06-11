//------------------
// DASHBOARD
//------------------
exports.dashboardWin = function() {
	
	//------------------
	// WINDOW
	//------------------
	var mainWin = new WindowManager.makeWindow('Dashboard', false);
	
	//-- SCROLLABLE
	var scrollableLight = Ti.UI.createScrollableView({width:pWidth,height:pHeight,showPagingControl:true,pagingControlColor:'transparent',pagingControlHeight:40,overlayEnabled:true,disableBounce:true});
	mainWin.content.add(scrollableLight);
	
	//-- RED SLIDE
	var redSlide = Utils.makeLedSlide(false,0,'rgba(206,53,75,1)','rgba(206,53,75,0.4)');
	scrollableLight.addView(redSlide);
	
	//-- GREEN SLIDE
	var greenSlide = Utils.makeLedSlide(false,1,'rgba(98,168,158,1)','rgba(98,168,158,0.4)');
	scrollableLight.addView(greenSlide);
	
	//-- CLICK EVENT
	scrollableLight.addEventListener('click', function(e){
		if(e.source.touch == "light"){
			lightAction(e);
		}
	});
	
	//-- SETTINGS
	var settingsButton = Ti.UI.createImageView({image:"/images/material-config-dark.png",bottom:30,right:20});
	mainWin.content.add(settingsButton);
	
	//-- CLICK SETTINGS
	settingsButton.addEventListener('click', function(){
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
	function lightAction(slide){
		var thisSlide = slide.source;
		var thisAction = slide.source.active ? "off" : "on";
		var thisLed = slide.source.dataLed;
			
		var thisURL = SERVER_URL+"/"+thisAction+"/"+thisLed;
		
		ServerRequest.lightManager(thisURL, 
		//-- Success
		function(){
			switchSlide(thisSlide);
		},
		//-- Error
		function(){
			alert("Une erreur s'est produite. Vérifiez la connexion avec votre Raspberry.");
		});
	}
	
	/*
	 * switchButton
	 * Active/Désactive le slide
	 * 
	 * slide {Object} : Slide à activer/désactiver
	 * 
	 */
	function switchSlide(slide){
		if(slide.active){
			slide.active = false;
			slide.backgroundColor = slide.backgroundDeactive;
			slide.label.text = slide.label.textDeactive;
		}
		else {
			slide.active = true;
			slide.backgroundColor = slide.backgroundActive;
			slide.label.text = slide.label.textActive;
		}
	}
	
	return mainWin;

};