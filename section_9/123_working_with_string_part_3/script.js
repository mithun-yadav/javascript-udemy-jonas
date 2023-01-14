'use strict'


//------------start----------------//

//split method split from the given letter
console.log('My+nmae+Mithun+Yadav'.split('+')); // ['My', 'nmae', 'Mithun', 'Yadav']
console.log('Mithun Yadav'.split(' ')); // ['Mithun', 'Yadav']
const [fName,lName] = 'Mithun Yadav'.split(' '); //destructuring by spliting at space
//console.log(fName,lName);

//lastName upperCase and mr. in begining
//console.log(`Mr. ${fName} ${lName.toUpperCase()}`);

//same by join method which join all the string with space
const newString = ['Mr.' ,fName, lName.toUpperCase()].join(' ');
console.log(newString); //Mr. Mithun YADAV

//same by join method which join all the string with hyphen
const newString1 = ['Mr.' ,fName, lName.toUpperCase()].join('--');
console.log(newString1); //Mr.--Mithun--YADAV


//capitalize the first letter of any name(fName or lName)
const capitalizeName = function(name){
   const names = name.split(' ');
   const namesUpperCase = [];
   for(const n of names){
      //namesUpperCase.push(n[0].toUpperCase()+n.slice(1));
      //one more way to do by replace method
      namesUpperCase.push(n.replace(n[0],n[0].toUpperCase()));
   }
   console.log(namesUpperCase.join(' '));
   };

   capitalizeName('mithun yadav');
   capitalizeName('asha yadav');


//padding a string : add number of character to a string until it has certain desired length.

const learnPadding = 'Go to gate no. 23';
console.log(learnPadding.padStart(25,'+').padEnd(30,'+'));
console.log('Mithun'.padEnd(25,'+'));

//practicle exmple
const hideCreditNum = function(creditNum){
   // const creditNum = '2345123452098658';
   const changeIntoString = creditNum + '';
   const lastFourDigit = changeIntoString.slice(-4);
   return (lastFourDigit.padStart(changeIntoString.length,'*'));
}

console.log(hideCreditNum('2345123452098658'));
console.log(hideCreditNum(234512345209868));

//Important Note:
console.log(typeof(23+'')); // if one of the operand of + sign is a string then result will be string
console.log(typeof(23+56)); // Number

//Reapt

const message2 = 'Bad weather... All Departures Delayed....';
console.log(message2.repeat(5)); // string repeat to 5 times

const planeInLine = function(n){
   console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
}
planeInLine(5);
planeInLine(10);