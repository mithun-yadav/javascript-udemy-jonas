
// Give first settle promise no matter whether fulfilled or not
//1.
// const p1 = new Promise(function(resolve,reject){
//   setTimeout(function(){
//    resolve("p1 id done");
//   },1000)
// });
// const p2 = new Promise(function(resolve,reject){
//   resolve("p2 id done");
// });

// Promise.race([p1,p2]).then((data)=>console.log(data));

//2.PROMISE.RACE
// const p1 = new Promise(function(resolve,reject){
//   setTimeout(function(){
//    resolve("p1 id done");
//   },2000)
// });
// const p2 = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     reject("p2 id done");
//   },1000)
// });

// Promise.race([p1,p2]).then((data)=>console.log(data)).catch(err=> console.log(err));

//3.  PROMISE.ALLSETTEL
// we'll get result after all promises GET settel
// const p1 = new Promise(function(resolve,reject){
//   setTimeout(function(){
//    resolve("p1 id done");
//   },2000)
// });
// const p2 = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     reject("p2 id done");
//   },1000)
// });

// Promise.allSettled([p1,p2]).then((data)=>console.log(data)).catch(err=> console.log(err));

//4.PROMISE.ANY
// we'll get the result of first fullflled promise, rejected promise get ignored
const p1 = new Promise(function(resolve,reject){
  setTimeout(function(){
   resolve("p1 id done");
  },2000)
});
const p2 = new Promise(function(resolve,reject){
  setTimeout(function(){
    reject("p2 id done");
  },1000)
});

Promise.any([p1,p2]).then((data)=>console.log(data)).catch(err=> console.log(err));