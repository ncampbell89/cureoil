var sales = document.getElementById("promotions");
var salesArray = ["images/buy_one_get_one.jpg", "images/sales_promotions.jpg", "images/wild_growth.jpg"];
var salesIndex = 0;

function alterImage() {
	sales.setAttribute("src", salesArray[salesIndex]);
	salesIndex++;
	if (salesIndex >= salesArray.length) {
		salesIndex = 0;
	}
}

setInterval(alterImage, 3000);