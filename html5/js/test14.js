var correct={
  Q1:"C",
  Q2:"C",
  Q3:"B",
  Q4:"A",
  Q5:"B"
}

var answers={}

function check(id){
var question=id.split("-")[0];
var option=id.split("-")[1];
answers[question]=option;


if(correct[question]==option){
document.getElementById(question).style.backgroundColor="#0F0";
}
else{
  document.getElementById(question).style.backgroundColor="#F00";
}

}
