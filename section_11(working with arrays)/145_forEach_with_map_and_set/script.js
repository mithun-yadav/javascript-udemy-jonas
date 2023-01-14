'use strict';


/////////////////////////////////////////////////

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
   console.log(`${key}: ${value}`);
   console.log(map); // give map array
})

console.log('---------forEach on Set----------')
const currinciesUnique = new Set(['USD','INR','USD','ERO','PND']);
console.log(currinciesUnique);

currinciesUnique.forEach(function(value,_,set){ // set do not have key here key also give value so we take a _ (throwaway variable, unnecessary variable)
    console.log(`${value}: ${value}`);
    console.log(set);
})