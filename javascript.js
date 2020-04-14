var playing=false;
var score;
var action;
var timeremaining;
var correctanswer;

document.getElementById("startreset").onclick=function(){
    if (playing==true){
        location.reload();
    }else{
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        generateQA();
        show("timeremaining");
        hide("gameover");
        timeremaining=30;
        document.getElementById("startreset").innerHTML="Reset Game";
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        startcountdown();
    }
}


for(i=1;i<5;i++){
       document.getElementById("box"+i).onclick=function(){
        if(playing==true){
            if(this.innerHTML==correctanswer){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000);
                generateQA();
            }else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000);
            }
        }
    } 
}




function startcountdown(){
    action=setInterval(function(){
        timeremaining-=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0){
            stopcountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML="<p>Game Over</p><p>Your score is "+score+".</p>"
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game";
        }
    },1000);
}

function stopcountdown(){
    clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display="none";
}

function show(Id){
    document.getElementById(Id).style.display="block";
}

function generateQA(){
    var x= Math.round(9*Math.random())+1;
    var y= Math.round(9*Math.random())+1;
    correctanswer=x*y;
    document.getElementById("question").innerHTML=x+"x"+y;
    var correctposition= Math.round(3*Math.random())+1;
    document.getElementById("box"+correctposition).innerHTML=correctanswer;
    
    var answers = [correctanswer];
    
    for(i=1;i<5;i++){
        if(i!=correctposition){
            var wrongAnswer;
            do{
                wrongAnswer=Math.round(99*Math.random())+1;
                
            }while(answers.indexOf(wrongAnswer)>-1)
                
            document.getElementById("box"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}