

var qs={};
window.onload = function () {
 initMap();
 // first hid all questions


 document.getElementById('startBtn').onclick=function(){
   hideQuestions();
   document.getElementById('q1').style.display='block';
 }

}
function hideQuestions(){
  var questions=document.getElementsByClassName('question');
  for (var question of questions){
    question.style.display='none'
  }

  var radioBtns=document.getElementsByTagName('input');
  for(var radio of radioBtns){
    if(radio.getAttribute('id').indexOf('q')!=-1){
      radio.checked=false;
    }
  }
}


function check(element){
     var answerID=element.getAttribute('id');
     var currentQuestionID=element.parentNode.parentElement.getAttribute('id');
     var nextQuestionID=answerID.substring(2)=="y" ? qs[currentQuestionID].yes:qs[currentQuestionID].no;
     document.getElementById(currentQuestionID).style.display='none';
     document.getElementById(nextQuestionID).style.display='block';
     console.log('current question ID : '+currentQuestionID);
     console.log('current answer ID : '+answerID);
     console.log('next question ID : '+nextQuestionID);
}

function initMap(){
      qs['q1']=new Question('q2','q3');
      qs['q2']=new Question('q4','q5');
      qs['q3']=new Question('q6','q6');
      qs['q4']=new Question('q10','q10');
      qs['q5']=new Question('q10','q10');
      qs['q6']=new Question('q7','q8');
      qs['q7']=new Question('q9','q9');
      qs['q8']=new Question('q9','q9');
      qs['q9']=new Question ('q10','q10');
      qs['q10']=new Question ('end','end');

}
function Question(yes,no){
  this.yes=yes;
  this.no=no;
}
