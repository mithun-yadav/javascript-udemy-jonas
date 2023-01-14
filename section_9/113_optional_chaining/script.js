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
  // order(staterIndex, mainIndex){
  //   return [this.starterMenu[staterIndex],this.mainMenu[mainIndex]];
  // },
  order(name){
    return `Hello ${name}`;
  },
};

// optional chaining

//mon does not exist so nothing print
// if(restaurant.openingHours.mon){
//   console.log(restaurant.openingHours.mon.open); 
// }

//fri exist so print 11
// if(restaurant.openingHours.fri){
//   console.log(restaurant.openingHours.fri.open);
// }

//----------optional chaining of object property-----------//

// //console.log(restaurant.openingHours.mon.open); //restaurant.openingHours.mon --> undefine and undefine.open --> give error

//console.log(restaurant.openingHours.mon ?.open); // if restaurant.openingHours.mon exist then .open will apply otherwise undefine
// console.log(restaurant.openingHours ?.mon ?.open); // if restaurant.openingHours exist then .mon will be applied and if .mon exist then .open applied

// const days = ["mon","tue","wed","thu","fri","sat","sun"];

// for (const item of days) {
//   //const openAt = restaurant.openingHours ?.[item] ?.open;
//   const openAt = restaurant.openingHours ?.[item] ?.open ?? "closed"; //if .open not exist put "closed" insted of undefined
//   console.log(`on ${item}, we open our shop at ${openAt}`);
// }

//-------------optional chaning for method-----------------//
// console.log(restaurant.order ?.("Pasta") ?? 'order method is not available');

console.log(restaurant.order ?.('mithun') ?? 'You not ordered till now');
//  console.log(undefined ?? 'Hello');
//  console.log(0 ?? 'Hello');

// console.log(restaurant.ordered ?.("Pasta") ?? 'order method is not available'); //print 'order method is not available' since ordered not define 
 
//-------------general query----------------//
// function hello(){
//   return "Mit";
// }

// console.log(hello()); //only hello() does not give anything

// function hello(){
//   "Mit";
// }

// console.log(hello()); //gives undefined

// function hello(){
//   return console.log("Mithun");
// }

// console.log(typeof(hello())); //gives undefined because type of console.log is undefined

//----------optional chaining of Array-----------//

const users =[{fName:'jonas',email:'mithun@gmail'}];
console.log(users ?.[1]?.fName ?? `somthing not define`)


