// Add console.log to check to see if code is working.
console.log("working");

// Creating map object with center and zoom level.
let map = L.map("mapid").setView([40.7, -94.5], 14);

// Creating tile layer that will be the background of map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY 
});
// Adding 'graymap' tile layer to map.
streets.addTo(map);

// pulling data from cities.js
let cityData = cities;

// looping through cities array and create
// marker for each city
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: "orange",
        fillColor:"orange",
        lineWeight: 4})
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Poluplation " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});