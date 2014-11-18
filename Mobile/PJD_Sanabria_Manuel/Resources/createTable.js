var loadFile = require("json").jsonData;
exports.createTable = function() {
var playerWindow = Ti.UI.createWindow({
fullscreen : true,
backgroundColor : "#ffffff"
});
playerWindow.add(table);
mainNav.openWindow(playerWindow);
};
var table = Ti.UI.createTableView();
players = [];
for (var i = 0; i < loadFile.length; i++) {
var player = loadFile[i];
var row = Titanium.UI.createTableViewRow();
var view = Titanium.UI.createView({
width : Ti.UI.FILL,
height : 60,
details : player
});
if (i <= (loadFile.length / 3)) {
view.backgroundColor = 'yellow';
} else if (i <= ((loadFile.length / 3) * 2)) {
view.backgroundColor = 'blue';
} else {
view.backgroundColor = 'red';
}
var name = Ti.UI.createLabel({
text : player.firstName + ' ' + player.lastName,
touchEnabled: false
});
console.log(JSON.stringify(player));
row.height = 'auto';
view.add(name);
row.add(view);
players.push(row);
table.setData(players);
}
var soccerTeam = function(player) {
var pWidth = Ti.Platform.displayCaps.platformWidth;
var playerInfo = Ti.UI.createWindow({
fullscreen : true,
backgroundColor : "yellow",
layout : 'vertical',
title: ""
});
var name = Ti.UI.createLabel({
text : player.firstName + " " + player.lastName,
color : "black",
top : 0,
});
var birthPlace = Ti.UI.createLabel({
text : player.birth,
color : "black",
top : 5,
width : pWidth
});
var ages = Ti.UI.createLabel({
text : player.age,
color : "black",
top : 5,
width : pWidth
});
var clubs = Ti.UI.createLabel({
text : player.club,
color : "black",
top : 5,
width : pWidth
});
var positions = Ti.UI.createLabel({
text: player.position,
color:"black",
top: 5,
width: pWidth
});
var image = Ti.UI.createImageView({
image: player.image,
top: 50,
width: 300,
height: 300
});
playerInfo.add(name);
playerInfo.add(image);
playerInfo.add(birthPlace);
playerInfo.add(ages);
playerInfo.add(clubs);
playerInfo.add(positions);
mainNav.openWindow(playerInfo);
};
table.addEventListener("click", function(e) {
console.log(JSON.stringify(e.source));
soccerTeam(e.source.details);
});

