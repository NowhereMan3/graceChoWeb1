let map = L.map('map').setView([58.373523, 26.716045], 12)
const osm =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
})
osm.addTo(map)


// add geoJSON points layer*
async function addCelltowersGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const markers = L.geoJson(data)
 markers.addTo(map)
}
addCelltowersGeoJson('geojson/tartu_city_celltowers_edu.geojson')


// default map settings
function defaultMapSettings() {
 map.setView([58.373523, 26.716045], 12)
}


fetch("geojson/tartu_city_celltowers_edu.geojson")
    .then(function(response) {
        return response.json()
    })
