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
            <div class="movements__value">${mov.toFixed(2)}€</div>
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
  labelBalance.textContent = `${acc.balance.toFixed(2)} €`;
};
// calcDisplayBalance(account1.movements);

//total income display
const calcDisplaySummary = function (acco) {
  const incomes = acco.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes.toFixed(2) + "€";

  const out = acco.movements
    .filter((mov) => mov <= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  // const interestRate = 1.2;
  const interestRate = acco.interestRate;
  console.log(interestRate);
  const interest = acco.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * interestRate) / 100)
    .filter((int) => int > 1)
    .reduce((acc, int) => acc + int, 0); // interest only get added if it is greater than 1
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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

  if (currentAccount?.pin === +(inputLoginPin.value)) {
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
  const amount = +(inputTransferAmount.value);
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

  const amount = Math.floor(inputLoanAmount.value);

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
  if(inputCloseUsername.value===currentAccount.username&&+(inputClosePin.value)===currentAccount.pin){
    const index = accounts.findIndex((item)=>(inputCloseUsername.value===item.username&&+(inputClosePin.value)===item.pin));

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