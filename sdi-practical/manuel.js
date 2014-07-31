//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Practical Exam

var phoneNum = "123-456-7890";

var telephone = function(number) {
   
	var amount = phoneNum.indexOf("123-456-7890");
	var dashes = phoneNum.indexOf("-");
	var amountCheck = phoneNum.lastIndexOf("1234567890");
	var dashesCheck = phoneNum.lastIndexOf("-");
	var numbers = 1234567890;
	var isNumber = false;
	var correctChars = false;
	var correctDashes = false;

	if (amount >= 0) {
		correctChars = true;
	} else {
		correctChars = false;
	}
		
	
	if (dashes >= 2) {
		correctDashes = true;
	} else {
		correctDashes = false;
	}

	if (numbers >= 10) {
		isNumber = true;
	} else {
		isNumber = false;
	}

	if (correctChars == true && correctDashes == true && isNumber == true) {
		console.log("This is the correct amount of characters. Your call will proceed.");
		return true;
	} else {
		console.log("Please input the correct characters and amount to make a call.");
		return false;
	};
};
telephone(phoneNum);
