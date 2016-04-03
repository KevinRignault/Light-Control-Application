//------------------
// INCLUDE
//------------------

//-- Make Window
Ti.include('/ui/window.manager.js');

//-- Server Functions
Ti.include('/ui/server.manager.js');

//-- Make Header
var makeHeader = require('ui/header.manager').makeHeader;

//-- Navigation Controller
var NavigationController = require('ui/navigation.manager').NavigationController;
var navController = new NavigationController();

//------------------
// GLOBAL VAR
//------------------

//-- Width/Height Platform
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

//-- SERVER URL
var SERVER_URL = "http://192.168.1.45:3000";

//-- Create tab group
var tabGroup = Ti.UI.createTabGroup();
var dashboardWin = require('common/dashboard').dashboardWin();
var dashboardTab = Ti.UI.createTab({icon:'KS_nav_views.png',title:'Dashboard',window:dashboardWin});
var settingsWin = require('common/settings').settingsWin();
var settingsTab = Ti.UI.createTab({icon:'KS_nav_ui.png',title:'Settings',window:settingsWin});

tabGroup.addTab(dashboardTab);
tabGroup.addTab(settingsTab);
tabGroup.setActiveTab(0);
tabGroup.open();