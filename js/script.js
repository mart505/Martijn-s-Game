
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

var bankAccount = {
	moneyCount: 0
}
	
var	moneyClick =  function () {
	bankAccount.moneyCount += 1;
	console.log("Money Click" + bankAccount.moneyCount)
	value = bankAccount.moneyCount;
	document.getElementById('output').innerHTML = "$ " + value;
	if (value >= 50) {
		document.getElementById('output').innerHTML = "Congratulations, you're rich!"
	}
}

var purchase = function () {
	bankAccount.moneyCount -= 50;

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

console.log("Welcome to the console!")