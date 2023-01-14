'use strict';

const PersonProto = {
    calcAge(){
        console.log(2037-this.birthYear);
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear); // use its parents init to avoid repeted code
    this.course= course;
};

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const jay = Object.create(StudentProto);
// before defining init in studentProto
// jay.init('Jay',2020); 
// console.log(jay); //{firstName: 'Jay', birthYear: 2020}

// after defining init in studentProto
jay.init('Jay',2010,'Computer Science'); // now engine look up into prototype chain and select which came first
console.log(jay); ////{firstName: 'Jay', birthYear: 2020, course: 'Computer Science'}

jay.introduce(); ////My name is Jay and I study Computer Science
jay.calcAge(); //27 // in parent prototype chain