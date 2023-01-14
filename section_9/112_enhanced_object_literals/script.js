'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const weekDays = ["mon","tue","wed","thus","fri"];
  const openingHours= {

    //we can compute property name insted of just manually type
    [weekDays[3]]: {
      open: 12,
      close: 22,
    },
    [weekDays[4]]: {
      open: 11,
      close: 23,
    },
    [`day-${2+3}`]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // if one want to include any outside object inside of an other object this syntax used before ES6
  //openingHours : openingHours,
  //but after ES6 the syntax is
  openingHours,

  //setting function expression to a parameter become lot easy after ES6
  //before ES6
  // writeName: function (name){
  //   console.log(name);
  // }
  //after ES6
  writeName(name){
    console.log(name);
  }
};

console.log(restaurant);
restaurant.writeName("Mithun");
