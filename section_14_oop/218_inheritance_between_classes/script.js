'use strict';

const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  Person.prototype.calcAge = function(){
      console.log(2037-this.birthYear);
  }
  
  const Student = function(firstName,birthYear,course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    // better way of implementing the above
    Person.call(this,firstName,birthYear);
    this.course = course;
  }
  
  Student.prototype = Object.create(Person.prototype);
  console.dir(Student);
  Student.prototype.introduce = function(){
    console.log(`My Name is ${this.firstName} and i study ${this.course}`)
  }
  
  const mike = new Student('Mike',2020,'Computer science');
  console.log(mike); // {firstName: 'Mike', birthYear: 2020, course: 'Computer science'}
  mike.introduce(); //My Name is Mike and i study Computer science
  mike.calcAge(); //17
  
  console.log(mike.__proto__); //Person {introduce: ƒ}
  console.log(mike.__proto__.__proto__); //{calcAge: ƒ, constructor: ƒ}
  
  console.log(mike instanceof Student);
  console.log(mike instanceof Person);
  console.log(mike instanceof Object);
  
  Student.prototype.constructor = Student;
  console.dir(Student.prototype.constructor); // if above line is not introduce then o/p -> ƒ Person(firstName,birthYear)
