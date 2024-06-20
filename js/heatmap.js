let map = L.map('map').setView([58.373523, 26.716045], 12)
const osm =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
})
osm.addTo(map)




function createCircle(feature, latlng) {
 let options = {
 radius: 5,
 fillColor: 'red',
 fillOpacity: 0.5,
 color: 'red',
 weight: 1,
 opacity: 1,
 }
 return L.circleMarker(latlng, options)
}


async function addCelltowersGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const markers = L.geoJson(data) 
 const clusters = L.markerClusterGroup() 
 clusters.addLayer(markers) 
 clusters.addTo(map) 
}
addCelltowersGeoJson('geojson/tartu_city_celltowers_edu.geojson')


// default map settings
function defaultMapSettings() {
 map.setView([58.373523, 26.716045], 12)
}

