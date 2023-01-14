'use strict';


//map data structure can have any type of key (not only string as in object)
const learnMap = new Map();

//can set property
// learnMap.set("FName","Mithun");
// learnMap.set("lName","Yadav");
// learnMap.set(1,"Kolkata");

learnMap.set("scored", ['Lewandowski', 'Gnarby', 'Lewandowski',
'Hummels'],).set('open',11).set('close',23).set(true,'we are open :D').set(false,'we are close :(');

console.log(learnMap);

//get data from map here type of input matter
//console.log(learnMap.get('scored'));
//console.log(learnMap.get(true));
//console.log(learnMap.get(false));

const time = 21; 

//console.log(learnMap.get(time > learnMap.get('open')&& time < learnMap.get('close')));

//checking element existance

//console.log(learnMap.has('open'));
//console.log(learnMap.has('Catagories'));

//delete element
learnMap.delete(false);
console.log(learnMap);

//size of map

console.log(learnMap.size);

//clear map

learnMap.clear();
console.log(learnMap);

//arry as key 

// learnMap.set([0,1],"Mit");
// console.log(learnMap.get([0,1]));  //undefined both arry has different address in memory

const arr1 = [0,1];
learnMap.set(arr1,"Mit");
console.log(learnMap.get(arr1)); //Mit denote same memory address  

//also can select an element from html
learnMap.set(document.querySelector("h1"),'Heading');
console.log(learnMap);

