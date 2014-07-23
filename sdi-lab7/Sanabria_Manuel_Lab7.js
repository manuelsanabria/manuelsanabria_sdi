//alert("JavaScript works!");

// Manuel Sanabria
// SDI 1407
// Lab 7

var firstPlay,
    secondPlay,
    thirdPlay;
    
var objPlayers = function(playName, playPos, playNat, playAge) {
	
	this.player = playName,
	this.position = playPos,
	this.nationality = playNat,
	this.age = playAge;
	
};

var playerGenerator = function() {
	
	for (var index in jsonData.manchesterUnited) {
		if (index == 0) {
			
			firstPlay = new objPerson(jsonData.manchesterUnited[index].player, jsonData.manchesterUnited[index].position, jsonData.manchesterUnited[index].nationality, jsonData.manchesterUnited[index].age);
			
		} else if (index == 1) {
			
			
			secondPlay = new objPerson(jsonData.manchesterUnited[index].player, jsonData.manchesterUnited[index].position, jsonData.manchesterUnited[index].nationality, jsonData.manchesterUnited[index].age);
			
		} else {
			
			thirdPlay = new objPerson(jsonData.manchesterUnited[index].player, jsonData.manchesterUnited[index].position, jsonData.manchesterUnited[index].nationality, jsonData.manchesterUnited[index].age);
			
		}
	};

};
