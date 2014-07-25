//alert("JavaScript works!");

var myEmail = "manuelsanabria@fullsail.edu";

var myChar = function(email) {

	var atSign = myEmail.indexOf("@"); //rich note: atSign = 14
	//var period = myEmail.indexOf(".");
	//var atSign2 = myEmail.lastIndexOf("@");

	console.log(atSign);

	if(atSign > 0) {
		console.log("Thank you for entering a correct email.");
	} else {
		console.log("Please use a @ sign.");
	}
	
};

myChar(myEmail);
