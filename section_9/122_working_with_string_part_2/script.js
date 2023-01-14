'use strict'

//properties quite similar to array properties
const airPlane = 'Hey there i am aeroplane';
const plane = 'A320';


console.log(airPlane.toLowerCase());  //hey there i am aeroplane
console.log(airPlane.toUpperCase());  //HEY THERE I AM AEROPLANE

//const myName = 'miTHun'; //want output Mithun

//const firstletter = (myName.slice(0,1)).toUpperCase();

// const firstletter = myName[0].toUpperCase();
// const restletter = (myName.slice(1)).toLowerCase();
// console.log(firstletter+ restletter);

//--------------or------------------//

// function correctName(myName){
//   const firstletter = myName[0].toUpperCase();
//   const restletter = (myName.slice(1)).toLowerCase();
//   console.log(firstletter+ restletter);
// }
// correctName('hEllo');

const str1 = '  HelloFiGGy  '
//console.log(str1.trim()); //remove initial and ending spaces
console.log(str1.trimStart()); //from es6 2019 remove initial
console.log(str1.trimEnd()); //remove ending spaces
console.log(str1.toLowerCase().trim());

//replace letter
let priceIn = '5767@';
let priceUs = priceIn.replace('@','$');
console.log(priceUs);

//replace word (replace method is also casesensitive)
let airPort = 'All passengers must come to door 23 not in door 32';
//let corrAirPort = airPort.replace('door','gate'); //first door will be replaced
//let corrAirPort = airPort.replaceAll('door','gate'); //replace all door
let corrAirPort = airPort.replace(/door/g,'gate'); //replace all door with the help of regular expression.
console.log(corrAirPort); 

//Three method retun boolean 1) includes 2) startsWith 3) endsWith 

const school = 'Andrews high school';
// console.log(school.includes('high')); //true
// console.log(school.includes('calcutta')); //false

console.log(school.startsWith('And'));
console.log(school.endsWith('ool'));
console.log(school.endsWith('vidyalaya'));

//use cases examples
const evaluate = school.startsWith('And') && school.endsWith('ool') ? 'Yes, it is your school' : 'No, it is not your school';
console.log(evaluate);

//use cases example

const checkPassengersItem = function(items){
   const lowerItem = items.toLowerCase();
   const decision = lowerItem.includes('knife') || lowerItem.includes('ciggrates')? console.log('Not Allowed'):console.log('Welcome Abroad!!');
}

checkPassengersItem('I have a laptop,Food,Pocket Knife')
checkPassengersItem('I have a mobile and a laptop');
checkPassengersItem('I have a watch and Ciggrates');

