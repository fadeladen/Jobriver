var mymap = L.map('mapid' , {
    maxZoom: 20,
    minZoom: 6,
    zoomControl: false
}).setView([4.4798966,97.9481437], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmFkZWxhZGVubWFwIiwiYSI6ImNrZ25vYjM2djA2MncyenMzYXdvZG5rdGEifQ.XDo4zcFIcxqkNuW-ZIzGkg'
}).addTo(mymap);
var marker = L.marker([4.4861181,97.9539962]).bindPopup("<b>Hello world!</b><br>I am a popup.").addTo(mymap);
L.control.zoom({
    position: 'bottomright'
}).addTo(mymap);
