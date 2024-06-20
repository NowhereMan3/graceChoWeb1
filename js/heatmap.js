let map = L.map('map').setView([58.373523, 26.716045], 12)
const osm =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
})
osm.addTo(map)


// default map settings
function defaultMapSettings() {
 map.setView([58.373523, 26.716045], 12)
}


fetch("geojson/tartu_city_celltowers_edu.geojson")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        L.geoJson(data).addTo(map);
    })
    .then(function(markers){
        L.geoJson(data)
        marker.addTo(map)
    })
    .catch(function(error) {
        console.log(`This is the error: ${error}`)
    })


