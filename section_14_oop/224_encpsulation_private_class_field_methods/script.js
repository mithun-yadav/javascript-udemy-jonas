'use strict';
/*
1) Public field
2) Private field
3) Public method // same as normal methods are being made
4) Private Method
same four for static method
*/
class Account {
    //Public fields (instance)
    local = navigator.language;

    //private class (instance)
    #movements = [];
    #pin // pin is declared already so it got set downwards
    
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // we can set things which not need any input like this
        // this._movements = [];
        // this.locale = navigator.language;
        // can execute any code that you want here
        console.log(`Thanks for opening an account ${owner}`);
    }
    //Public interface,method (API)
    getMovements(){
        return this.#movements;
    }
    deposit(val){
        this.#movements.push(val)
    }
    withdraw(val){ // method call another method
        this.deposit(-val);
    }

    getLoanMoney(val){
        //if(this.#approvedLoan)
        if(this._approvedLoan){
            this.deposit(val);
        }
    }
    //4) private method
    //#approvedLoan(val) // still not included in js (it now consider as private field)
    _approvedLoan(val){
        return true;
    }
    static help(){
        console.log('Helper')
    }
};

const acc1 = new Account('Jonas','EUR',1111);
console.log(acc1);
acc1.deposit(400);
acc1.withdraw(100);
acc1.getLoanMoney(1000);
console.log(acc1.getMovements()); // stil work because in public API
//console.log(acc1.#movements); // can't access
//console.log(acc1.#pin); // can't access
//console.log(acc1.#approvedLoan); // still not work not aproved

Account.help(); // only for classes