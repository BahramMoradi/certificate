
var map;
var watcher;
var geo;

window.initMap=function(){

    var mapOptions = {
        center: {lat: 55.5185192, lng: 15.7812413},
        zoom: 5
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.addListener('zoom_changed', function () {
        zoom = map.getZoom();
    });
};
window.onload=function(){

  loadFromLoacalStorage();
  document.getElementById('addBtn').onclick=function(){
    localStorage.setItem(document.getElementById('key').value,document.getElementById('note').value);
    loadFromLoacalStorage();
  }


  /*appCache section*/
  var appCache = window.applicationCache;
  appCache.oncached = function (e) { alert("cache successfully downloaded."); };
  appCache.onupdateready = function (e) { appCache.swapCache(); };

  /*geo location*/


/*

var geoLocator = window.navigator.geolocation;
var posOptions = {enableHighAccuracy:true, timeout:45000}
geoLocator.getCurrentPosition(successPosition,errorPosition,posOptions);
*/
}
/*
function successPosition(pos){
alert(pos)
var latitude=pos.coords.latitude;
var longitude=pos.coords.longitude;
var p=document.createElement('p');
p.innerText='Latitude: '+latitude+'  Longitude: '+longitude;
document.getElementById('geoResult').appendChild(p);

var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            title: "Your position"

        });

marker.setMap(map);

}
function errorPosition(pos){
alert(pos)
}

*/

/*wathc position*/





function loadFromLoacalStorage(){
  var div=document.getElementById('tableDiv');
  div.innerHTML='';
  var tbl=document.createElement('table')
  tbl.setAttribute("class","kvTable");
  var tr=document.createElement('tr');
  var kth=document.createElement('th');
  var vth=document.createElement('th');
  var ath=document.createElement('th');
  kth.innerText="Key";
  vth.innerText="Value";
  ath.innerText="Action";
  tr.appendChild(kth);
  tr.appendChild(vth);
  tr.appendChild(ath);







  if (localStorage.length > 0) {
    tbl.appendChild(tr);

    for (var i = 0; i < localStorage.length; i++) {
            var row = document.createElement("tr");
            var key = document.createElement("td");
            var val = document.createElement("td");
            var btd=document.createElement("td");
            var rmv='<button type="button" name="button" class="rmvBtn"  id='+localStorage.key(i)+' onclick="remove(this.id)"></button>'
            btd.innerHTML=rmv;
            key.innerText = localStorage.key(i);
            val.innerText = localStorage.getItem(key.innerText);
            row.appendChild(key);
            row.appendChild(val);
            row.appendChild(btd);
            tbl.appendChild(row);

    }
    div.appendChild(tbl);
  }
  else {

  }

}
function remove(id){
  localStorage.removeItem(id);
  loadFromLoacalStorage();
}



/* geo watcher*/

function startWatcher(){
  geo=window.navigator.geolocation;
  var posOptions = {enableHighAccuracy: true,timeout: 45000};
  watcher=geo.watchPosition(successCallback, errorCallback, posOptions);
}

function successCallback(pos){
 createMarker(pos);
// addToTable(pos);
addToWatchDiv(pos);


}

function addToWatchDiv(pos){
var p = document.createElement('p');
  p.innerText='Longitude: '+pos.coords.longitude+' Latitude: '+pos.coords.latitude;
  document.getElementById('positionData').appendChild(p);

}

function errorCallback(err){
  alert(err.message+' '+err.code);
}





function createMarker(pos){
  var marker = new google.maps.Marker({
              position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
              title: "Your position "

          });

  marker.setMap(map);
}

function watcherAction(id){
  if(id=='startWatcher'){
    startWatcher();
  }
  else{
    geo.clearWatch(watcher);
  }
}
