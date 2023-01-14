/*-----------first part------------- */

/*
const dolphinFirstMatchScore = 96;

const dolphinSecondMatchScore = 108;

const dolphinThirdMatchScore = 89;


const dolphinAvg = (dolphinFirstMatchScore+dolphinSecondMatchScore+dolphinThirdMatchScore)/3;

const koalasFirstMatchScore = 88;

const koalasSecondMatchScore = 91;

const koalasThirdMatchScore = 110;

const koalasAvg = (koalasFirstMatchScore+koalasSecondMatchScore+koalasThirdMatchScore)/3;

if(dolphinAvg>koalasAvg){
    console.log("The winner is dolphin");
}else if(dolphinAvg===koalasAvg){
    console.log("The winner is Koalas");
}else{
    console.log("The winner is Koalas");
}
*/

/*-----------second part------------- */

const dolphinFirstMatchScore = 96;

const dolphinSecondMatchScore = 108;

const dolphinThirdMatchScore = 89;


const dolphinAvg = (dolphinFirstMatchScore+dolphinSecondMatchScore+dolphinThirdMatchScore)/3;

const koalasFirstMatchScore = 88;

const koalasSecondMatchScore = 91;

const koalasThirdMatchScore = 110;

const koalasAvg = (koalasFirstMatchScore+koalasSecondMatchScore+koalasThirdMatchScore)/3;

console.log(dolphinAvg,koalasAvg);

if((dolphinAvg>=100)&&(dolphinAvg>koalasAvg)){
    console.log("The winner is dolphin 🏆");
}else if((koalasAvg>=100)&&(koalasAvg>dolphinAvg)){
    console.log("The winner is Koalas 🏆");
}else if((dolphinAvg===koalasAvg)&&(dolphinAvg>=100)&&(koalasAvg>=100)){
    console.log("draw");
}else{
    console.log("No Teams wins");
}