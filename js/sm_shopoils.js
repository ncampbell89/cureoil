$(document).ready(function(){
	
	$('#btn-estimates').click(function(){
		var itemAlmond = parseInt($('#txt-sm-almond').val(), 10) || 0,
			itemArgan = parseInt($('#txt-sm-argan').val(), 10) || 0,
			itemAvocado = parseInt($('#txt-sm-avocado').val(), 10) || 0,
			itemCastor = parseInt($('#txt-sm-castor').val(), 10) || 0,
			itemCoconut = parseInt($('#txt-sm-coconut').val(), 10) || 0,
			itemFlaxseed = parseInt($('#txt-sm-flaxseed').val(), 10) || 0,
			itemHempseed = parseInt($('#txt-sm-hempseed').val(), 10) || 0,
			itemJojoba = parseInt($('#txt-sm-jojoba').val(), 10) || 0,
			itemLavender = parseInt($('#txt-sm-lavender').val(), 10) || 0,
			itemMacadamia = parseInt($('#txt-sm-macadamia').val(), 10) || 0,
			itemOlive = parseInt($('#txt-sm-olive').val(), 10) || 0,
			itemRosehip = parseInt($('#txt-sm-rosehip').val(), 10) || 0,
			itemRosemary = parseInt($('#txt-sm-rosemary').val(), 10) || 0,
			itemSafflower = parseInt($('#txt-sm-safflower').val(), 10) || 0,
			itemTamanu = parseInt($('#txt-sm-tamanu').val(), 10) || 0,
			itemTeaTree = parseInt($('#txt-sm-teatree').val(), 10) || 0; 

		var totalQty = itemAlmond + itemArgan + itemAvocado + itemCastor + itemCoconut + itemFlaxseed +
			itemHempseed + itemJojoba + itemLavender + itemMacadamia + itemOlive + itemRosehip + itemRosemary +
			itemSafflower + itemTamanu + itemTeaTree;

		var totalItemPrice = (.75 * itemAlmond) + (1.25 * itemArgan) + (1 * itemAvocado) + (2.5 * itemCastor) +
			(.5 * itemCoconut) + (2.5 * itemFlaxseed) + (1.25 * itemHempseed) + (1.75 * itemJojoba) +
			(2 * itemLavender) + (1.5 * itemMacadamia) + (1.75 * itemOlive) + (3 * itemRosehip) +
			(3.5 * itemRosemary) + (1.75 * itemSafflower) + (3 * itemTamanu) + (2.75 * itemTeaTree);

			var state = document.getElementById('state-s'),
				shippingState = state.value,
				shippingMethod = document.querySelector('[name=m_method]:checked').value || "",
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
						shippingCostPer = 0.5;
						break;
					case 'usps':
						shippingCostPer = 0.6;
						break;
					default:
						shippingCostPer = 0;
				};

			var	shippingCost = shippingCostPer * totalQty;

			var	estimate = '$' + ((totalItemPrice * taxFactor) + shippingCost).toFixed(2);

			document.getElementById('txt-estimates').value = estimate;

			var results = document.getElementById('est_results');
			results.innerHTML = 'Total ounces: ' + totalQty + '<br>';
			results.innerHTML += 'Total shipping: ' + '$' + shippingCost.toFixed(2) + '<br>';
			results.innerHTML += 'Tax: ' + ((taxFactor - 1) * 100).toFixed(2) + '% (' + shippingState + ')';
			
		});

});