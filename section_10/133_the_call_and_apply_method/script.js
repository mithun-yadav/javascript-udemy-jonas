'use strict';
 
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