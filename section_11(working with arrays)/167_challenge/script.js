'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// challenge

// Julia and Kate are still studying dogs, and this time they are studying if dogs are 
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the 
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% 
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
// the recommended food portion and add it to the object as a new property. Do 
// not create a new array, simply loop over the array. Forumla: 
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too 
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
// the owners array, and so this one is a bit tricky (on purpose) �
// 3. Create an array containing all owners of dogs who eat too much 
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and 
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food 
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food 
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try 
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
// portion in an ascending order (keep in mind that the portions are inside the 
// array's objects �)
// The Complete JavaScript Course 26
// Hints:
// § Use many different tools to solve these challenges, you can use the summary 
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means: 
// current > (recommended * 0.90) && current < (recommended * 
// 1.10). Basically, the current portion should be between 90% and 110% of the 
// recommended portion.
// Test data:
 const dogs = [
 { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
 { weight: 8, curFood: 200, owners: ['Matilda'] },
 { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
 { weight: 32, curFood: 340, owners: ['Michael'] },
 ];
// GOOD LUCK

//1.

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight**0.75*28)));
// console.log(dogs);

// //2.

// const dogSarah = dogs.find(dog=>dog.owners.includes('Sarah'));
// console.log(`Sarah's dog is eating too ${dogSarah.curFood> dogSarah.recFood? 'much':'little'}`)

//3.
//const ownersEatTooMuch = dogs


// const arr = [{a:3,b:4}];
// arr.forEach(item=>item.c = 5);
// console.log(arr);

//1.
dogs.forEach(dog=>{
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
})
console.log(dogs);


// 2. Find Sarah's dog and log to the console whether it's eating too much or too 
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
// the owners array, and so this one is a bit tricky (on purpose)
//2.
const findItem = dogs.find(dog=>{return dog.owners.includes('Sarah')});
console.log(`dog eat too ${findItem.curFood>findItem.recFood?'High':'Low'}`); 

//3.

const ownersEatTooMuch = dogs.filter(dog=>dog.curFood>dog.recFood&&dog.owners)
const ownersEatMuch = ownersEatTooMuch.flatMap(dog=>dog.owners);
console.log(ownersEatMuch.join(' and ')+`'s dogs eat too much`);

//4.
const ownersEatTooLittle = dogs.filter(dog=>dog.curFood<dog.recFood&&dog.owners);
const ownersEatLittle = ownersEatTooLittle.flatMap(dog=>dog.owners);
console.log(ownersEatLittle.join(' and ')+`'s dogs eat too low`);
//console.log(ownersEatTooLittle);

//5.
const findExact = dogs.some(dog=>dog.curFood===dog.recFood);
console.log(findExact);

//6.
const okFood = dogs.some(dog=> dog.curFood > (dog.recFood * 0.90) && dog.curFood < (dog.recFood * 1.10));
console.log(okFood);

//7.
//Create an array containing the dogs that are eating an okay amount of food (try 
// to reuse the condition used in 6.)

const print6 = dogs.filter(dog=>dog.curFood > (dog.recFood * 0.90) && dog.curFood < (dog.recFood * 1.10));
console.log(print6);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
// portion in an ascending order (keep in mind that the portions are inside the 
// array's objects �)

const dogSort = dogs.slice().sort((a,b)=>{return a.recFood-b.recFood});
console.log(dogSort);

// --------------sir's solution-----------------//
/*
// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
*/
