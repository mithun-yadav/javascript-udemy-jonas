'use strict';

class Account {
    
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this._pin = pin; // the underscore here tell that is is a private property don't access it from outside
        // we can set things which not need any input like this
        this._movements = [];
        this.locale = navigator.language;
        // can execute any code that you want here
        console.log(`Thanks for opening an account ${owner}`);
    }
    //Public interface,method (API)
    getMovements(){
        return this._movements;
    }
    deposit(val){
        this._movements.push(val)
    }
    withdraw(val){ // method call another method
        this.deposit(-val);
    }

    getLoanMoney(val){
        if(this._approvedLoan){
            this.deposit(val);
        }
    }
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

Account.help();