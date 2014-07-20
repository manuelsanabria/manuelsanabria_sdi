//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Lab 6 Part 1

var myList = function() {
	
	var list = ["Manchester City", "Manchester United", "Everton", "Chelsea"];
	var list2 = ["Yaya", "De Gea", "Lukaku", "Mata"];
	
	for (var i = 0; i < list.length; i++) {
		
		console.log("I would like to see my favorite club " + list[i] + " " + list2[i] + '.');
	}
	
	list.push("Barcelona");
	list2.push("Dani Alves"); 
	
	console.log("I would like to see my favorite club " + list[4] + " there star player is " + list2[4] + '.');

};

myList();
