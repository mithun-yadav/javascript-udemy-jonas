'use strict';

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037-birthYear);
//     console.log(this); //undefined because in strict mode simple function call gives undefine 
// };
// calcAge(1991);
// //--------------|||-----------
// const calcArrow = (birthYear)=> {
//     console.log(2037-birthYear);
//     console.log(this);
// };
// calcArrow(1998);
// //--------------------|||------------
// const mit ={
//     year:1998,
//     calcAge:function(){
//         console.log(this);
//         console.log(2022-this.year);
//     }
// }

// mit.calcAge();
// //---------------|||---------------

// const rink={
//     year:2000,
// };

// rink.calcAge = mit.calcAge;
// //console.log(rink.calcAge);
// rink.calcAge();

// //---------------|||---------------

// // const f= mit.calcAge;
// // f(); //undefined , error because in f this is undefine so this.undefine give error

// document.querySelector("h1").addEventListener("click",function(){
//     console.log(this)
// })


//this in arrow

// var firstName = "Matilda";
// const mit = {
//     firstName:"Mithun",
//     year:1998,
//     calcAge:function(){
//         console.log(this);
//         console.log(2037-this.year);

//         //solution 1
//     //     const self=this;
//     //     const isMillenial = function(){
//     //         console.log( self.year >= 1981 && self.year <= 2000);
//     //     }
//     //     isMillenial();
//     // },
   
//     //soiution 2 
//         const isMillenial = ()=>{
//             console.log(this) //mit
//             console.log(this.year >= 1981 && this.year <= 2000); // here this scope to his parent scope i.e; mit
//         }
//         isMillenial();
//     },
//     greet: ()=>console.log(`Hey ${this.firstName}`),
// };

// mit.greet(); // Hey undefined
// mit.calcAge();
// console.log(this.firstName); // undefined

//argument keyword
const addExpr = function (a,b) {
    console.log(arguments); // arguments keyword only exist for regular function not in this function
    return a+b;
}

addExpr(2,5);
addExpr(2,5,6,8,9); // more arguments no problem at all

const addArrow = (a,b)=>{
   console.log(arguments); // error arguments not in arrow
   return a+b;
};
addArrow(2,4,5,6,7);


