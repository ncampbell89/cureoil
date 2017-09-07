var fresh = document.getElementById("txt-q-scents");
var freshArray = ["images/NatureScents_lemon.png", "images/NatureScents_coffee.png",
"images/NatureScents_newcar.png"];
var freshIndex = 0;

function alterImage() {
	fresh.setAttribute("src", freshArray[freshIndex]);
	freshIndex++;
	if (freshIndex >= freshArray.length) {
		freshIndex = 0;
	}
}

setInterval(alterImage, 3000);