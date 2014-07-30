//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Lab 10

// global variables 
var result = 0;

// functions

var multiples = function() {
	
	var sum = 0;
	for (var i = 3; i < 1000; i+=3); {
		
		sum += i;
		
	}
	for (var i = 5; i < 1000; i+=5); {
		
		sum += i;
		
	}
return sum;


};
result = multiples();
console.log("The result is " + result + ".");

