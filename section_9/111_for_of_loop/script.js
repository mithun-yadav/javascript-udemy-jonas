const arr = ["Hello","Hi",4,6,7,8];
// for (const item of arr) {  // item is the current element in each iteration
//     console.log(item);
// }

// for (const item of arr.entries()) {  // item is the current element in each iteration
//     console.log(item);

// }
//console.log(...arr.entries()); //[0, 'Hello'] (2) [1, 'Hi'] (2) [2, 4] (2) [3, 6] (2) [4, 7] (2) [5, 8]

for (const [i,el] of arr.entries()) {  // item is the current element in each iteration
    console.log(`${i+1},${el}`);

}

// arr.forEach(function(item){  // item is the current element in each iteration
//     console.log(item);
// })

// arr.forEach(function(item,index){ // also give array index
//     console.log(item,index);
// })