//------------------
// APP FUNCTIONS
//------------------

/*
 * makeLedButton
 * Construit un bouton type LED
 * 
 * action {String} : On / Off
 * led {Int} : ID de la led
 * color {String} : Couleur du bouton
 */
function makeLedButton(action,led,color,active){
	var button = Ti.UI.createView({
		touchId:"light",
		touchAction:action,
		dataLed:led,
		width:120,
		height:120,
		left:10,
		right:10,
		top:10,
		bottom:10,
		backgroundColor: active ? color : 'transparent',
		backgroundActive:color,
		backgroundDeactive:'transparent',
		borderWidth:1,
		borderColor:'white'
	});
	
	var buttonLabel = Ti.UI.createLabel({
		text:action.toUpperCase(),
		color:'white',
		touchEnabled:false
	});
	
	button.add(buttonLabel);
	
	return button;
}
