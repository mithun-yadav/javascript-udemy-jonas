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

    ingediants:function(ingeriant1,ingeriant2,ingeriant3){
          console.log(`Here is your delicious pasta with ingeridants ${ingeriant1} ${ingeriant2} ${ingeriant3}`)
    }
  };

const arr = [1,4,6];
const badNewArr = [5,8,arr];  //[5, 8, Array(3)]
const NewArr = [7,0,arr[0],arr[1],arr[2]]
const sameNewArr = [7,0,...arr];  //[7, 0, 1, 4, 6] spred operator
// console.log(sameNewArr);
// console.log(NewArr);

//console.log(...sameNewArr); // 7 0 1 4 6 same as writting console.log(7 ,0, 1, 4, 6)
 
const newMenu = [...restaurant.mainMenu,"Coal drink"];
//console.log(newMenu);

//copy array
const newMenuCreate = [...restaurant.mainMenu];
console.log(newMenuCreate);

//join 2 array
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

//spread operator work on array,string,map,set not in object 

const str = 'Jonas';
const letter = [...str, ' ','M'];
console.log(letter);

//console.log(`${...str} Mithun`); // error, multiple values seperated by comma not expected in template literals only expexted in array or argument passed in a function

//const ingediantsName = [prompt("put ingediant1 Name"),prompt("put ingediant2 Name"),prompt("put ingediant3 Name")]

//restaurant.ingediants(...ingediantsName);

//Object is spread from js 2018 edition

const newRestaurant = {foundedIn:2027,...restaurant,founder:"Mithun"};
//console.log(newRestaurant);

//easily make copy of object

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Hindustan Dhaba';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const newRestaurantByClassical = Object.assign({},restaurant);
// console.log(newRestaurantByClassical); 