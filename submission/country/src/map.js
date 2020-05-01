$("main").append(`
<style>
  .peta {
    height:500px;
    width: 100%;
    border: 4px solid lightblue; 
    border-radius: 10px; 
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
    display: flex; 
    top: 110px;
    z-index: 1;
  }
</style>
<div id='peta' class='peta'></div>`);
var mapOptions = {
  center: [-5,120],
  zoom: 5
}
var map = new L.map('peta', mapOptions);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(map); 
var marker=[];

function lokasi(l, n) {
  let x = parseInt(n)
  var respon = l
  if (respon.length>0) {
    var koordinat = respon.split(","); 
    koordinat[0] = parseFloat(koordinat[0]); //lat 
    koordinat[1] = parseFloat(koordinat[1]); //lng 
    map.flyTo(koordinat, 6)
  }
  else {
    alert("koordinat lokasi tidak ditemukan :(")
  }
  let i =0;
  while(i<marker.length){
    if (marker[i]!=null) {
      marker[i].closePopup();
    }
    i++;
  }
  marker[x].openPopup();
}

function about() {
   alert(`
=Aplikasi Pencarian Lokasi Negara=
oleh: Ridho Darman
Aplikasi ini merupakan bagian dari Belajar "Fundamental Front-End Web Development" oleh dicoding
    `)
    $('#a').hide()
}