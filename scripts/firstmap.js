var mymap = L.map('mapid').setView([37.173116, 24.483774], 7.74);

L.tileLayer('https://api.mapbox.com/styles/v1/frankirosenthal/ck2xfgzdk1za01clogwss5dy9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZnJhbmtpcm9zZW50aGFsIiwiYSI6ImNrMnhmYjdtYjBheGgzbXI2MzJjcmw1djQifQ.IhvxfZ7E-1L-i5s-zUfW-g', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([37.971583, 23.725749]).addTo(mymap);
let marker2 = L.marker([37.336701, 23.470944]).addTo(mymap);
let marker3 = L.marker([37.406444, 25.347819]).addTo(mymap);
let marker4 = L.marker([36.460826, 25.369872]).addTo(mymap);

marker1.bindPopup("<b>Athens, Greece</b><br>The Acropolis of Athens is an ancient monument that contains remains from several ancient buildings.");
marker2.bindPopup("<b>Hydra, Greece</b><br>Hydra is one of the Saronic islands of Greece, located in the Aegean Sea. In ancient times, the island was known as Hydrea, referring to the natural springs.");
marker3.bindPopup("<b>Mykonos, Greece</b><br>Located on the southern tip of Mykonos is Scorpios. A gorgeous beach area popular to tourists.");
marker4.bindPopup("<b>Santorini, Greece</b><br>Known for its whitewashed houses for miles, Oia is a coastal town on the northwestern tip of Santorini.");
