var map;

function initmap(iconURL) {
    // Create the map
    map = L.map('myMap').setView([0, -30], 3);

    // Set up the OSM layer
    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
            maxZoom: 18
        }).addTo(map);

    
    // Locate the current user
    map.locate({
        setView: true,
        maxZoom: 16,
        watch: false
    });

    // Create marker at location
    function onLocationFound(e) {
        var myIcon = L.icon({
            iconUrl: iconURL,
            iconSize: [38, 38],
        });
        var marker = L.marker(
            e.latlng, {icon: myIcon});
        
        marker.bindPopup("Hello").openPopup();
        marker.addTo(map);
    }

    // Put down marker at User location
    map.on('locationfound', onLocationFound);
}
