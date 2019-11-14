var mymap = L.map('mapidtwo').setView([40.761636, -73.984262], 15.41);

L.tileLayer('https://api.mapbox.com/styles/v1/frankirosenthal/ck2xhqsvq1rc31ctl2ym8jazk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZnJhbmtpcm9zZW50aGFsIiwiYSI6ImNrMnhmYjdtYjBheGgzbXI2MzJjcmw1djQifQ.IhvxfZ7E-1L-i5s-zUfW-g', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for ( let i = 0; i < places.length;  i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
  .addTo(mymap);
}
