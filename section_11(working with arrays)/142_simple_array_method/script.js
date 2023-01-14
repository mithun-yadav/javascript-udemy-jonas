'use strict';


let arr = ['a','b','c','d','e']

//SLICE
//not mutate the original array
console.log(arr.slice(2)); //['c', 'd', 'e']
console.log(arr.slice('2','4')); //['c', 'd']
console.log(arr.slice(-2)); //['c', 'd']
console.log(arr.slice(1,-2));
console.log(arr.slice()); // shallow copy of the given array ['a','b','c','d','e']
console.log(...arr); // a b c d e

//SPLICE
//it do change the array
//console.log(arr.splice(2)); //['c', 'd', 'e']
//console.log(arr); //['a', 'b']

//removing last element
// console.log(arr.splice(-1))
// console.log(arr); //['a', 'b', 'c', 'd']


// console.log(arr.splice(1,2)); //['b', 'c']
// console.log(arr); //['a', 'd', 'e']

// console.log(arr.splice(0,3)); //['a', 'b', 'c']
// console.log(arr.splice(3,3)); //[]

//REVERSE
//it is also mutate the original array
// console.log(arr.reverse()); //['e', 'd', 'c', 'b', 'a']
// console.log(arr);  //['e', 'd', 'c', 'b', 'a']

//CONCAT
// Not mutate the original array
const arr2 = [1,2,3,4,5];
console.log(arr.concat(arr2)); // ['a', 'b', 'c', 'd', 'e', 1, 2, 3, 4, 5]
console.log([...arr,...arr2]); //['a', 'b', 'c', 'd', 'e', 1, 2, 3, 4, 5]

//JOIN (it return a new string)
//not mutate original array
console.log(arr.join('-')); //a-b-c-d-e;
console.log(arr.join('')); //abcde
console.log(arr.join(' ')); //a b c d e
