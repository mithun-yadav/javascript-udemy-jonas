'use strict';
const calcAverage= (score1,score2,score3)=>(score1+score2+score3)/3;

const dolphinAvg= calcAverage(85,54,41);
const koalasAvg= calcAverage(23,1034,27);

function checkWinner(dolphinAvg,koalasAvg){
   if(dolphinAvg>=2*koalasAvg){
    console.log(`Dolphin wins (${dolphinAvg} vs. ${koalasAvg})`)
   }
   else if(koalasAvg>=2*dolphinAvg){
    console.log(`Koalas wins (${koalasAvg} vs. ${dolphinAvg})`)
   }else{console.log("No one is winner")}
}

checkWinner(dolphinAvg,koalasAvg);