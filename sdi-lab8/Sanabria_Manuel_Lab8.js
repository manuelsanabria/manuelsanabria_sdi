//alert("JavaScript works!");

var myEmail = "manuelsanabria@fullsail.edu";

var myChar = function(email) {

	var atSign = myEmail.indexOf("@");
	var period = myEmail.indexOf(".");
	var atSign2 = myEmail.lastIndexOf("@");
	var period2 = myEmail.lastIndexOf(".");
	var space = myEmail.indexOf(" ");
	var isThereOneAt = false;
	var isThereOnePeriod = false;
	var isThereNoSpace = false;

	if (atSign >= 0) {
		if (atSign2 == atSign) {
			isThereOneAt = true;
		} else {
			isThereOneAt = false;
		}
	}

	if (period >= 0) {
		isThereOnePeriod = true;
	} else {
		isThereOnePeriod = false;
	}

	if (space == -1) {
		isThereNoSpace = true;
	} else {
		isThereNoSpace = false;
	}
	
	if (isThereOneAt ==  true && isThereOnePeriod == true && isThereNoSpace == true) {
		console.log("You have a valid address!");
		return true;	
	} else {
		console.log("You have an incorrect address");
		return false;
	}
	

};
myChar(myEmail);
