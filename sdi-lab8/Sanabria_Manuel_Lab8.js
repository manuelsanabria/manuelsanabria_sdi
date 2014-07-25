//alert("JavaScript works!");

var myEmail = "manuelsanabria@fullsail.edu";

var myChar = function(email) {
	
	var myIndex = email.charAt(13);
	
	if (myIndex == "@") {
		
		return true;
	} else {
		return false;
	}

};

myChar();
