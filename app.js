const timeout = () => {
    window.setTimeout("redirect()",2000)} //con esta función le estoy indicando que solo permanezca 2 seg. y cambie de pantalla
window.onload = timeout;
const redirect = () => { //con redirect es para redireccionar a la pantalla de view.html
    window.location ="view.html"
    return
}

let divmapa = document.getElementById("mapa");
navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);

function fn_mal(){}

function fn_ok(rta){
 let lat = rta.coords.latitude;
 let lon = rta.coords.longitude;

 let gLatLon = new google.maps.LatLng(lat, lon);
 
 let objConfig = {
   zoom : 17,
   center : gLatLon
   
 }

 let gmapa = new google.maps.Map( divmapa, objConfig);

 let objConfigMarker = {
   position: gLatLon,
   map:gmapa,
   title: "estas aquì"
 }
 let gMarker = new google.maps.Marker(objConfigMarker);


 let gCoder = new google.maps.Geocoder();

 let objInformacion = {
   adress: "Calle Tepantongo 246"
 }

 gCoder.geocode(objInformacion, fn_coder);

 function fn_coder(datos){
   let coordenadas = datos[0].geometry.location;
 
   let config = {
     map: gmapa,
     position : coordenadas,
     title: "restaurante"
   }
   let gMarkerDV = new google.maps.Marker(config)

 }
}

/*let map; 
function initialize(){
let center = new google.maps.LatLng(lat, lon);
map = new google.maps.Map(document.getElementById("map"),{
center: gLatLon,
zoom: 17
});
var request = {
 location: center,
 radius: 8047,
 types:["restaurante"]
};
infowindow = new google.maps.InfoWindow();

let service = new google.maps.places.PlacesService(map);

service.nearbySearch(request,callback);


}
function callback(results, status){
 if(status == google.maps.places.PlacesServiceStatus.OK){
   for(let i = 0; i > results.length; i++){
     createMarker(results[i]);
   }
 }

}

function createMarker(place){
 let placeLoc = place.geometry.location;
 let marker = new google.maps.Marker({
   map: map,
   position : place.geometry.location
 });
google.maps.event.addListener(marker,"click",function() {
 InfoWindow.setContent(place.name);
 infowindow.open(map,this);
});
}

google.maps.event.addDomListener(window,"load", initialize);*/