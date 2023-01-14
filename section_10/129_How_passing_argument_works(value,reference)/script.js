'use strict';

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport : 276475759827,
}
const checkIn = function (flightNum,passenger){
    flightNum= 'LH999', //here flightNum is compeletly different variable than flight
    passenger.name = 'Mr.'+ passenger.name;

    if(passenger.passport === 276475759827){
        alert('checked In');
    }else{
        alert('Worng passport')
    }
}

checkIn(flight,jonas);
console.log(flight); // LH234 (premitive type so not change)
console.log(jonas); // {name: 'Mr.Jonas Schmedtmann', passport: 276475759827} // changed because object are reference type i.e, change at anywhere affect everywhere

//const passenger = jonas; // it will only copy the memory address of passenger into jonas, both point same object in heap

const newPassport = function(person){
    //person.passport = Math.trunc(Math.random()*1000000000000);
    person.passport = 1000000000000;
}

newPassport(jonas);
checkIn(flight,jonas);
console.log(flight,jonas); // {name: 'Mr.Mr.Jonas Schmedtmann', passport: 1000000000000} // in js we can't pass reference to function but only value. in case of object memory address is still a value