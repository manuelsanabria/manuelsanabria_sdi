//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Lab 5

var addition = function(number1, number2) {
	
	var addingResult;
	addingResult = (number1 + number2);
	return addingResult;
	
};

var subtract = function(number1, number2) {
	
	var subtractingResult;
	subtractingResult = (number1 - number2);
	return subtractingResult;
};	

var a = parseFloat(prompt("Enter your first number, please."));
var b = parseFloat(prompt("Enter your second number, please."));
var d = prompt("Enter your operation.");
if (d === "+") {
	
	var myAdd = addition(a, b);
    console.log(myAdd);	
	
} else if (d === "-") {

    var mySubtract = subtract(a, b);
    console.log(mySubtract);	
	
};



