'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


//map manully formation

const question = new Map([
  ['question','what is the best programming language in the world'],
  [1,'C'],
  [2,'Java'],
  [3,'Javascript'],
  ['correct', 3],
  [true,'Correct🎉'],
  [false,'Try agian!'],
]);

console.log(question);

//convert object to map 
//console.log(Object.entries(restaurant.openingHours)); //this will make a array of arrays which is require for map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
//console.log(hoursMap);

//print if key is number

for(const [key,value] of question){
  if(typeof(key)=== 'number'){
    console.log(`Answers ${key}: ${value}`);
  }
  //console.log(typeof(key));
}

console.log(question.get('question'));

//const ans = Number(prompt("Enter answer"));
//console.log(typeof ans); // string
// if(ans===question.get('correct')){
//   console.log(question.get(true));
// }else{console.log(question.get(false))};

//simplify above code
//console.log(question.get(question.get('correct')===ans));

//map back to array
console.log([...question]);

//give keys, values and entries
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);