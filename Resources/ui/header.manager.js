//------------------
// HEADER
//------------------
exports.makeHeader = function(window) {
	
	//-- Header 
	var header = Ti.UI.createView({width:'100%',height:64,top:0,zIndex:1,backgroundColor:"#999999"});
	window.content.add(header);
	window.header = header;
	
	return header;
	
};