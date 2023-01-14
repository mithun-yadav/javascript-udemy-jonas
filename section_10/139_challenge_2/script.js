'use strict';

// Example 1

// let f;

// const g = function(){
//     let a =23;
//     f= function(){ // here f can use all variables which is in parent scope inspite of being vanish from execution context
//       console.log(a*2);
//     }
// }

// g();
// f();
// console.dir(f);


// const h = function(){
//     let a =100;
//     f= function(){
//       console.log(a*2);
//     }
// }

// //Re-assigning function
// h();
// f();
// console.dir(f);

// //Example 2

// const boardPassengers = function(n,wait) {
//    const perGroup = n/3;

//    setTimeout(function(){ // clouser also get acces to its parent variable scope after some delay
//       console.log(`We are now boarding all ${n} passengers`);
//       console.log(`There are 3 groups, each with ${perGroup} passengers`);
//    },wait*1000);

//    console.log(`Will start boarding in ${wait} second`);
// };

// const perGroup = 500; // closure is at higher priority than scope chain this prepGroup not being used. It will only get used when there is no prepGroup in closure itself
// boardPassengers(180,3);

// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge �
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that 
// changes the color of the selected h1 element ('header') to blue, each time 
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all 
// the time you need. Think about when exactly the callback function is executed, 
// and what that means for the variables involved in this example.
 (function () {
 const header = document.querySelector('h1');
 header.style.color = 'red';

 const h= function(){
  header.style.color='blue';
 }
 document.body.addEventListener('click',h);
 })();
//GOOD LUCK �
