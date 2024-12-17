var map = L.map('map').setView([ 43.6, 73.4, 13 );
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create layer objects (importantly, don't add them to the map yet)
let roadsLayer = null
fetch('map.geojson')
    .then(response => response.json())
    .then(data => {
        roadsLayer = L.geoJSON(data)
    })

let buildingsLayer = null
fetch('map (1).geojson')
    .then(response => response.json())
    .then(data => {
        buildingsLayer = L.geoJSON(data)
    });
let parksLayer = null

fetch('map (2).geojson')
        .then(response => response.json())
    .then(data => {
        parksLayer = L.geoJSON(data)
    });

// Add a simple toggle to the index.html to demonstrate
    const container = document.getElementById('map').insertAdjacentHTML('afterend','<input id="toggleRoads" type="checkbox" name="roads"> <label for ="toggleRoads">Show Roads</label> <br ><input id="toggleBuildings" type="checkbox" name="buildings"> <label for ="toggleBuildings">Show Buildings</label> <br ><input id="toggleParks" type="checkbox" name="parks"> <label for ="toggleParks">Show Parks</label>')
    
    const toggleRoads = document.getElementById('toggleRoads')
    const toggleBuildings = document.getElementById('toggleBuildings')
    const toggleParks = document.getElementById('toggleParks')

    toggleRoads.addEventListener('click', () => {
      if(map.hasLayer(roadsLayer)){
         map.removeLayer(roadsLayer)
       }
     else {
          roadsLayer.addTo(map)
        }
      })
    
        toggleBuildings.addEventListener('click', () => {
      if(map.hasLayer(buildingsLayer)){
         map.removeLayer(buildingsLayer)
       }
     else {
          buildingsLayer.addTo(map)
        }
      })

        toggleParks.addEventListener('click', () => {
      if(map.hasLayer(parksLayer)){
         map.removeLayer(parksLayer)
       }
     else {
          parksLayer.addTo(map)
        }
      })
