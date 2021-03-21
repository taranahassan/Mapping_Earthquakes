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

// Adding marker to map for Los Angeles, California.
let marker = L.circleMarker([34.0522, -118.2437], {
    color: "black",
    fillColor: "#ffffa1",
    radius: 300
}).addTo(map);
