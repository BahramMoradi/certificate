
var video;
var ctxt;


window.onload = function () {

var outerdiv=document.getElementById('outerDiv');
//alert(outerdiv.innerHTML);
//outerdiv.style.backgroundColor="#0F12F0";

//selectiong all p
var ps=document.getElementsByTagName("p");;
//alert(ps.length);

for(var p of ps){
  //alert(p.innerHTML);
//  p.innerHTML='Hello world from javascript';
//alert(p.getAttribute('class'));
}

// using getElementByClassName

var subs=document.getElementsByClassName('subPara');
//alert(subs.length);
for (var p of subs){
  //p.style.backgroundColor="#900098";
}


//

var outer=document.getElementById('outerDiv');
var mainP=document.getElementById('outerDiv').childNodes[1];
//alert(mainP.innerHTML)
document.getElementById('outerDiv').childNodes[1].style.backgroundColor="#F00";
outer.removeChild(mainP);

var form=document.createElement('form');
var input=document.createElement('input');
var attName=document.createAttribute('name');
var attClass=document.createAttribute('class');
attClass.value='custom';
attName.value='name';
input.setAttributeNode(attClass);
input.setAttributeNode(attName);
form.appendChild(input);
outer.appendChild(form);

//a simpler  method

var in2='<input type="text" name="abc" class="custom">';
outer.innerHTML+=in2;


//
var art=document.createElement('article');
art.innerHTML='My newly created article <article> with java script';

document.getElementById('outerDiv').appendChild(art);

//or

var elem=document.getElementById('outerDiv').appendChild(document.createElement('article'));
elem.innerHTML='It is wonderful...';


document.getElementById('innerDiv').innerHTML+='<input type="date" name="birthday">';
document.getElementById('innerDiv').innerHTML+='<input type="range"  min="0" max="100" name="abc">';
document.getElementById('innerDiv').innerHTML+='<input type="number"  min="0" max="100" name="blabla">';

//inserting with befor method

var newDiv=document.getElementById('outerDiv').insertBefore(
  document.createElement('div'),
  document.getElementById('innerDiv'));
newDiv.innerHTML+='add dynamicaly via javascript <br> <input type="date" name="birthday">';

document.getElementById('innerDiv').style.backgroundColor='#F00F00'
if(document.getElementById('innerDiv').hasChildNodes){

var ndi=document.getElementById('innerDiv').insertBefore(
  document.createElement('div'),
  document.getElementById('innerDiv').firstChild
  );
  ndi.innerHTML+='<input type="range" min="0" max="100" name="birthday">';
}





/*
removing element from DOM
*/
 /**
  * removing and inserting back the dom object
  */
var p1=document.getElementById('P1');
var removed=document.getElementById('innerDiv').removeChild(p1);


document.getElementById('innerDiv').insertBefore(
  removed,
  document.getElementById('P2')
);

/**
 Another useful method for removing nodes or elements is removeNode, which takes one
Boolean parameter. Setting the parameter as true tells the method to do a deep removal,
which means that all children are also removed.
 */


var indiv=document.getElementById('innerDiv');
//indiv.removeNode(true);

/**
 * Rplace node and replace child
 */
var innerDiv=document.getElementById('innerDiv');
var newDiv=document.createElement('div');
var tech=[
  'http://www.w3schools.com/js/default.asp',
  'http://www.w3schools.com/css/default.asp',
  'http://www.w3schools.com/html/default.asp',
  'http://www.w3schools.com/angular/default.asp'
]
var names=['Javascript','CSS','HTML','Angular'];
for(var i=0;i<tech.length;i++){

var anchar=newDiv.appendChild(document.createElement('a'));
anchar.setAttribute('href',tech[i])
anchar.text=names[i];
newDiv.appendChild(document.createElement('br'));
}

innerDiv.replaceChild(newDiv,document.getElementById('P1'));


/*Using video */
var videoTag=document.getElementById('videoElement');
videoTag.textContent='  <video src="interview.mp4" autoplay>'
video=document.getElementById('inter');




/* graphics */
var drawSurface=document.getElementById('canvas');
ctxt=drawSurface.getContext("2d");

ctxt.lineWidth=1;
ctxt.strokeStyle = '#FFFFFF';
ctxt.lineCap='round';
ctxt.fillStyle='#FF0000';

//drawLine(0,10,100,100);
//drawArc();
//drawingQuadraticArc();
//usingPath();
//manyRect();
//testGradiant();
//radialGradient();
//createPatteren();
//drawImage();
drawText();
drawFillText();



}
function play(){
  var playImg='../../img/play.png'
  var pauseImg='../../img/pause.png';
  video.play();
  var src=document.getElementById('playButton').getAttribute('src');
  if(src.indexOf('play')!=-1){
    document.getElementById('playButton').setAttribute('src',pauseImg);
  }else{
     document.getElementById('playButton').setAttribute('src',playImg);
     pause();
  }

}
function pause(){
  video.pause();
}
function back(){
  video.currentTime-=10;
}

function drawLine(sx,sy,ex,ey){
  ctxt.beginPath();
  ctxt.moveTo(sx,sy);
  ctxt.lineTo(ex,ey);
  ctxt.stroke();
}

