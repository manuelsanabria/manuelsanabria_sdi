//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Lab 6 Part 1

var mySoccerList = function() {
	
	var listClubs = ["Manchester City", "Manchester United", "Everton", "Chelsea"];
	var listPlayers = ["Yaya", "De Gea", "Lukaku", "Mata"];
	
	for (var i = 0; i < listClubs.length; i++) {
		
		console.log("I would like to see my favorite club " + listClubs[i] + " " + listPlayers[i] + '.');
		
	}
	
	console.log(listClubs, listPlayers);
	    
	listClubs.push("Barcelona");
	listPlayers.push("Dani Alves"); 
	
	console.log("I would like to see my favorite club " + listClubs[4] + " there star player is " + listPlayers[4] + '.');
    console.log(listClubs, listPlayers);
};

mySoccerList();
