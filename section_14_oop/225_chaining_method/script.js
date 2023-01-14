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
    #pin // pin is declared already so..
    
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
        this.#movements.push(val);
        return this;
    }
    withdraw(val){ // method call another method
        this.deposit(-val);
        return this;
    }

    requestLoan(val){
        //if(this.#approvedLoan)
        if(this._approvedLoan){
            this.deposit(val);
            return this;
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
acc1.requestLoan(1000);
console.log(acc1.getMovements()); // stil work because in public API
//console.log(acc1.#movements); // can't access
//console.log(acc1.#pin); // can't access

Account.help();

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements()); //[0: 400 1: -100 2: 1000 3: 300 4: 500 5: -35 6: 25000 7: -4000] // for this to be work return "this" from all necessary methods