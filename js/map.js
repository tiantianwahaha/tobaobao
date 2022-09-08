window.onload=function(){
	var mymap = L.map('mapid').setView([39.90733, -243.60874], 11);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery ? <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

	L.marker([39.90947, -243.63324], {icon: L.AwesomeMarkers.icon({icon: 'heart', prefix: 'fa', markerColor: 'orange', iconColor: '#ffffff'}) }).addTo(mymap)
		.bindPopup("<b>2022.7.28 初见</b><br /><img src='image/xiangyu.jpg' height=\"100%\" width=\"100%\"/>");
	L.marker([39.88131, -243.70941], {icon: L.AwesomeMarkers.icon({icon: 'heart', prefix: 'fa', markerColor: 'orange', iconColor: '#ffffff'}) }).addTo(mymap)
		.bindPopup("<b>2022.7.29 独行月球</b><br /><img src='image/moon.jpg' height=\"100%\" width=\"100%\"/>");
	L.marker([39.99105, -243.67262], {icon: L.AwesomeMarkers.icon({icon: 'heart', prefix: 'fa', markerColor: 'orange', iconColor: '#ffffff'}) }).addTo(mymap)
		.bindPopup("<b>2022.7.31 陶艺</b><br /><img src='image/taoyi.jpg' height=\"100%\" width=\"100%\"/>");
    L.marker([39.90904, -243.7282], {icon: L.AwesomeMarkers.icon({icon: 'heart', prefix: 'fa', markerColor: 'red', iconColor: '#ffffff'}) }).addTo(mymap)
		.bindPopup("<b>2022.8.4 七夕</b><br /><img src='image/eshi.jpg' height=\"100%\" width=\"100%\"/>");
    L.marker([39.87487, -243.81557], {icon: L.AwesomeMarkers.icon({icon: 'heart', prefix: 'fa', markerColor: 'orange', iconColor: '#ffffff'}) }).addTo(mymap)
		.bindPopup("<b>2022.8.20 园博园</b><br /><img src='image/yuanboyuan.jpg' height=\"100%\" width=\"100%\"/>");
    L.marker([40.01951, -243.61318], {icon: L.AwesomeMarkers.icon({icon: 'heart', prefix: 'fa', markerColor: 'orange', iconColor: '#ffffff'}) }).addTo(mymap)
		.bindPopup("<b>2022.8.27 奥森</b><br /><img src='image/aosen.jpg' height=\"100%\" width=\"100%\"/>");
    L.marker([40.25596, -243.71349], {icon: L.AwesomeMarkers.icon({icon: 'heart', prefix: 'fa', markerColor: 'orange', iconColor: '#ffffff'}) }).addTo(mymap)
		.bindPopup("<b>2022.9.10 蟒山森林公园</b><br /><img src='image/mangshan.jpg' height=\"100%\" width=\"100%\"/>");

    /*
    L.marker([30.65682, -255.94849], {icon: L.AwesomeMarkers.icon({icon: 'star', prefix: 'fa', markerColor: 'pink', iconColor: '#ffffff'}) }).addTo(mymap)
		.bindPopup("<b>计划-成都</b>").openPopup();
    */
/*
	L.circle([51.508, -0.11], 500, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("I am a circle.");

	L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	]).addTo(mymap).bindPopup("I am a polygon.");
*/

	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);
}; 