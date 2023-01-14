'use strict';

class Account {
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        // we can set things which not need any input like this
        this.movements = [];
        this.locale = navigator.language;
        // can execute any code that you want
        console.log(`Thanks for opening an account ${owner}`);
    }
    //Public interface (API)
    deposit(val){
        this.movements.push(val)
    }
    withdraw(val){ // method call another method
        this.deposit(-val);
    }

    approvedLoan(val){
        return true;
    }
    transferMoney(val){
        if(this.approvedLoan){
            this.deposit(val);
        }
    }
};

const acc1 = new Account('Jonas','EUR',1111);
//console.log(acc1); //script.js:15 Account {owner: 'Jonas', currency: 'EUR', pin: 1111, movements: Array(0), locale: 'en-US'}

// acc1.movements.push(400);
// acc1.movements.push(-200);
// Inspite of being interact manually with movements make method in class
acc1.deposit(400);
acc1.withdraw(250);
console.log(acc1.movements); //[400, -250]
console.log(acc1.pin);// should not be access from outside constructor

acc1.transferMoney(1000);
acc1.approvedLoan(100); // here accessble but should not be accessble outside constructor(Next Lecture)
console.log(acc1.movements); //[400, -250, 1000]