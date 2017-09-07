$(document).ready(function(){
	
	$('#btn-estimate').click(function(){
		var itemAir = parseInt($('#txt-q-freshner').val(), 10) || 0,
			itemBeads = parseInt($('#txt-q-beads').val(), 10) || 0,
			itemPowder = parseInt($('#txt-q-energy').val(), 10) || 0,
			itemIncense = parseInt($('#txt-q-incense').val(), 10) || 0,
			itemSalt = parseInt($('#txt-q-salt').val(), 10) || 0,
			itemDiffuser = parseInt($('#txt-q-diffuser').val(), 10) || 0,
			itemWooden = parseInt($('#txt-q-wooden').val(), 10) || 0; 

		var totalQty = itemAir + itemBeads + itemPowder + itemIncense + itemSalt + itemDiffuser +
			itemWooden;

		var totalItemPrice = (6.5 * itemAir) + (2.75 * itemBeads) + (1 * itemPowder) + (3.5 * itemIncense) +
			(1 * itemSalt) + (21 * itemDiffuser) + (26 * itemWooden);

			var state = document.getElementById('s-state'),
				shippingState = state.value,
				shippingMethod = document.querySelector('[name=r_method]:checked').value || "",
				shippingCostPer,
				taxFactor = 1;

				if (shippingState === '') {
					alert('Please choose your shipping state.');
				}

				if (shippingState === 'NY') {
					taxFactor = 1.04;
				} else if (shippingState === 'NJ') {
					taxFactor = 1.06875;
				} else if (shippingState === 'CT') {
					taxFactor = 1.0635;
				} else if (shippingState === 'PA') {
					taxFactor = 1.06;
				} 

				switch (shippingMethod) {
					case 'ups':
						shippingCostPer = 2;
						break;
					case 'usps':
						shippingCostPer = 3;
						break;
					default:
						shippingCostPer = 0;
				};

			var	shippingCost = shippingCostPer * totalQty;

			var	estimate = '$' + ((totalItemPrice * taxFactor) + shippingCost).toFixed(2);

			document.getElementById('txt-estimate').value = estimate;

			var results = document.getElementById('results');
			results.innerHTML = 'Total items: ' + totalQty + '<br>';
			results.innerHTML += 'Total shipping: ' + '$' + shippingCost.toFixed(2) + '<br>';
			results.innerHTML += 'Tax: ' + ((taxFactor - 1) * 100).toFixed(2) + '% (' + shippingState + ')';
			
		});

});