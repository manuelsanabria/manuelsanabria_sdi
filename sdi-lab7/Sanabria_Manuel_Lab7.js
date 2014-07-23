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
			
			firstPlay = new objPlayers(jsonData.manchesterUnited[index].player, jsonData.manchesterUnited[index].position, jsonData.manchesterUnited[index].nationality, jsonData.manchesterUnited[index].age);
			
		} else if (index == 1) {
			
			
			secondPlay = new objPlayers(jsonData.manchesterUnited[index].player, jsonData.manchesterUnited[index].position, jsonData.manchesterUnited[index].nationality, jsonData.manchesterUnited[index].age);
			
		} else {
			
			thirdPlay = new objPlayers(jsonData.manchesterUnited[index].player, jsonData.manchesterUnited[index].position, jsonData.manchesterUnited[index].nationality, jsonData.manchesterUnited[index].age);
			
		}
	};

};

playerGenerator();
console.log(firstPlay.player + " is a " + firstPlay.nationality + ".");
console.log(firstPlay);
console.log(secondPlay.player + " plays as a " + secondPlay.position + ".");
console.log(secondPlay);
console.log(thirdPlay.player + " age is " + thirdPlay.age + ".");
console.log(thirdPlay);
