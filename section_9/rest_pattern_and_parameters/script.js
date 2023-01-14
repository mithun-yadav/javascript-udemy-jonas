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
  orderPizza: function(mainIngrediant, ...otherIngrediants){
            console.log(mainIngrediant);
            console.log(otherIngrediants);
  }
};

//-----------------------|||-------------------------//
//we can use spred operator on both side of assignment operator

// spread, because on right side of equal to

const arr = [2,5,...[4,6,8]];
console.log(arr);

// Rest, because on left side of equal to

// const [a,b,...c]=[1,2,3,4,5];
// console.log(a,b,c);

//rest element should be at last and only one rest element in a destructuring
const [pizza, ,restito,...otherFoods]=[...restaurant.mainMenu,...restaurant.starterMenu]
console.log(pizza,restito,otherFoods);

//rest for objects

const {sat,...weekdays}= restaurant.openingHours;
console.log(sat,weekdays);

const {categories,...restObj}= restaurant;
console.log(categories,restObj);

const add = function(...numbers){
    let sum=0;
    for(let i=0; i<numbers.length;i++){
        sum +=numbers[i];
    }
    console.log(sum);
    //console.log(numbers);
}

//sum of any arguments enter
add(2,4,5);
add(7,8,9,0,7);
add(3,5,6,7,1);

// const [...num] =[5,6,7];
// console.log(num);

//sum any given array
const x=[2,6,8,9];
add(...x);

restaurant.orderPizza("onion","mashrooms","olives","spinach")
restaurant.orderPizza("onion"); //onion []