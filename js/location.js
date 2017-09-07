// var gMap = 'AIzaSyDsiShjc-8TFlPKOmXFZMpwclPiy9IDMlk';

function initMap() {
	var storeLocationBroadway = {lat: 40.7063394, lng: -74.0134099};
	var	storeLocationMall = {lat: 40.7270588, lng: -74.0384239};
	var storeLocationDeKalb = {lat: 40.714185, lng: -73.934719};
	
	var storeLocation = {lat: 40.7086, lng: -73.9925};

	var map = new google.maps.Map(document.getElementById('cureoil-map'), {
	  center: storeLocation,
	  zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var markerB = new google.maps.Marker({
      position: storeLocationBroadway,
      map: map,
      title: 'CureOil in Manhattan'
    });

    var markerM = new google.maps.Marker({
      position: storeLocationMall,
      map: map,
      title: 'CureOil in Jersey City'
    });

    var markerD = new google.maps.Marker({
      position: storeLocationDeKalb,
      map: map,
      title: 'CureOil in Brooklyn'
    });

	var infoContentB = "<b>CureOil</b><br>"
		infoContentB += "39 Broadway<br>"
		infoContentB += "New York, NY 10006"

	var infoContentM = "<b>CureOil</b><br>"
		infoContentM += "30 Mall Dr W<br>"
		infoContentM += "Jersey City, NJ 07310<br>"

	var infoContentD = "<b>CureOil</b><br>"
		infoContentD += "1040 Metropolitan Avenue<br>"
		infoContentD += "Brooklyn, NY 11211"

    var infowindowB = new google.maps.InfoWindow({
      content: infoContentB
    });

    var infowindowM = new google.maps.InfoWindow({
      content: infoContentM
    });

    var infowindowD = new google.maps.InfoWindow({
      content: infoContentD
    });

    markerB.addListener('click', function() {
      infowindowB.open(map, markerB)
    });

    markerM.addListener('click', function() {
      infowindowM.open(map, markerM)
    });

    markerD.addListener('click', function() {
      infowindowD.open(map, markerD)
    });
}


				