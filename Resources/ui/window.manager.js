//------------------
// MAKE WINDOW
//------------------

/*
 * makeWindow
 * Construction de la fenêtre
 * 
 * title {String} : Titre la fenêtre
 * 
 */
function makeWindow(title) {
	
	//-- Main window
	var mainWin = Ti.UI.createWindow({
		width:pWidth,
		height:pHeight,
		title:title,
		fullsreen:true,
		tabBarHidden:true, // tabgroup
		navBarHidden:true, // title
		backgroundColor:"#FFFFFF",
		orientationModes: [
	        Ti.UI.PORTRAIT,
	        Ti.UI.UPSIDE_PORTRAIT
	    ],
	    zIndex:10
	});
	
	//-- Main content
	var mainContent = Ti.UI.createScrollView({width:'100%',height:'100%',backgroundColor:'#FFFFFF',zIndex:2,axis:0});
	mainWin.add(mainContent);
	mainWin.content = mainContent;
	
	return mainWin;
}