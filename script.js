var map = L.map('map').setView([ 43.6, 79.4, 13 )
// Add the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Create empty layer groups for each of your layers
var layer1 = L.layerGroup();
var layer2 = L.layerGroup();
var layer3 = L.layerGroup();

// Load your GeoJSON data into the layers
fetch('layer1.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(layer1);
    });

fetch('layer2.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(layer2);
    });

fetch('layer3.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(layer3);
    });

// Add all layers to the map
layer1.addTo(map);
layer2.addTo(map);
layer3.addTo(map);

// Create the layer control
var overlayMaps = {
    "Layer 1": layer1,
    "Layer 2": layer2,
    "Layer 3": layer3
};

// Add layer control to map
L.control.layers(null, overlayMaps).addTo(map);
