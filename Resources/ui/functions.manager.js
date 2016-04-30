//------------------
// APP FUNCTIONS
//------------------

/*
 * makeLedSlide
 * Construit un slide type LED
 * 
 * active {Bool}
 * led {Int} : ID de la led
 * colorActive {String} : Couleur du slide actif
 * colorDeactive {String} : Couleur du slide non actif
 * 
 */
function makeLedSlide(active,led,colorActive,colorDeactive){
	var slide = Ti.UI.createView({
		touch:"light",
		active:active,
		dataLed:led,
		width:'100%',
		height:'100%',
		backgroundColor:active ? colorActive : colorDeactive,
		backgroundActive:colorActive, 
		backgroundDeactive:colorDeactive
	});
	
	var light = Ti.UI.createImageView({
		top:100,
		image:'/images/light.png',
		touchEnabled:false
	});
	slide.add(light);
	
	slide.light = light;
	
	var label = Ti.UI.createLabel({
		bottom:150,
		text:active ? 'ON' : 'OFF',
		textActive: 'ON',
		textDeactive: 'OFF',
		color:'white',
		width:200,
		textAlign:'center',
		font:{
			fontFamily:bebasNeue,
			fontSize:46
		},
		touchEnabled:false
	});
	slide.add(label);
	
	slide.label = label;
	
	return slide;
}
