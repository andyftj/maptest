// Create the map
   var map = L.map('map').setView([51.505, -0.09], 13); 

   // Add a basemap tile layer
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   // Load your GeoJSON data (replace 'your_data.geojson' with the actual filename)
   fetch('your_data.geojson')
       .then(response => response.json())
       .then(data => {
           // Add the GeoJSON layer to the map
           L.geoJSON(data).addTo(map);
       });
