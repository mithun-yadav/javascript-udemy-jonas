'use strict'

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
    orderPizza: function(mainIngrediant, ...otherIngrediants){
              console.log(mainIngrediant);
              console.log(otherIngrediants);
    }
  };

console.log("--------OR----------");
console.log(3 || 'jonas'); //3
console.log('' || 'jonas'); //jonas
console.log(true || 0); //true
console.log(undefined || null); //null
console.log(undefined || 0 || '' || 'Hello' || 23 ||null); //Hello
console.log(0||null); //all falsy so return last value

// restaurant.numGuest = 23;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

console.log("--------AND----------");

console.log(0 && 'jonas'); //0
console.log(7 && 'jonas'); //jonas
console.log(23&&37) //23;

console.log('Hello' && 23 && null && 'jonas'); //null

if(restaurant.orderPizza){
    restaurant.orderPizza('mushrooms', 'spinach');
}

//same as if statement but very short
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

true && console.log("Hello");

//just for fun
const {thu:{open,close},fri,sat} = restaurant.openingHours;

//const {open,close} =thu;
console.log(open,close);

open===12 && console.log("Chalo Open hai")

//--------------|||-------------//
//Nullish coalescing operator
//it works on null and undefine values not falsy values (like 0,'')

// restaurant.numGuest = 0;
restaurant.numGuest = 0;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest ?? 10;
console.log(guest2);

null ?? console.log("Nullish Coalescing");
undefined ?? console.log("Nullish Coalescing");
0 ?? console.log("Nullish Coalescing"); //not evaluate right side


