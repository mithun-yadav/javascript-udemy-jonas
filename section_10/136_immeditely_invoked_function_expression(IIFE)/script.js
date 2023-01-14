'use strict';

const runOnce = function(){
   console.log('IIFE');
}
runOnce();

// function statement not execte but we can trick javascript by wrapping function statement in parentthessis so it will think it as expression
// function(){
//    console.log('IIFE');
// }

// function expression call (Immeditely invoked function expression{IIEF})
(function(){
   console.log('IIFE');
   const male = true;
})();

// can't access variable from inner scope
//console.log(male); // can't access (it is parent)
// same for arrow function as well

(()=>{
   console.log('Arrow');
})();

//block
{
  const mit = 'male';
  let shew = 'female';
  var kri = 'male';
}

console.log(kri); // can access
console.log(mit); // can't access
console.log(shew); // can't access