function drawArc(){
  ctxt.beginPath();
  ctxt.arc(200,200,75,0,2*Math.PI,false);
  ctxt.lineWidth=10;
  ctxt.strokeStyle='#F00';
  ctxt.stroke();

  ctxt.beginPath();
  ctxt.arc(150, 300, 75, 1 * Math.PI, 1.5 * Math.PI, false);
  ctxt.lineWidth = 15;
  ctxt.strokeStyle = '#0ff';
  ctxt.stroke();

  ctxt.beginPath();
  ctxt.arc(450, 300, 75, .5 * Math.PI, 1 * Math.PI, false);
  ctxt.lineWidth = 15;
  ctxt.strokeStyle = '#f00';
  ctxt.stroke();
}

function drawingQuadraticArc(){



paintArc(0,0,300,400,600,0,1,'#0F0',10,5,'top');
paintArc(0,400,300,0,600,400,1,'#0F0',10,5,'bottom');
paintArc(0,0,600,200,0,400,1,'#0F0',10,5,'left');
paintArc(600,0,0,200,600,400,1,'#0F0',10,5,'right');

}
function paintArc(sx,sy,px,py,ex,ey,wth,color,loopNr,val,orintation){

  for(var i=0;i<loopNr;i++){
        ctxt.beginPath();
        ctxt.moveTo(sx,sy);
        ctxt.quadraticCurveTo(px,py,ex,ey);
        ctxt.lineWidth =wth;
        ctxt.strokeStyle = color;
        ctxt.stroke();
        switch(orintation){
          case 'top':
                sx+=2*val;
                ex-=2*val;
                py-=val;
          break;
          case 'bottom':
                sx+=2*val;
                ex-=2*val;
                py+=val;
          break;
          case 'left':
              sy+=2*val;
              ey-=2*val;
              px-=val;
          break;
          case 'right':
          sy+=2*val;
          ey-=2*val;
          px+=val;

          break;
          default:
          console.log('Wrong value of orintation');
        }
}
}

function usingPath(){
  ctxt.fillStyle='#F00';
  ctxt.beginPath();
  ctxt.arc(300, 200, 75, 1.75 * Math.PI, 1.25 * Math.PI, false);
  ctxt.lineTo(150, 125);
  ctxt.quadraticCurveTo(300, 0, 450, 125);
  ctxt.lineTo(353, 144);
  ctxt.strokeStyle = "blue";
  ctxt.lineCap = "round";
  ctxt.lineWidth = 10;
  ctxt.fill();
  ctxt.stroke();

  drawPoint(300,200,'#F00');
  drawPoint(150,125,'#F00');
  drawPoint(450,125,'#F00')
  drawPoint(353,144,'#F00')
}

function drawPoint(x,y,color){
   ctxt.strokeStyle = color;
  ctxt.beginPath();
  ctxt.arc(x, y, 1, 0, 2 * Math.PI, true);
  ctxt.stroke();
}
function manyRect(){
  drawRect(10,10,10,10);

  drawFillRect(300,200,50,50,'#F00');
  drawFillRect(320,220,50,50,'#F00');


}
function drawRect(x,y,wth,hith){
  ctxt.beginPath();
  ctxt.rect(x,y,wth,hith);
  ctxt.stroke();
}
function drawFillRect(x,y,wth,hith,color){
  ctxt.fillStyle=color;
  ctxt.fill();
  ctxt.beginPath();
  ctxt.fillRect(x,y,wth,hith);
  ctxt.stroke();
}
function Point(x,y){
  this.x=x;
  this.y=y;
}

function testGradiant(){
  ctxt.lineWidth = 3;
  ctxt.rect(150, 150, 200, 125);
  var gradient = ctxt.createLinearGradient(150, 150, 200, 125);
  gradient.addColorStop(0, "Black");
  gradient.addColorStop(0.5, "Gray");
  gradient.addColorStop(1,"White");
  ctxt.fillStyle = gradient;
  ctxt.fill();
  ctxt.stroke();
}

function radialGradient(){
  ctxt.lineWidth = 3;
  ctxt.rect(150, 150, 250, 175);
  var gradient = ctxt.createRadialGradient(200, 200,5, 250, 250,100);
  gradient.addColorStop(0, "Red");
  gradient.addColorStop(.5, "Orange");
  gradient.addColorStop(1, "Blue");
  ctxt.fillStyle = gradient;
  ctxt.fill();
  ctxt.stroke();
}
function createPatteren(){
  ctxt.lineWidth = 3;
  ctxt.rect(150, 150, 200, 125);
  var img = new Image();
  img.src = '../../img/mario.png';
  img.onload = function () {
  var pat = ctxt.createPattern(img, "repeat");
      ctxt.fillStyle = pat;
      ctxt.fill();
      ctxt.stroke();
  }
}

function drawImage(){
    var img = new Image();
    img.src = "../../img/mario.png";
    img.onload = function () {
    ctxt.drawImage(img, 300, 200);
    ctxt.stroke();
    }
}
function drawText(){
  ctxt.font = "40px arial";
  ctxt.strokeStyle = "Red";
  //ctxt.textAlign = "center";
  ctxt.strokeText("1. Text with default font", 100, 100);
}
function drawFillText(){
  ctxt.fornt="40px arial";
  ctxt.fillStyle='Yellow';
  //ctxt.textAlign='center';
  ctxt.fillText('2.Fill text with yellow color',100,200)
}
