'use strict';

//console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent="Congratulations";
// document.querySelector(".guess").value=23;

let secretNumber = Math.trunc(Math.random()*20 + 1);
let score=20;
let changeHighScore=0;
document.querySelector(".check").addEventListener("click",function(){
    let guess=Number(document.querySelector(".guess").value);

    const displayMessage = function(message){
        document.querySelector(".message").textContent=`${message}`;
    }

    if(!guess){
        //document.querySelector(".message").textContent="📍 No Number!";
    }else if(guess===secretNumber){
        //document.querySelector(".message").textContent="🎊 Correct Number!";
        displayMessage("🎊 Correct Number!");
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector("body").style="background-color:green";//document.querySelector("body").style.backgroundColor="green";
        document.querySelector(".number").style.width="30rem";
        if(score>changeHighScore){
            changeHighScore=score;
            document.querySelector(".highscore").textContent=changeHighScore;
        }
    }
    //when guess is not equal
    else if(guess !== secretNumber){
        if(score>1){
            //document.querySelector(".message").textContent=(guess < secretNumber)?"🧨 Too Low!":"🧨 Too High!";
            displayMessage((guess < secretNumber)?"🧨 Too Low!":"🧨 Too High!")
            score--
            document.querySelector(".score").textContent=score;
        }else{
            //document.querySelector(".message").textContent="🎃 YOU LOST!!!";
            displayMessage("🎃 YOU LOST!!!")
            score--
            document.querySelector(".score").textContent=score;
            document.querySelector("body").style="background-color:green";//document.querySelector("body").style.backgroundColor="green";
            document.querySelector(".number").style.width="30rem";
        }
    }
    //when guess is too Low
    // else if(guess<secretNumber){
    //     if(score>1){
    //         document.querySelector(".message").textContent="🧨 Too Low!";
    //         score--
    //         document.querySelector(".score").textContent=score;
    //         //console.log(document.querySelector(".score").textContent)
            
    //     }else{
    //         document.querySelector(".message").textContent="🎃 YOU LOST!!!";
    //         score--
    //         document.querySelector(".score").textContent=score;
    //         document.querySelector("body").style="background-color:green";//document.querySelector("body").style.backgroundColor="green";
    //         document.querySelector(".number").style.width="30rem";
    //     }
    // }
    // //when guess is too High
    // else if(guess>secretNumber){
    //     if(score>1){
    //         document.querySelector(".message").textContent="🧨 Too High!";
    //         score--
    //         document.querySelector(".score").textContent=score;
    //     }else{
    //         document.querySelector(".message").textContent="🎃 YOU LOST!!!";
    //         score--
    //         document.querySelector(".score").textContent=score;
    //         document.querySelector("body").style="background-color:green";//document.querySelector("body").style.backgroundColor="green";
    //         document.querySelector(".number").style.width="30rem";
    //     }
    // }
})

document.querySelector(".again").addEventListener("click",function(){
    secretNumber = Math.trunc(Math.random()*20 + 1);
    score=20;
    document.querySelector(".score").textContent=score;
    document.querySelector(".message").textContent="Start gussing...";
    document.querySelector(".guess").value="";
    document.querySelector(".number").textContent='?';
    document.querySelector("body").style="background-color:#222";
    document.querySelector(".number").style.width="15rem";
})