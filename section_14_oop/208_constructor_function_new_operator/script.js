'use strict';

//Nmae of constructor function should start with Capital letter
// const Person = function(firstName,birthYear) {
    
// }
// const jonas = new Person('Jonas', 1993);
// console.log(jonas); //Person {}

//1. New {} is created
//2. function is called, 'this' keyword here = {}  (the empty object)
//3. {} linked to prototype
//4. function automatically return {}

//setting property to constructor function
const Person = function(firstName,birthYear) {
    //Instance properties
    this.firstName=firstName,
    this.birthYear=birthYear

    //Never make methods inside constructor like this bad practice
    // this.calcAge = function(){
    //     console.log(2037- this.birthYear);
    // }

}
const jonas = new Person('Jonas', 1993);
console.log(jonas); //Person {firstName: 'Jonas', birthYear: 1993}

//Person is constructor function (blue print of making object) now we can make as many objects(instance) as we want 
const mithun = new Person('Mithun', 1998);
const krishna = new Person('Krishna', 2013);
console.log(mithun,krishna); //Person {firstName: 'Mithun', birthYear: 1998} Person {firstName: 'Krishna', birthYear: 2013}

//we can also check instance
console.log(mithun instanceof Person); //true

const asha = 'Asha';
console.log(asha instanceof Person); //false

