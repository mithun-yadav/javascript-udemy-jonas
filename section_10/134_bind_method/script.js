'use strict';
 //fot this lecture code start from little bit bottom
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //enhanced object literals for methods
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight:`${this.iataCode}${flightNum}`,name});
    },
};

lufthansa.book(239,'Mithun Yadav');
lufthansa.book(635,'Asha Yadav');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

// Does not work
// book(23,'Sara williams'); // regular function call so 'this' undefined


//Call method
book.call(eurowings,23,'Sara williams');
console.log(eurowings);

book.call(lufthansa,239,'Marry Cooper');
console.log(lufthansa);

const swiss = {
    airline : 'Swiss Air Line',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss,583,'Mary Cooper');
console.log(swiss);

//Apply method not take list of arguments but array of aguments

const flightData = [583, 'George Copper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss,...flightData); // sir prefer always call method 
console.log(swiss);


//---------Code start for this lecture----------//
//bind method

const bookEW = book.bind(eurowings); // bind return a function which has been set by the this keyword
bookEW(345,'Shweta Yadav');// Here no need to set 'this' it because already set in bookEW //Shweta Yadav booked a seat on Eurowings flight EW345
console.log(eurowings);

//also can set arguments in bind method

const bookEW23 = book.bind(eurowings,23); // entered argument for fligntNum
bookEW23("Krishna Yadav"); // entered argument for name
bookEW23("Sumit Yadav");

//with Event listener

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
lufthansa.buyPlane(); //it wil give lufthansa object

//document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane) // it will give button element
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa)) // now this key refer to lufthansa don't use call other will func will immeditially call

//Partial application (Preset Parameters)

// const addText = (rate,value) => value+ value*rate;
// console.log(addText(0.1,200));

// const addVAT = addText.bind(null,0.23); // here this keyword is null (always remember arguments order matters)
// console.log(addVAT(100));

//Challenge

//done by arrow
// const addTaxRate = (rate) => (value)=>value+ value*rate;
// console.log(addTaxRate(0.23)(100));

//done by function expression
const addTaxRate = function(rate){
    return function(value){
        return value+ value*rate;
    };
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
