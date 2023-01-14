"use strict";

// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// display Movements on screen
const displayMovements = function (movements,sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a,b)=>a-b):movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
            <div class="movements__value">${mov}€</div>
        </div>
     `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
    //containerMovements.innerHTML += html; it will also do the same
  });
};
// displayMovements(account1.movements);

// display balance on screen
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
// calcDisplayBalance(account1.movements);

//total income display
const calcDisplaySummary = function (acco) {
  const incomes = acco.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes + "€";

  const out = acco.movements
    .filter((mov) => mov <= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  // const interestRate = 1.2;
  const interestRate = acco.interestRate;
  console.log(interestRate);
  const interest = acco.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * interestRate) / 100)
    .filter((int) => int > 1)
    .reduce((acc, int) => acc + int, 0); // interest only get added if it is greater than 1
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display Balance
  calcDisplayBalance(acc);
  //Display summary
  //calcDisplaySummary(currentAccount.movements);
  calcDisplaySummary(acc);
};

//Event Handler

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  //console.log(e);
  // prevent from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // used optional chaining so that if currentAccount is not exist it will not read pin property so error will occur
    //Display UI and message
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input field
    inputLoginUsername.value = inputLoginPin.value = ""; // assignment operator work from right to left
    inputLoginPin.blur(); // looses focus from input pin

    //Update UI when loading page
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  //console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI after transfering or reciving money
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click',function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount>0 && currentAccount.movements.some(mov=>mov>=amount*0.1 )){
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value ='';
});

btnClose.addEventListener('click',function(e){
  e.preventDefault();
  console.log('Clicked');
  if(inputCloseUsername.value===currentAccount.username&&Number(inputClosePin.value)===currentAccount.pin){
    const index = accounts.findIndex((item)=>(inputCloseUsername.value===item.username&&Number(inputClosePin.value)===item.pin));

    //delete account
    accounts.splice(index,1);

    // Hide UI
    containerApp.style.opacity=0;
    inputCloseUsername.value = inputClosePin.value ='';
  }
  
});

let sorted = false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted=!sorted;
});


/////////////////////////////////////////////////

// const user = 'Steven Thomas Williams'; // stw
// console.log(username);

//chaining map,filte,reduce

// const conversionRate = 1.1;

// const changeCurrencies = movements.filter((filItem)=>filItem>0)
// .map((mapItem)=>mapItem*conversionRate)
// // map((mapItem,i,arr) =>{console.log(arr);return mapItem*conversionRate}) //by accessing the array comming out from filter we can better debug the code if error
// .reduce((acc,reduItem)=>acc+reduItem,0); // reduce should be chained at last positions because it not return an array
// console.log(changeCurrencies);

/*
//FindIndex method same as find but it return index of the true item of array

const testArr=[100,200,300,400,500];
const refinedValue = testArr.findIndex((item)=>item>200); 
console.log(refinedValue); // output will be 2
*/

/*
//includes method EQUALITY CHECK
console.log(movements.includes(-130));

//Some method CONDITION CHECK if any of item true
const anyDeposites = movements.some((mov)=>mov>500);
console.log(anyDeposites);
*/

//Every metod (CONDITION CHECK only true when all items of array satisfies the condition)
console.log(movements.every(mov=>mov<0)); // false
console.log(movements.every(mov=>typeof mov==='number')); // true

// also can write call back seperately (don't avoid dry princple)
const deposit = mov=>mov>0;
console.log(movements.every(deposit));
console.log(movements.some(deposit));
console.log(movements.filter(deposit));

//flat and flat map

const arr = [[1,2],[3,4],[5,6]];
console.log(arr.flat()); //flat(1) - default

const newArr = [[1,2],[3,4],[5,6,[7,8,]]]; // nested array
console.log(newArr.flat(2)); // flat deep nested arry

const againNewArr = [[1,2],[3,4],[5,6,[7,8,[9,10]]]];
console.log(againNewArr.flat(3)); // three level deep flatening

// example from above

// const accountMovements = accounts.map((acc)=>acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements); // this will give long array

// const overAllBalance = allMovements.reduce((acc,mov)=>acc+mov,0);
// console.log(overAllBalance);

//same by chaining
const overAllBalance1 = accounts.map((acc)=>acc.movements).flat().reduce((acc,mov)=>acc+mov,0);
console.log(overAllBalance1);

//flatMap combine flat and map method,first map then flat

const overAllBalance2 = accounts.flatMap((acc)=>acc.movements).reduce((acc,mov)=>acc+mov,0);
console.log(overAllBalance2);

// const arr2 = [1,[2,3]];
// console.log(arr2.flatMap(ite=>ite*2)); //[2, NaN] first flat them map not flatMap

//sorting

const fruit = ['Banana','Lemon','Apple','Grapes'];
console.log(fruit.sort()); 
console.log(fruit); // mutate the array

//Sorting
// const marks = [4,7,9,2,3];
// console.log(marks.sort((a,b)=>a-b)); // sort method always sort accordance with string 

//Sorting in ascending order
// return >0 B,A (switching order)
// return <0 A,B (keep order)
// movements.sort((a,b)=>{
//   if(a>b) return 1;
//   if(a<b) return -1;
// })
// console.log(movements); // sort method do mutate the array

//improved way
// movements.sort((a,b)=>a-b);
// console.log(movements);

// Sorting in descending order

// movements.sort((a,b)=>{
//   if(a>b) return -1; // b is bigger want switching
//   if(a<b) return 1; // a is bigger keeping same
// })
// console.log(movements);

//improved way

// movements.sort((a,b)=>b-a);
// console.log(movements);


//filling array programatically

const x = new Array(7);
console.log(x); // [empty × 7] an array containing 7 empty element

// x.map((item)=>7); 
// console.log(x); //[empty × 7] not work, no method work except fill method

// x.fill(1);
// console.log(x); //[1, 1, 1, 1, 1, 1, 1] fill with 7 ones.

// start from index 3
// x.fill(1,3); // [empty × 3, 1, 1, 1, 1]
// console.log(x);

// x.fill(1,3,5); // [empty × 3, 1, 1, empty × 2]
// console.log(x);

const Newarr = [1,2,3,4,5,6,7,8];
console.log(Newarr.fill(24,2,6)); //[1, 2, 24, 24, 24, 24, 7, 8]

//from method on Array constructor

// const y = Array.from({length:6},()=>1); //put array lenght and a map function
// console.log(y); //[1, 1, 1, 1, 1, 1]

//construct [1,2,3,4,5,6,7]
// const y = Array.from({length:7},(cur,i)=>1+i); //put array lenght and a map function
// console.log(y); //[1,2,3,4,5,6,7]

//same by throw away variable
const y = Array.from({length:7},(_,i)=>1+i); //put array lenght and a map function
console.log(y); //[1,2,3,4,5,6,7]

//array having 100 random dice roll

const diceRolls = Array.from({length:100},(()=>Math.trunc(Math.random()*6)+1));
console.log(diceRolls);

//get movement array from UI
// labelBalance.addEventListener('click',function(){
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value')
//   );

//   console.log(movementsUI.map(el=> Number(el.textContent.replace('€','')))); // [1300, 70, -130, -650, 3000, -400, 450, 200]
// });

// can be also done by passing map directly into from method
labelBalance.addEventListener('click',function(){
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),(el=> Number(el.textContent.replace('€','')))
  );

  console.log(movementsUI); // [1300, 70, -130, -650, 3000, -400, 450, 200]
  console.log([document.querySelectorAll('.movements__value')]);
  console.log([...document.querySelectorAll('.movements__value')]);
});


//Array method practice
//1. sum of all deposite
const bankDepositeSum = accounts.flatMap(acc=>acc.movements).filter(mov=>mov>0).reduce((sum,cur)=>sum+cur,0);
console.log(bankDepositeSum);

//2. How many deposit in the bank is atleast 1000
// const numDeposite1000 = accounts.flatMap(acc=>acc.movements).filter(mov=>mov>=1000).length;
// console.log(numDeposite1000);

// same by reduce method.
const numDeposite1000 = accounts.flatMap(acc=>acc.movements).reduce((count,cur)=>(cur>=1000?count+1:count),0); // can't use count++ but can use ++count
console.log(numDeposite1000);

let a =10;
console.log(a++); //10 //post increment
console.log(++a); //12 //pre increment

//3.sum of all deposite and sum of all withdrawal by reduce method and put them into an array

const sumsAll = accounts.flatMap(acc=>acc.movements).reduce((sums,cur)=>{
  //  cur>0? (sums.deposit += cur):(sums.withdrawal+= cur);
  // done with a better way
  sums[cur>0?'deposit':'withdrawal'] +=cur;
   return sums;
},{deposit:0,withdrawal:0});

console.log(sumsAll);

//4. implement find method by reduce method (do yourself)

//5. Title case (this is a nice title --> This Is a Nice Title)

const convertTitleCase = function(title){
  const capitzalize = str=> str[0].toUpperCase()+str.slice(1);
  const exceptions = ['a','an','and','the','but','on','or','with','in'];
  const titleCase = title.toLowerCase().split(' ').map(word=> (exceptions.includes(word)?word:capitzalize(word))).join(' ','');
  return capitzalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title'));
console.log(convertTitleCase('this is a nice but Not a good title'));
