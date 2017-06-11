//------------------
// INCLUDE
//------------------

//-- Make Window
var windowManagerModule = require('ui/window.manager').WindowManager;
WindowManager = new windowManagerModule();

//-- App Functions
var utilsModule = require('ui/functions.manager').Utils;
Utils = new utilsModule();

//-- Server Functions
var serverRequestModule = require('ui/server.manager').ServerRequest;
ServerRequest = new serverRequestModule();

//-- Make Header
var makeHeader = require('ui/header.manager').makeHeader;


//------------------
// FONTS
//------------------

var bebasNeue = 'BebasNeue'; // Bebas Neue


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