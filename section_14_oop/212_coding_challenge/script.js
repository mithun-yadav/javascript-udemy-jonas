// 'use strict';
// /*
// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
// 'speed' property. The 'speed' property is the current speed of the car in 
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, 
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK
// */

// const Car = function(make,speed){
//    this.make=make,
//    this.speed = speed
// }

// const bmw = new Car('BMW',120);
// const mercedes = new Car('Mercedes',95);


// Car.prototype.accelerate = function(){
//     this.speed +=10;
//     console.log(`${this.make} car speed is ${this.speed}`)
// }

// Car.prototype.break = function(){
//     this.speed -=5;
//     console.log(`${this.make} car speed is ${this.speed}`)
// }

// bmw.accelerate();
// bmw.break();
// mercedes.accelerate();
// mercedes.break();


// //--------------213---------------//

// //class expression
// // const PersonCl = class {};

// //Class declaration
// class PersonCl {
//     // in class everything are at one place values,properties,methods which is not in constructor func
//     constructor(firstName,birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     //comma(,) not needed
//     //Method will be added to .prototype property automatically
//     calcAge(){
//         console.log(2037- this.birthYear)
//     }
// }

// const jessica = new PersonCl('Jessica',1996);
// console.log(jessica); //PersonCl {firstName: 'Jessica', birthYear: 1996}
// jessica.calcAge(); // setted into prototype
// console.log(jessica.__proto__===PersonCl.prototype); //true

// // we can also set prototype as we did before

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`)
// }

// jessica.greet(); //Hey Jessica

// //notes 
// /* 
// 1. Classes are not hoisted.
// 2. Classes are first-class citizen (can be pass in another class and can return from another class as well).
// 3. Classes are executed in strict mode always (whether you implement strict mode or not).
// */

// //-------------214--------------//
// //Every object has getter and setten proprerty it also called assesson property and other normal property called data property

// const account ={
//     owner :'jonas',
//     movements : [200,530,120,300],

//     //getter
//     get latest(){
//         return this.movements.slice(-1).pop();
//     },

//     //setter
//     set latest(mov){ //at least one argument require
//       this.movements.push(mov);
//     },
// }

// console.log(account.latest); // don't call it is property

// account.latest = 50 // set as property

// console.log(account.movements);

// // classes also have getter and setter

// class Info{
//     constructor(firstName,lastName){
//        this.firstName = firstName,
//        this.lastName= lastName
//     }

//     get myIntro(){
//         console.log(`Hello I am ${this.firstName} ${this.lastName}`)
//     }

//     set myNickName(value){
//         this.firstName = value
//     }

   
// }

// const mithun = new Info('Mithun','Yadav');
// console.log(mithun);

// mithun.myIntro //Hello I am Mithun Yadav
// mithun.myNickName = 'Mohan'
// console.log(mithun); //Info {firstName: 'Mohan', lastName: 'Yadav'}

// // setter and gettre frequently used for data valiation


//--------------

'use strict'

class PersonCl {
    // in class everything are at one place values,properties,methods which is not in constructor func
    constructor(fullName,birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //comma(,) not needed
    //Method will be added to .prototype property automatically
    calcAge(){
        console.log(2037- this.birthYear)
    }

    set fullName(name){
        console.log(name);
        if(name.includes(' '))this._fullName = name;
        else alert(`${name} is naot a full name`);
    }
}

const jessica = new PersonCl('Jessica Davis',1996);
console.log(jessica); //PersonCl {_fullName: 'Jessica Davis', birthYear: 1996}
