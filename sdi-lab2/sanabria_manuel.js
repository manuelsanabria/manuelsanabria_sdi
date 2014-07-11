//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Lab 2: Inputs and Outputs

// Variables

var myNameIs = "Manuel Sanabria";
var myStreetAddress = "12433 Blacksmith Drive";
var myFriendsNameIs = "Grace Zotting";
var myFriendLives = "Winter Park Villas";
var myFavoriteSport = "Lacrosse";
var myTimeToGetHere =  3;
var myFriendsNameIsGrace = true;

// Outputs 
console.log("My name is " + myNameIs + ".");
console.log("I live at " + myStreetAddress + ".");
console.log("My best friend is " + myFriendsNameIs + "." );
console.log("She lives at " + myFriendLives + ".");
console.log("We talked about sports like "+ myFavoriteSport + ".");
console.log("It's hard to visit my friend because i live " + myTimeToGetHere + " hours from here by bus.");

// confirm
myFriendsNameIs = confirm("Is my friends name Grace?");
myFavoriteSport = prompt("What is your favorite sport?", "Lacrosse");
myTimeToGetHere = parseFloat(myTimeToGetHere);
