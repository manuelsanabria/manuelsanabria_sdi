//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Lab 3

// variables
var myFirstName = "Manuel";
var myLastName = "\"Sanabria\"";
var myAge = 19;

myFirstName = prompt("Enter your first name, please:", "Manuel");

// conditionals

if (myFirstName === "Manuel");
{
	myLastName = prompt("Enter your last name, " + myFirstName + ".");
	if (myLastName === "Sanabria") {
		console.log ("Welcome back, " + myFirstName + " " + myLastName + " would you like to have a drink?");
	} else {
		console.log("Step back from the Macbook!");
	}
	myAge = parseInt(prompt("Enter your age", "19"));
	if (myAge === 19 || myAge < 21) { 
		console.log ("You are not of the legal age to drink yet!");
	} else {
		console.log ("You can finally drink!");
	}
}
console.log("Don't drink if you're not 21!");
console.log("If you're 21 drink responsibly");


    
    

