//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Leture 3 

// variables
var myName = "Manuel";
var myLastName = "Sanabria";

myName = prompt("Enter your name?", "Manuel");

// conditionals
if (myName === "Manuel") 
{
	myLastName = prompt("Enter your last name, " + myName + ":");
	if (myLastName === "Sanabria") {
	console.log("Welcome back, " + myName + " " + myLastName + ".");
} else { 
	console.log("Step back from the computer please!"); 
	} 
}

console.log("Good job, " + myName + "!");
