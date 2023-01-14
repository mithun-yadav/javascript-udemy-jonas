'use strict'
// let age= [34,56,78,12];
// let peoplesAge = ["Mithun","Asha","Krishna","Shweta"];
// peoplesAge=age;
// console.log(peoplesAge);

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
    name:'Classico Italiano',
    lacation:'Via Angelo Tavanti 23, Firenze, Italy',
    categories : ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu : ['Focaccia', 'Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],

    order: function(staterIndex,mainIndex){
        return [this.starterMenu[staterIndex],this.mainMenu[mainIndex]]
    },
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
      //destructuring of long argument object
    //   orderDelivery: function({staterIndex,mainIndex,time,address}){
    //       console.log(
    //         `Order recived! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    //       )
    //   }
    
    //set default
    orderDelivery: function({staterIndex,mainIndex=1,time='18:00',address}){
        console.log(
          `Order recived! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        )
    }
};

restaurant.orderDelivery({
    time:'22:45',
    address: 'west chowbaga',
    staterIndex:2,
    mainIndex:2
});
restaurant.orderDelivery({
    address: 'Gariahat',
    staterIndex:2,
})
//Destructuring
// let [first, ,second] = restaurant.categories;
// console.log(first);
// console.log(second);
// console.log(first,second);

//Normal switching variables technique
// let temp=first;
// first = second;
// second=temp;
// console.log(first,second); 

//switching the variables is easy with destructuting
// [first,second]=[second,first];
// console.log(first,second);

//destructuring function
// console.log(restaurant.order(2,0));

// const [item1,item2]=restaurant.order(2,0);
// console.log(item1,item2);

//nested destructuring
// const nested = [2,4,[5,6]];
// const [i, ,[a,b]] = nested;
// console.log([i,[a,b]]);

//Default values
// const [p,q,r]= [8,9];
// console.log(p,q,r);
// const [a,b,c=1]=[9,0]; // op--> 9 0 1
// console.log(a,b,c);

// const {thu,fri,sat}= restaurant.openingHours;
// console.log(thu,fri,sat);

//if one want to call the variable by different name
// const {thu:day1,fri:day2,sat:day3}= restaurant.openingHours;
// console.log(day1,day2,day3);

//set default values for property doesn't exist in object
// const {wed=[],thu:thursday=[],fri,sat}= restaurant.openingHours;
// console.log(wed,thursday,fri,sat);

//Mutating Variables

// let a = 111;
// let b= 999;
// const obj= {a:23,b:7,c:14};
// //const {a,b}=obj; //a,b already decleared
// //{a,b}= obj;//can't assign anything to a code block
// ({a,b}= obj); //Mutate easily
// console.log(a,b);


// Nested Objects destructuring
// const {fri:{open,close}}= restaurant.openingHours;
// //const {fri}= restaurant.openingHours;
// console.log(open,close);

//also can assign different variable
// const {fri:{open:k,close:l}}= restaurant.openingHours;
// console.log(k,l)

//------------||---------------//

