/*global variable for all functions*/





window.onload = function () {
 var top=document.getElementById('topText');
 var left=document.getElementById('leftText');
 var pos=document.getElementById('positioning');
 document.getElementById('btnPosition').onclick=function(){

 var div2=document.getElementById('d2');
 div2.style.position=pos.value;
 div2.style.top=top.value+"px";
 div2.style.left=left.value+"px";
 }
/*
 document.getElementById('box1').onclick=function(){
   this.classList.add('rota');*/
/*
   document.getElementById('btnTransform').onclick=function(){
     var rot=document.getElementById('transform').value;
     document.getElementById('box1').style.transform= 'rotate('+rot+'deg)';


 }*/






 document.getElementById('displayBtn').onclick=function(){
 if(document.getElementById('displayHideShowBox').style.display=='' ||
  document.getElementById('displayHideShowBox').style.display=='block'){
     document.getElementById('displayHideShowBox').style.display='none';

   }else{
         document.getElementById('displayHideShowBox').style.display='block';
   }

 }




 document.getElementById('visibilityBTN').onclick=function(){
   if(document.getElementById('visibilityBox').style.visibility =='hidden'){
     document.getElementById('visibilityBox').style.visibility ='visible';

   }else{
      document.getElementById('visibilityBox').style.visibility ='hidden';
       console.log( document.getElementById('visibilityBox').style.visibility);
   }
 }



}

function showOrHideJquery(){
  $('#displayHideShowBox').toggle(2000);
}

function rotateBox(event){
   document.getElementById('box1').style.transform= 'rotate('+event.target.value+'deg)';
}
function scaleBox(event){
  var scaleType=document.getElementById('scaleType').value;
  switch (scaleType) {
    case 'Scale':
      document.getElementById('box1').style.transform= 'scale('+event.target.value+')';
      break;
    case 'Scale X':
      document.getElementById('box1').style.transform= 'scaleX('+event.target.value+')';
    break;
    case 'Scale Y':
    document.getElementById('box1').style.transform= 'scaleY('+event.target.value+')';
    break;
    default:

  }

}
 function translateBox(){
   var x=document.getElementById('translateX').value;
   var y=document.getElementById('translateY').value;
   var box=document.getElementById('translateBox');
   //box.style["-webkit-transform"] = "translate("+x"px,"+ y +"px)";
   //box.style["-moz-transform"] = "translate("+x+"px," + y +"px)";
   //box.style["-ms-transform"] = "translate("+x+"px" + y + "px)";
   //box.style["-o-transform"] = "translate("+x+"px," + y + "px)";


 }


 function combinedTransformation(){
   var tx=document.getElementById('xtranslate').value;
   var ty=document.getElementById('ytranslate').value;
   var xs=document.getElementById('scaleX').value;
   var ys=document.getElementById('scaleY').value;
   var xskew=document.getElementById('xskew').value;
   var yskew=document.getElementById('yskew').value;
   var box=document.getElementById('combinedTransform');
   box.style.transform='translate('+tx+'px,' + ty + 'px) scale('+xs+','+ys+') skew('+xskew+'deg,'+yskew+'deg)';


 }




function skewBox(){
  var x=document.getElementById('skewX').value;
  var y=document.getElementById('skewY').value;
  var box=document.getElementById('skewBox');
  box.style["transform"] = "skew("+x+"deg," +y+ "deg)";
}




/*
var x=0;
var y=0;
var box=document.getElementById('translateBox');

 document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //alert('left');
            x-=2;
            //left
        case 38:
            y-=2;
            //up
            break;
        case 39:
            x+=2;
            //right
            break;
        case 40:
            y+=2;
           //down
            break;
    }
    box.style["transform"] = "translate("+x+"px," + y + "px)";
};
*/
