// console.log('Test Start');
// setTimeout(()=> console.log('Timer 0'),0);
// Promise.resolve('Promise 1 resolve').then(res=> console.log(res));
// console.log('Test End');

// Promise.resolve('Promise 2 resolve').then(res=>{
//     for(let i =0; i<10000;i++){};
//     return console.log(res); 
// })
//output
/* 
Test Start
Test End
Promise 1 resolve
Promise 2 resolve
Timer 0 
*/   

//lecture 259
/*
const loteryTicket = new Promise(function(resolve,reject){
    if(Math.random() >=0.5){
        resolve("You Won!🎊");
    }else{
        reject("You lost money! 🎃");
    }
}).then(res=> console.log(res)).catch(err=> console.error(err));
*/
/*
const loteryPromise = new Promise(function(resolve,reject){
    console.log("Lottery draw is hapenning")
    setTimeout(()=>{
        if(Math.random() >=0.5){
            resolve("You Won!🎊");
        }else{
            reject("You lost money! 🎃");
        }
    },2000)
}).then(res=> console.log(res)).catch(err=> console.error(err));
*/

//can also be written as

/*
const loteryPromise = new Promise(function(resolve,reject){
    console.log("Lottery draw is hapenning")
    setTimeout(()=>{
        if(Math.random() >=0.5){
            resolve("You Won!🎊");
        }else{
            reject(new Error("You lost money! 🎃"));
        }
    },1000)
});
loteryPromise.then(res=> console.log(res)).catch(err=> console.error(err));
*/

//Promisifing setTimeout

// Making chain of async operation happening sequential
/*
const wait = function(second){
    return new Promise (function(resolve){
        setTimeout(resolve,second*1000)
    })
};
wait(2).then(res=>{console.log("I waited for 2 second");return wait(1)}).then(res=>console.log("I waited for 1 second"));
*/

// Very eassy way to produce a fullfiled or rejected promise immediately by static method

/*
Promise.resolve("Promise fullfilled").then(x=>console.log(x));
Promise.reject(new Error("Promise rejected")).catch(x=>console.error(x));
*/

//Promisifing geolocation api

// navigator.geolocation.getCurrentPosition(position=> console.log(position),err=> console.error(err));
// console.log("Testing");

/*
 const getPosition = function(){
    return new Promise (function(resolve,reject){
        navigator.geolocation.getCurrentPosition(position=> resolve(position),err=> reject(err))
    })
 }
*/
// above code can be written as

// By this we have converted this geolocation api from callback api to promise base api
const getPosition = function(){
    return new Promise (function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
 }
 getPosition().then(res=>console.log(res)).catch(err=>console.error(err));
 console.log("Location");