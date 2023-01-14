'use strict';

//at method of array (ES2022)

const arr = [23,11,64];
console.log(arr.at(0));

//last element
console.log(arr[arr.length-1]); //64
console.log(arr.slice(-1)[0]); //64
console.log(arr.at(-1)); //64
console.log(arr.at(-2)); //11
console.log('Mithun'.at(-1)); //11