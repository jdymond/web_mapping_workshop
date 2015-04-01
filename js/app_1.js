///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'jdymond.76bd2cb3'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiamR5bW9uZCIsImEiOiJHZkhuaXBZIn0.UllYrI-An9J00tVwRyVKuw'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);
