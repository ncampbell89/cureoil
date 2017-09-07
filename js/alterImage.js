var fresh = document.getElementById("txt-q-scents");
var freshArray = ["images/NatureScents_lemon.png", "images/NatureScents_coffee.png", "images/NatureScents_newcar.png"];
var freshIndex = 0;

var bath = document.getElementById("txt-q-beads");
var bathArray = ["images/ocean_beads.png", "images/english_garden_beads.png", "images/ginger_beads.png"];
var bathIndex = 0;

var ePowder = document.getElementById("txt-q-energy");
var ePowderArray = ["images/natural_energy_lemonade.png", "images/natural_energy_orange.png", "images/natural_energy_pomegranate.png"];
var ePowderIndex = 0;

var d = document.getElementById("txt-q-diffuser");
var dArray = ["images/now-diffuser.png", "images/oil_diffuser.png"];
var dIndex = 0;

function alterImage() {
	fresh.setAttribute("src", freshArray[freshIndex]);
	freshIndex++;
	if (freshIndex >= freshArray.length) {
		freshIndex = 0;
	}

	bath.setAttribute("src", bathArray[bathIndex]);
	bathIndex++;
	if (bathIndex >= bathArray.length) {
		bathIndex = 0;
	}

	ePowder.setAttribute("src", ePowderArray[ePowderIndex]);
	ePowderIndex++;
	if (ePowderIndex >= ePowderArray.length) {
		ePowderIndex = 0;
	}

	d.setAttribute("src", dArray[dIndex]);
	dIndex++;
	if (dIndex >= dArray.length) {
		dIndex = 0;
	}
}

setInterval(alterImage, 3000);