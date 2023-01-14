'use strict';

'use strict';

//Nmae of constructor function should start with Capital letter
// const Person = function(firstName,birthYear) {
    
// }
// const jonas = new Person('Jonas', 1993);
// console.log(jonas); //Person {}

//1. New {} is created
//2. function is called, 'this' keyword here = {}  (the empty object)
//3. {} linked to prototype // this step set the proto property of the object to the prototype property of constructor function
//4. function automatically return {}

//setting property to constructor function
const Person = function(firstName,birthYear) {
    //Instance properties
    this.firstName=firstName,
    this.birthYear=birthYear

    //Never make methods in side constructor like this bad practice
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

// -------------------||-----(code for lecture 209)-----||--------------------//

console.log(Person.prototype); //{species: 'Homo sepiens', calcAge: ƒ, constructor: ƒ}

Person.prototype.calcAge = function(){
    console.log(2037-this.birthYear); // here this keyword always set to object which is calling it (jonas,mithun)
}

jonas.calcAge(); //44 // calcAge is not define inside Person but still it get access by jonas and mithun it is due to prototyple inheritance
mithun.calcAge(); //39

console.log(jonas); //Person {firstName: 'Jonas', birthYear: 1993} (don't have calcAge method but still get access due to prototyple inharitance)

console.log(jonas.__proto__); //(calcAge : ƒ ()constructor: ƒ (firstName,birthYear)[[Prototype]]: Object)

console.log(jonas.__proto__ === Person.prototype); // true

//other built in method to check prototype
//here .prototype property can be think as .prototypeOfLinkedObject other wise confusion occurs
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(mithun)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//we can also set properties in prototype not only just methods
Person.prototype.species = 'Homo sepiens';
console.log(jonas ,mithun); // species set as property 
console.log(jonas.species, mithun.species); //Homo sepiens Homo sepiens

//These properties not their own properties. Own properties are only those which we write inside cunstructor

console.log(jonas.hasOwnProperty('firstName')) //true
console.log(mithun.hasOwnProperty('firstName')) //true
console.log(jonas.hasOwnProperty('species')) //false // not inside jonas object only it access it by prototype property of Person

//------------211--------------//

console.log(jonas.__proto__); //{species: 'Homo sepiens', calcAge: ƒ, constructor: ƒ}
console.log(jonas.prototype); //undefined //prototpe used for constructor function and __proto__ used for instance
console.log(jonas.__proto__.__proto__); // prototype of object ({constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …})
console.log(jonas.__proto__.__proto__.__proto__); // null

console.log(jonas.__proto__.constructor); //this give jonas object
console.dir(jonas.__proto__.constructor); // type of object ---> ƒ Person(firstName,birthYear)

//prototype of array
const arr = [3,4,5,3,9,7,7,9,0];
console.log(arr.__proto__); // gives all array methods and properties
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // prototype of an object

// we can set protopype 
Array.prototype.unique= function(){
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1); // very long prototype chain

// function's prototype
console.dir(x=>x+1); // inside its protype we get appply,bind,call methods etc 
console.log(x=>x+1); //x=>x+1



