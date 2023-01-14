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

// display Movements on screen
const displayMovements = function(movements) {
 
  containerMovements.innerHTML='';
  movements.forEach(function(mov,i){
     const type = mov>0 ? 'deposit':'withdrawal';
     const html =`
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
            <div class="movements__value">${mov}€</div>
        </div>
     `;
     containerMovements.insertAdjacentHTML('beforeend',html);
     //containerMovements.innerHTML += html; it will also do the same
  });
};
displayMovements(account1.movements);

// display balance on screen
const calcDisplayBalance = function (movements){
  const balance = movements.reduce((acc,mov)=> acc+mov,0);
  labelBalance.textContent = `${balance} €`;
}
calcDisplayBalance(account1.movements);

//total income display
const calcDisplaySummary = function(movements){
    const incomes = movements.filter((mov)=>mov>0).reduce((acc,mov)=>acc+mov,0);
    labelSumIn.textContent =incomes+'€';

    const out = movements.filter((mov)=>mov<=0).reduce((acc,mov)=>acc+mov,0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interestRate = 1.2;
    const interest = movements.filter((mov)=>mov>0).map((deposit)=>(deposit*interestRate)/100).filter((int)=>int>1).reduce((acc,int)=>acc+int,0); // interest only get added if it is greater than 1
    labelSumInterest.textContent = `${interest}€`;
}
calcDisplaySummary(movements);

const createUsernames = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(name=> name[0]).join('');
  });
}

createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////

//challenge
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is 
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as 
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know 
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets

// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK

const calcAverageHumanAge =dogsAges=>{
  console.log(dogsAges);
    const humanAge = dogsAges.map(item=>{
        if(item<=2){
          return 2* item;
        }else{
          return (16 + item * 4);
        }
    });
    const adultHumans= humanAge.filter(i=>{
       return i>=18;
    });
    // const averageAge = adultHumans.reduce((acc,entries)=>{
    //   return acc+entries;
    // },0)/adultHumans.length;
    // better this can be aslo done as
    const averageAge = adultHumans.reduce((acc,entries,index,arr)=>{
      return acc+(entries/arr.length); // firstItem/5 + secondItem/5 +....
    },0);
    console.log(humanAge);
    console.log(adultHumans);
    console.log(averageAge);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

