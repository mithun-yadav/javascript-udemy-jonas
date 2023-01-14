'use strict';

// Example 1

let f;

const g = function(){
    let a =23;
    f= function(){ // here f can use all variables which is in parent scope inspite of being vanish from execution context
      console.log(a*2);
    }
}

g();
f();
console.dir(f);


const h = function(){
    let a =100;
    f= function(){
      console.log(a*2);
    }
}

//Re-assigning function
h();
f();
console.dir(f);

//Example 2

const boardPassengers = function(n,wait) {
   const perGroup = n/3;

   setTimeout(function(){ // clouser also get acces to its parent variable scope after some delay
      console.log(`We are now boarding all ${n} passengers`);
      console.log(`There are 3 groups, each with ${perGroup} passengers`);
   },wait*1000);

   console.log(`Will start boarding in ${wait} second`);
};

const perGroup = 500; // closure is at higher priority than scope chain this prepGroup not being used. It will only get used when there is no prepGroup in closure itself
boardPassengers(180,3);