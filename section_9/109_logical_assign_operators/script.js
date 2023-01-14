'use strict'

const rest1 = {
    name:"Gritch",
    //numGuest: 20,
    numGuest: 0, // 0 is a falsy value so 10 get printed in rest1.numGuest
}

const rest2 = {
    name:"Dhaba", 
    owner: "Mithun"
}

//-----------------||----------------//
// OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

//same code but in consice way

// rest1.numGuest ||=10;
// rest2.numGuest ||=10;
// console.log(rest1,rest2);

//---------------------||------------------------//
//Nullish  assignment operator
// rest1.numGuest= rest1.numGuest ?? 10;
// rest2.numGuest= rest2.numGuest ?? 10;

// //same code but in concise way
// rest1.numGuest ??= 10; // 0 print because numGuest exist
// rest2.numGuest ??= 10;  // 10 print because numGuest does not exist
// console.log(rest1,rest2);

//---------------------||------------------------//
//AND  assignment operator

// rest1.owner = rest1.owner && '<ANONYMOUS>'; //undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>'; //<ANONYMOUS>

//same code but in concise way
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1,rest2);
