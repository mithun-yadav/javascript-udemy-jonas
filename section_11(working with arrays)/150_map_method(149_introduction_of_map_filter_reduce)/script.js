'use strict';
const arr1 = [1,2,3,4,5,6];
const multiplier = 2;
const newArr = arr1.map(function(item){
   //return item * 2; gives [2, 4, 6, 8, 10, 12]
   //return item * multiplier; // gives [2, 4, 6, 8, 10, 12], return what you want to put in the corresponding position of new array
   return item * 1.1; //gives [1.1, 2.2, 3.3000000000000003, 4.4, 5.5, 6.6000000000000005]
   //return 23; // gives [23,23,23,23,23,23]
})

console.log(arr1); // original array will not be mutate
console.log(newArr);

//same by arrow function

const newArrByArrow = arr1.map(item=>(item * 1.1)) //gives [1.1, 2.2, 3.3000000000000003, 4.4, 5.5, 6.6000000000000005]
console.log(newArrByArrow);

// same achive by for of
const againNewArr = [];

for(const item of arr1){
   againNewArr.push(item*2);
}
console.log(againNewArr); // gives [2, 4, 6, 8, 10, 12]

//map also have access of index of item and arr
console.log('------||-------');
const newArrByArrow1 = arr1.map((item,index,arr)=>console.log(item,index,arr)) //1 0 (6) [1, 2, 3, 4, 5, 6] 2 1 (6) [1, 2, 3, 4, 5, 6] 3 2 (6) [1, 2, 3, 4, 5, 6] 4 3 (6) [1, 2, 3, 4, 5, 6] 5 4 (6) [1, 2, 3, 4, 5, 6] 6 5 (6) [1, 2, 3, 4, 5, 6]
