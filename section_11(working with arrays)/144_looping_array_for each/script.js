'use strict';


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// for(const [item,index] of movements.entries()){
//   console.log(item,index);
// }

// for(const item of movements){
//   if(movements>0){
//      console.log(`You deposited ${item}`);
//   } else {
//     console.log(`You deposited ${Math.abs(item)}`);
//   }
// }

movements.forEach((item,index,arr)=>{
  console.log(item,index,arr);
  if(item>0){
  console.log(`You deposited ${item}`);
} else {
 console.log(`You deposited ${Math.abs(item)}`);
}});