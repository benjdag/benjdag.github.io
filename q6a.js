// center of the map
var center = [14.64902, 121.06335];

// Create the map
var map = L.map('map', {
  closePopupOnClick: false
}).setView(center, 19);

// Set up the OSM layer
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 18,
    maxZoom: 20
  }).addTo(map);

var myIcon = L.divIcon({
  className: 'my-div-icon'
});

// add a marker in the given location
var marker = L.marker([14.64812, 121.06359], {
  icon: myIcon
}).addTo(map);
marker.bindPopup("<b>Q-6-A</b>", {
  autoClose: false
}).openPopup();;
var marker1 = L.marker([14.64895, 121.06356], {
  icon: myIcon
}).addTo(map);
marker1.bindPopup("<b>Grotto</b>", {
  autoClose: false
}).openPopup();

var marker2 = L.marker([14.64857, 121.0638], {
  icon: myIcon
}).addTo(map);
marker2.bindPopup("<b>Village A Court</b>", {
  autoClose: false
}).openPopup();

var marker3 = L.marker([14.65014, 121.06458], {
  icon: myIcon
}).addTo(map);
marker3.bindPopup("<b>UP Bonsai Garden</b>", {
  autoClose: false
}).openPopup();



var polyline1 = L.polyline([
  [14.64733, 121.06231],
  [14.65472, 121.06233],
], {
  color: 'red',
  weight: 10,
  opacity: .7,
  dashArray: '20,15',
  lineJoin: 'round'
}).addTo(map);

    14.64857, 121.0643

var polyline2 = L.polyline([
	[14.65302, 121.06449],
  [14.64857, 121.0643],
  [14.64861, 121.0639],
  
], {
  color: 'orange',
  weight: 10,
  opacity: .7,
  dashArray: '20,15',
  lineJoin: 'round'
}).addTo(map);


var polyline = L.polyline([
  [14.64961, 121.06235],
  [14.64939, 121.06285],
  [14.64861, 121.0639],
  [14.64835, 121.06381],
  [14.64812, 121.06359]
], {
  color: 'red',
  weight: 10,
  opacity: .7,
  dashArray: '20,15',
  lineJoin: 'round'
}).addTo(map);

var polyline = L.polyline([
  [14.64861, 121.0639],
  [14.64835, 121.06381],
  [14.64812, 121.06359]
], {
  color: 'green',
  weight: 10,
  opacity: .7,
  dashArray: '20,15',
  lineJoin: 'round'
}).addTo(map);
