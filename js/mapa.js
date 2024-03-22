const map = L.map('map').setView([-11.862991, -77.075442],15);
let listaPuntos =[];

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);



document.getElementById("buscar").addEventListener("click",(e)=>{
    e.preventDefault();

    let lat = parseFloat(document.getElementById("lat").value);
    let long = parseFloat(document.getElementById("long").value);
    let marcador = L.marker([lat,long]).addTo(map);
    listaPuntos.push(marcador._latlng);

});

document.getElementById("unirPuntos").addEventListener("click",(e)=>{
    e.preventDefault();
    let polilinea = L.polyline(listaPuntos,{color:'red'}).addTo(map);

    let coordenas = polilinea.getLatLngs();

    let distanciaTotal=0;
    for(let i = 0; i < coordenas.length - 1;i++){
        let puntoInicial = coordenas[i];
        let puntoSiguiente = coordenas[i+1];
        distanciaTotal += puntoInicial.distanceTo(puntoSiguiente)/1000
    }
    console.log(distanciaTotal)
    polilinea.bindPopup(distanciaTotal.toFixed(2) + "km").addTo(map)
})

