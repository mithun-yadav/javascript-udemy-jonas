'use strict';

// const greet = function (greeting){
//     return function (name) {
//         console.log(`${greeting} ${name}`)
//     };
// };

// const greetingHey = greet('Hey');
// greetingHey('Mit');
// greetingHey('Asha');

// greet('Hello')('jonas'); //greet('Hello') give return func and then ('jonas') will act as argument to that return func

// same but by arrow function

const greet = greeting=> name=> console.log(`${greeting} ${name}`)

const greetingHey = greet('Hey');
greetingHey('Mit');
greetingHey('Asha');

greet('Hello')('jonas'); //greet('Hello') give return func and then ('jonas') will act as argument to that return func