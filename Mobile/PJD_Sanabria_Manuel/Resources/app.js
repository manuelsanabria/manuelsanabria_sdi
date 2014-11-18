var window1 = Ti.UI.createWindow({
fullscreen : true,
title : "Colombian Players",
backgroundColor : "#ffffff"
});
var charstatWindow = Ti.UI.createWindow({
fullscreen : true,
backgroundColor : "blue",
title : "test"
});
var charstatList = Ti.UI.createTableView({
style : Ti.UI.iPhone.TableViewStyle.GROUPED,
bottom : "100dp"
});
var pWidth = Ti.Platform.displayCaps.platformWidth;
var yellowView = Ti.UI.createView({
backgroundColor : "yellow",
width : pWidth,
height : "150dp",
top : "0dp"
});
var charstatView = Ti.UI.createView({
backgroundColor : "blue",
width : pWidth,
height : "150dp",
top : "150dp"
});
var redView = Ti.UI.createView({
backgroundColor : "red",
width : pWidth,
height : "150dp",
top : "300dp"
});
var charstatViewLabel = Ti.UI.createLabel({
text : "PLAYERS",
color : "BLACK",
font : {
fontSize : "30dp",
fontFamily : "TimesNewRoman",
fontWeight : "Bold"
}
});
var miniLabel = Ti.UI.createLabel({
text : "Manuel Stevan Sanabria 11/11/2014",
font : {
fontSize : "12dp",
fontFamily : "TimesNewRoman",
fontWeight : "Bold"
},
top : "470dp"
});
var mainNav = Ti.UI.iOS.createNavigationWindow({
window : window1
});
charstatView.addEventListener("click", function() {
var createTable = require('createTable').createTable;
createTable();
});
var ffLabel = Ti.UI.createLabel({
color : "white",
text : "",
top : "50dp"
});
var myGallery = function(info) {
var detail = Ti.UI.createWindow({
backgroundColor : "#fff",
fullscreen : true,
title : info.title
});
var rowText = Ti.UI.createLabel({
text : info.desc
});
detail.add(rowText);
mainNav.openWindow(detail);
charstatWindow.open(detail);
};
charstatWindow.add(charstatList);
charstatView.add(charstatViewLabel);
window1.add(yellowView);
window1.add(charstatView);
window1.add(redView);
window1.add(miniLabel);
window1.open();
mainNav.open();