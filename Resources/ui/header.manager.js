//------------------
// HEADER
//------------------
exports.makeHeader = function(window) {
	
	//-- Header 
	var header = Ti.UI.createView({width:'100%',height:64,top:0,zIndex:1,backgroundColor:"#2A2A2A"});
	window.content.add(header);
	window.header = header;
	
	var title = Ti.UI.createLabel({text:"LIGHT CONTROL",color:"white",bottom:8,font:{fontFamily:bebasNeue,fontSize:24}});
	header.add(title);
	
	return header;
	
};