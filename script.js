// Create the map
   var map = L.map('map').setView([51.505, -0.09], 13); 

   // Add a basemap tile layer
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   // Load your GeoJSON data (replace 'custom.geo (1).json' with the actual filename)
   fetch('custom.geo (1).json')
       .then(response => response.json())
       .then(data => {
           // Add the GeoJSON layer to the map
           L.geoJSON(data).addTo(map);
       });
