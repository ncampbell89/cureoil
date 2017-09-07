var ePowder = document.getElementById("txt-q-energy");
var ePowderArray = ["images/natural_energy_lemonade.png",
"images/natural_energy_orange.png", "images/natural_energy_pomegranate.png"];
var ePowderIndex = 0;

function changeImage() {
	ePowder.setAttribute("src", ePowderArray[ePowderIndex]);
	ePowderIndex++;
	if (ePowderIndex >= ePowderArray) {
		ePowderIndex = 0;
	}
}

setInterval(changeImage, 3000);