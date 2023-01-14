'use strict'

//properties quite similar to array properties
const airPlane = 'Hey there i am aeroplane';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('Gh56'[0]);
console.log('Gh56'.length);

console.log(airPlane.length); // it count spaces also

//Methods quite similar to array Methods

console.log(airPlane.indexOf('r')); //same as array indexing start from 0. and indexof give index of first match letter
console.log(airPlane.lastIndexOf('r')); //lastIndexof give index of first match letter from last. indexing always start from last
console.log(airPlane.indexOf('There')); //case sensitive op-> -1
console.log(airPlane.indexOf('there')); //4

//slice method
console.log(airPlane.slice(4)); // op --> there i am aeroplane
console.log(airPlane.slice(5,8)); //index 5 included but not 8

//if one don't know about string

console.log(airPlane.slice(' ',airPlane.indexOf('r')));
console.log(airPlane.slice(airPlane.lastIndexOf('r')));

//extracting from the end

console.log(airPlane.slice(-4)); //lane
console.log(airPlane.slice(1,-1)); //ey there i am aeroplan

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const a = seat.slice(-1);
  if(a==='B' || a==='E'){
    console.log('you got the middle sit');
  }else{
    console.log('you are lucky'); 
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//strings are become object when a method is being applied
console.log(new String('Mithun'));
console.log(typeof  new String('Mithun')); //object
console.log(typeof  new String('Mithun').slice(-1)); //string
