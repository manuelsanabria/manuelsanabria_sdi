//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Lab 10

// global variables
var result = 0;
var array = [];

// functions
var multiples = function() {

	var sum = 0;
	for (var i = 3; i < 1000; i += 3) {

		sum += i;

	}
	for (var i = 5; i < 1000; i += 5) {

		sum += i;

	}
	return sum;

};
var genPowerball = function() {

	while (array.length < 5) {

		var num = Math.random();
		num = num * 58;
		num = num + 1;
		num = Math.round(num);
		if (array.indexOf(num) < 0) {
		array.push(num);	
		}
		

	}
	var num2 = Math.random();
	num2 = num * 34;
	num = num + 1;
	num = Math.round(num);
	array.push(num);

};
result = multiples();
console.log("The result is " + result + ".");
genPowerball();
console.log("The numbers are: " + array + ".");
console.log("The powerball number is " + array[5]);
