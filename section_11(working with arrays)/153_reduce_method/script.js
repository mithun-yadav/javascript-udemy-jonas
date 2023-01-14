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

const displayMovements = function(movements) {
 
  containerMovements.innerHTML='';
  movements.forEach(function(mov,i){
     const type = mov>0 ? 'deposit':'withdrawal';
     const html =`
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
            <div class="movements__value">${mov}</div>
        </div>
     `;
     containerMovements.insertAdjacentHTML('beforeend',html);
     //containerMovements.innerHTML += html; it will also do the same
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements){
   const balance = movements.reduce((acc,mov)=> acc+mov,0);
   labelBalance.textContent = `${balance} EUR`;
}
calcDisplayBalance(account1.movements);
/////////////////////////////////////////////////
const createUsernames = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(name=> name[0]).join('');
  });
}

createUsernames(accounts);
console.log(accounts);

// const user = 'Steven Thomas Williams'; // stw



// console.log(username);

//reduce method 

const arr1 = [1,2,3,4,5,6,7,8,9,10];

const total = arr1.reduce((acc,item,index,arr)=>{
console.log(`iteration : ${index}:${acc}`);
return acc+item;
},0); // here 0 can be any number then counting start from there
console.log(total);

//same by for of loop

let accumulator = 0;
for(const item of arr1){
  //accumulator += item;
  accumulator = accumulator+ item;
}
console.log(accumulator);

//find maximum value by reduce method

const max= arr1.reduce((acc,item)=>{
  console.log(acc,item)
  if (acc > item) return acc; // first reduce will evaluated for all the array's element and return value to accumulator after evalution of all element done then it will return the value to the output only once
  else return item;
},arr1[0]); // here accumulator set to 1

console.log(max); // give maximum value 10

console.log('----------||----------');
//find minimum value by reduce value

const min = arr1.reduce(function(acc,item){
  console.log(acc,item)
    if(acc<item){
      return acc;
    }else return item;
})
console.log('min: ',min);