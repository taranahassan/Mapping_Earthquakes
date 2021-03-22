// Add console.log to check to see if code is working.
console.log("working");

// Creating map object with center and zoom level.
let map = L.map("mapid").setView([30.1975, -97.6664], 4);

// coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781],
    [33.6822, -78.9279]
];

// creating a polyline using line coordinates and make line red.
L.polyline(line, {
    dashArray: 5,
    color: "blue",
    lineWeight: 4,
    opacity:0.5
}).addTo(map);

// Creating tile layer that will be the background of map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY 
});

// Adding 'graymap' tile layer to map.
streets.addTo(map);