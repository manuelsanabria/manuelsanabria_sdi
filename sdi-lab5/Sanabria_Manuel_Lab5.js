//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Lab 5


// Note I had help from Angelo

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

var multiply = function(number1, number2) {
	
	var multiplyingResult;
	multiplyingResult = (number1 * number2);
	return multiplyingResult;
	
};

 var divide = function(number1, number2) {
	
	var dividingResult;
	dividingResult = (number1 / number2);
	return dividingResult;
	
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
	
} else if (d === "*") {
	
	var myMultiply = multiply(a, b);
	console.log(myMultiply);
	
} else if (d === "/") { 
	
   if (b === 0) {
   	
   	console.log("Cannot divide");
   	
   } else {
   	
   	var myDivide = divide(a, b);
   	console.log(myDivide);
   	
   }
}

