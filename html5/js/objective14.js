window.onload=function(){
  loadFromLoacalStorage();
  document.getElementById('addBtn').onclick=function(){
    localStorage.setItem(document.getElementById('key').value,document.getElementById('note').value);
    loadFromLoacalStorage();
  }

}

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
