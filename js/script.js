
var doCoolStuff = function () {

	var curClassName = document.getElementById("firstButton").className;

	if (curClassName == 'cool') {
		document.getElementById("firstButton").className
			= 'cool red';
	} else {
		document.getElementById("firstButton").className 
			= 'cool';
	}

}

var car = {
	make: "VW",
	type: "Polo",
	color: "blue",
	isTurnedOn: false,
	numberOfWheels: 4,

	turnOn: function () {
		this.isTurnedOn = true;
		return isTurnedOn;
		
	},
	fly: function () {
		alert("Wat leuk, je hebt op me gedrukt!");
	}
};

var bankAccount = {
	moneyCount: 0,
};

console.log("Welcome to the console!")