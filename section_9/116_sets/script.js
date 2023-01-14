'use strict';

//set want only iterables
const orderSet = new Set(["pasta","pizza","pasta","chow","pizza"]);
// console.log(orderSet);

//size of set
// console.log(orderSet.size);

//strings are also iterable
// const makeSet = new Set("Helo");
// console.log(makeSet);

//add one unique item
// orderSet.add("Garlic bread");
// orderSet.add("Garlic bread");

//delete item
// orderSet.delete("Garlic bread");

//clear entire set
// orderSet.clear();
// console.log(orderSet);
 
//set os also iterable
// for (const item of orderSet){
//     console.log(item);
// }


//retrive array from set

const newArr = [...orderSet];
console.log(newArr);

//number of different letter in a string
console.log(new Set('Mithuunn').size);

