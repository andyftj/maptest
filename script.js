// Create the map
    var map = L.map('map').setView([ /* your latitude */, /* your longitude */ ], /* your zoom level */ ); 

    // Add a basemap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

// Assuming your GeoJSON file is named 'my_data.geojson'
    fetch('my_data.geojson')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data).addTo(map); 
        });
