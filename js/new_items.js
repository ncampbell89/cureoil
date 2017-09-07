var items = document.getElementById("releases");
var imageArray = ["new_releases/macadamia-oil.jpg", "new_releases/grapeseed-oil.jpg",
"new_releases/macadamia-nut.jpg", "new_releases/rosemarybush.jpg"];
var imageIndex = 0;

function changeImage() {
	items.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

setInterval(changeImage, 3000);
