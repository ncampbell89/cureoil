var d = document.getElementById("txt-q-diffuser");
var dArray = ["images/now-diffuser.png", "images/oil_diffuser.png"];
var dIndex = 0;

function changeImage() {
	d.setAttribute("src", dArray[dIndex]);
	dIndex++;
	if (dIndex >= dArray.length) {
		dIndex = 0;
	}
}

setInterval(changeImage, 3000);