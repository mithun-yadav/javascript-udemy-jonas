'use strict';
class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // Instance methods
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    // Static method
    static hey() {
      console.log('Hey there 👋');
    }
  }

//if no new property don't bother about constructor
//   class studentCl extends PersonCl {}

//   const martha = new studentCl('Martha jones',2012);
//   console.log(martha); // studentCl {_fullName: 'Martha jones', birthYear: 2012}

  //-----------||-----------//

  class studentCl extends PersonCl {
      constructor(fullName,birthYear,course){
        //PersonCl.call(this,fullName,birthYear); in place of this apply super func
        //Always need to haappen first otherwise not access this keyword 
        super(fullName,birthYear)
           this.course = course;
      }

      introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
      }

      // overwrite calcAge from personCl
      calcAge(){
        console.log(`I am ${2037-this.birthYear} years old but as a student I feel like ${2037-this.birthYear+10}`)
      }
  }

  const martha = new studentCl('Martha jones',2012,'Computer science'); //studentCl {_fullName: 'Martha jones', birthYear: 2012, course: 'Computer science'}
  martha.introduce(); //My name is Martha jones and I study Computer science
  //martha.calcAge(); //25 // until calcAge not overwritten
  martha.calcAge(); // I am 25 years old but as a student I feel like 35 // this calcAge method is very close in prototype of chain