'use strict';

/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK
*/

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

// class Car {
//     constructor(make,speed){
//        this.make = make;
//        this.speed = speed;
//     }

//     get speedUs(){
//         this.speed = this.speed*1.6;
//     }
// }

// const bmw = new Car('BMW',100);
// console.log(bmw.speedUs);
class CarCl{
    constructor(make,speed){
        this.make=make,
        this.speed = speed
     }
     
     
     accelerate(){
         this.speed +=10;
         console.log(`${this.make} car speed is ${this.speed}`)
     }
     
     break(){
         this.speed -=5;
         console.log(`${this.make} car speed is ${this.speed}`)
     }

     get speedUS(){
        return this.speed/1.6;
     }

     set speedUS(speed){
        this.speed = speed* 1.6;
     }
}

const ford = new CarCl('Ford',120);
console.log(ford.speedUS);
ford.accelerate();
ford.break();
ford.speedUS =50;
console.log(ford); //CarCl {make: 'Ford', speed: 80}
