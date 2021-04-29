$(document).ready(function(){
	
	$('#btn-estimates').click(function(){
		var redCard = parseInt($('#redCard').val(), 10) || 0,
            giftCard = parseInt($('#giftCard').val(), 10) || 0;

		var totalAmount = redCard + giftCard;

		var	estimate = '$' + totalAmount.toFixed(2);

		document.getElementById('txt-estimates').value = estimate;

        console.log(estimate);

		// var results = document.getElementById('est_results');
		// results.innerHTML = 'Total items: ' + totalQty + '<br>';			
	});

});