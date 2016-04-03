//------------------
// NAVIGATION CONTROLLER
//------------------
exports.NavigationController = function() {
    this.windowStack = [];
    this.theCurrentWindow = null;
    this.navGroup = false;
    this.platformName = Ti.Platform.osname;
};

//-- OPEN WINDOW
exports.NavigationController.prototype.open = function(windowToOpen,animated) {
	Ti.App.currentChannelsTypeView = false;
    Ti.App.currentPage = windowToOpen.title;
     
    if(typeof(animated)==='undefined'){ animated = true;}
  
    var windows = this.windowStack.concat([]);
  
    if(windows.length === 0 && this.theCurrentWindow != null) {
        this.windowStack.push(this.theCurrentWindow);
    }
  
    //-- Add the window to the stack of windows managed by the controller
    this.windowStack.push(windowToOpen);
    this.theCurrentWindow = windowToOpen;
  
    var windows = this.windowStack.concat([]);
  
    //-- Grab a copy of the current nav controller for use in the callback
    var that = this;
    windowToOpen.addEventListener('close', function() {
        that.windowStack.pop();
    });
  
    //-- Hack - setting this property ensures the window is "heavyweight" (associated with an Android activity)
    windowToOpen.navBarHidden = windowToOpen.navBarHidden || false;
  
    //-- This is the first window
    if(this.windowStack.length === 1){
  		
  		//-- Open window
        if(this.platformName === 'android') {
            windowToOpen.exitOnClose = true;
            windowToOpen.open();
        } else {
            this.navGroup = Titanium.UI.iOS.createNavigationWindow({
                window : windowToOpen
            });
            this.navGroup.open();
        }
        
    }
    //-- All subsequent windows
    else {
    	
    	//-- Open window
        if(this.platformName === 'android') {
            windowToOpen.open();
        } else {
            this.navGroup.openWindow(windowToOpen,{animated:animated});
        }
        
    }
};
  
//-- GO BACK TO LOGIN PAGE
exports.NavigationController.prototype.login = function(animated) {
	if(typeof(animated)==='undefined') { animated = true;}
	
    //-- Store a copy of all the current windows on the stack
    var windows = this.windowStack.concat([]);
  
  	//-- Close all windows
    for(var i = 1, l = windows.length; i < l; i++) {
        if(this.platformName == 'android') {
            windows[i].close();
        }else{
            this.navGroup.closeWindow(this.windowStack[i]);
        }
    }
    this.theCurrentWindow = this.windowStack[1];
};
  
//-- GO BACK TO HOME PAGE
exports.NavigationController.prototype.dashboard = function(animated) {
    if(typeof(animated)==='undefined') { animated = true;}
    
    //-- Store a copy of all the current windows on the stack
    var windows = this.windowStack.concat([]);
     
    //-- Close all windows
    for(var i = 2, l = windows.length; i < l; i++) {
        if(this.platformName == 'android') {
            windows[i].close();
        }else{
            this.navGroup.closeWindow(this.windowStack[i]);
        }
    }
    this.theCurrentWindow = this.windowStack[1];
};
  
//-- GO BACK - CLOSE WINDOW
exports.NavigationController.prototype.back = function(windowToClose){
    //-- Close window
    if(Ti.Platform.osname === 'android') {
        windowToClose.close();
    }else{
        var win = Ti.UI.currentWindow;
        this.navGroup.closeWindow(this.windowStack[this.windowStack.length-1]);
    }
};
