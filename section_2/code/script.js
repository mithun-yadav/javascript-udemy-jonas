'use strict';

/* 
//error
const hasDrivesLicense = false;
const passTest = true;

if(passTest) hasDriveLicense = true;
if(hasDrivesLicense)console.log('I can drive');
*/
/*
function logger(){
    console.log("My name is jonas");
}

logger();
logger();
logger();
*/

/*
function fruitProcessor(fruit1,fruit2){
    console.log(fruit1,fruit2);
    const juice=`Here is the juice of ${fruit1} and ${fruit2}`
    return juice;
}

let fruitJuice=fruitProcessor("apple","pineapple");
console.log(fruitJuice);
console.log(fruitProcessor("papaya","coconut"))

*/

//anaynomus function
/*
const age= function (birthYear){
    return 2022-birthYear;
}

console.log(age(1998))

*/

//Arrow function
/*
const age = birthYear=> 2022-birthYear;
console.log(age(1998));
*/

//function calls another function

// function cutFruitPices(fruit){
//     return fruit*4;
// }

// function furitProcessor(apple,oranges) {
//     const applePices = cutFruitPices(apple);
//     const orangePices = cutFruitPices(oranges);

//     const juice=`juice with ${applePices} picces of apple and ${orangePices} pices of oranges`;
//     return juice;
//     //code after return just got ignored
//     console.log("Hello");
// }

// console.log(furitProcessor(2,3));

//New way to define an array

/*
const friends = new Array("Mit","Asha","Krishna");
console.log(friends[2]);
*/

/*
const description = {
    firstName:"Mithun",
    lastName:"Yadav",
    age:24
}

let nameKey="Name";
let first = "firstName";
console.log(description.firstName);
console.log(description['last'+nameKey]);
console.log(description.first);//undefined,  only exact value in dot notation
*/

/*
const randArray =["Mithun", 23,true,"Yadav",["hello",19]];

for(let i=0;i<randArray.length;i++){
    if(typeof(randArray[i])!=='string')continue;
    console.log(randArray[i]);
}
console.log("---------Break----------")
for(let i=0;i<randArray.length;i++){
    if(typeof(randArray[i])!=='string')break;
    console.log(randArray[i]);
}
*/

// const randArray =["Mithun", 23,true,"Yadav",["hello",19]];
//printed reverse array
/*
const newArray=[]
for(let i=0;i<randArray.length;i++){
   newArray.unshift(randArray[i])
}
console.log(newArray);
*/

/*
const randArray =["Mithun", 23,true,"Yadav",["hello",19]];
const newArray=[];
for(let i=randArray.length-1;i>0;i--){
    newArray.push(randArray[i])
 }
 console.log(newArray);
 */

 /*
 let i=1;

 while(i<6){
    console.log(i);
    i++;
 }
*/

/*
let dice= Math.trunc(Math.random()*6+1);
while(dice!==6){
    console.log(`You rolled ${dice}`);
    dice= Math.trunc(Math.random()*6+1);
    if(dice===6)console.log('Rolled 6 out');
}
*/

//average of an array

/*
function calcAvrage(givenArray){
    // let givenArray= [20,30,80,50,80,100];
    let totalSum=0;
    for(let i=0;i<givenArray.length;i++){
        totalSum= totalSum+givenArray[i];
    }
    
    const avg= totalSum/givenArray.length;
    // console.log(avg);
    return avg;
}
let val= calcAvrage([20,30,80,50,80,100])
console.log(val);
*/

