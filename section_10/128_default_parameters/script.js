'use strict';


const bookings = [];

//default parameter undefine when parameters not entered
/*
const createBooking = function(flightName,numPassengers,price){
    
    const booking = {
        flightName,
        numPassengers,
        price,
    }

    console.log(booking);
    bookings.push(booking);
};

createBooking('LM123'); // {flightName: 'LM123', numPassengers: undefined, price: undefined}

*/

/*
const createBooking = function(flightName,numPassengers,price){

    // numPassengers = numPassengers || 23;
    // price = price || 9000;
    numPassengers ||= 23;
    price ||= 9000;

    const booking = {
        flightName,
        numPassengers,
        price,
    }

    console.log(booking);
    bookings.push(booking);
};

createBooking('LM123'); // {flightName: 'LM123', numPassengers: 23, price: 9000}

*/

//giving value in parameter after ES6

/*
const createBooking = function(flightName,numPassengers=23,price=9000){

    // numPassengers = numPassengers || 23;
    // price = price || 9000;
    // numPassengers ||= 23;
    // price ||= 9000;

    const booking = {
        flightName,
        numPassengers,
        price,
    }

    console.log(booking);
    bookings.push(booking);
};

createBooking('LM123'); // {flightName: 'LM123', numPassengers: 23, price: 9000}

createBooking('abc',78,3000); //overwrite the parameters

*/


//the default parameter can take any expression
const createBooking = function(flightName,numPassengers=10,price=numPassengers*5000){

    const booking = {
        flightName,
        numPassengers,
        price,
    }

    console.log(booking);
    // bookings.push(booking);
};

createBooking('LM123',70); //overwritting numPassenger 
createBooking('LM123',70,1000); //overwritting numPassenger and price 
createBooking('LM123',undefined); //numPassengers is undefined so take 10