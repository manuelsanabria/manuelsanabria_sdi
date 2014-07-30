//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Lab 9

// problem 1
var myNum = function(numForm, numDec) {

	var newNum = numForm.toFixed(numDec);
	return newNum;

};
var myResult = myNum(4.1364, 7);
console.log("My new result is " + myResult + ".");



// problem 2
var theString = "88";

var theNum = function(theString) {

	if (isNaN(theString)) {
		// return false;
		console.log(theString + " is not a number.");
	} else {
		// var newNumber = parseFloat(theString);
		//return newNumber
		console.log(theString + " is a number.");
	}

};
theNum(theString);



// problem 3
var theDate = new Date("1/1/2014");
var theDate2 = new Date("1/2/2015");

var myDates = function(firstDat, secondDat, thirdHours) {
	
	var difference = firstDat - secondDat;
	difference = Math.abs(difference);
	difference /= 1000;
	difference /= 60;
	difference /= 60;
	
	if (thirdHours == "hours") {
		return difference;
	} else {
		return difference / 24;
	}
};
console.log("This is my new data as days " +  myDates(theDate,theDate2, "days") + ".");



