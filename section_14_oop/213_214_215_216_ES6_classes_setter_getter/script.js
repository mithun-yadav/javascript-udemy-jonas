'use strict';

//--------------213---------------//

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
/*
const account ={
    owner :'jonas',
    movements : [200,530,120,300],

    //getter
    get latest(){
        return this.movements.slice(-1).pop(); 
    },

    //setter
    set latest(mov){ //at least one argument require
      this.movements.push(mov);
    },
}

console.log(account.latest); // 300 // don't call it,it is a property

account.latest = 50 // set as property 

console.log(account.movements); // [200, 530, 120, 300, 50]
*/

// // classes also have getter and setter
/*
class Info{
    constructor(firstName,lastName){
       this.firstName = firstName,
       this.lastName= lastName
    }

    /// for getting the value
    get myIntro(){
        console.log(`Hello I am ${this.firstName} ${this.lastName}`)
    }
    // for setting the value
    set myNickName(value){
        this.firstName = value
    }

   
}

const mithun = new Info('Mithun','Yadav');
console.log(mithun);

mithun.myIntro //Hello I am Mithun Yadav
mithun.myNickName = 'Mohan'
console.log(mithun); //Info {firstName: 'Mohan', lastName: 'Yadav'}
*/
// // setter and gettre frequently used for data valiation


//-------------- another example of setter-------------------//
/*
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

    // set property that already exist
    set fullName(name){
        console.log(name);
        if(name.includes(' '))this._fullName = name; // _fullName is different variable name otherwise gives error (jessica.fullName gives error)
        else alert(`${name} is not a full name`);
    }

    get fullName(){ // aslo get the fullName
        return this._fullName
    }
}

const jessica = new PersonCl('Jessica Davis',1996);
console.log(jessica); //PersonCl {_fullName: 'Jessica Davis', birthYear: 1996}

const walter = new PersonCl('Walter',1965) // fullName will not get set
console.log(walter); ///PersonCl {birthYear: 1965}
console.log(PersonCl.fullName); // undefined
console.log(PersonCl.birthYear); // undefined
*/ 
//----------------215----------------//
//static method
console.log(Array.from(document.querySelectorAll('h1')));
//console.log([1,2,3,4].from()); error (because from method really attached to the Array constructor func not in array prototype property)
console.log(Number.parseFloat(1.23)); //1.23 same parseFloat is attached to Number constructor

class Men {
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    // (instance methods) applicable on object made by constructor
    hello(){
        console.log("Hello");
    }
    //static method
    static hey(){
        console.log('Hello Friends');
        console.log(this);
    }
}



const krishna = new Men('Krishna',9);
console.log(krishna);
Men.hey(); // static method only work on class and constructor functions not on instance (here this keyword is 'Men' constructor because 'Men' is calling hey)
//console.log(krishna.hey()) //error

krishna.hello(); // Hello



// static method in constructor

const Student = function(name,school){
    this.name = name,
    this.school = school
}

// Static method in constructor function
Student.greet = function(){
    console.log('Hello Friends');
    console.log(this);
}

const shweta = new Student('Shweta Yadav','Sallaiya');
console.log(shweta);
Student.greet(); // call static method

//--------------------216(object.create)------------------//
// 3rd way to create prototype
//manually create an object which we want to set as prototype of another object

const PersonProto = {
    calcAge(){
        console.log(2037-this.birthYear)
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto); // manully set the prototype of steven to the Person proto object
console.log(steven);

steven.name = 'steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven) //{name: 'steven', birthYear: 2002}

// verify
console.log(steven.__proto__=== PersonProto); //true

const sarah = Object.create(PersonProto);
console.log(sarah); //{}
sarah.init('Sarah', 1979);
console.log(sarah); //{firstName: 'Sarah', birthYear: 1979}
sarah.calcAge();
