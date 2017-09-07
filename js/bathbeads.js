var bath = document.getElementById("txt-q-beads");
var bathArray = ["images/ocean_beads.png", "images/english_garden_beads.png", "images/ginger_beads.png"];
var bathIndex = 0;

function alterImage() {
	bath.setAttribute("src", bathArray[bathIndex]);
	bathIndex++;
	if (bathIndex >= bathArray) {
		bathIndex = 0;
	}
}

setInterval(alterImage, 3000);