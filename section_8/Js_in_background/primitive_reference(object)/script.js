//Primitive type
// let age = 10;
// const oldAge = age;
// age=11;

// console.log(age); 11
// console.log(oldAge); 10

let fName = "Mithun";
let lName=fName;
fName= "Asha";
console.log(fName)
console.log(lName)

//Reference type
// let me={
//     fName:"Rinki",
//     age:34
// }


// let friend = me;
// friend.age= 56;
// friend.fName= "Asha";
// console.log(me);
// console.log(friend);

//coping object

// let me={
//     fName:"Rinki",
//     age:34,
// }

// const meCopy = Object.assign({},me);
// meCopy.age=67;
// console.log('me:', me)
// console.log('meCopy:', meCopy)

//-----------------|||---------------

//Object.assign shallow copy not deep. it will change school in both object
let me={
    fName:"Rinki",
    age:34,
    school:{
        fullName:"DCAV",
    }
}

const meCopy = Object.assign({},me);
meCopy.age=67;
meCopy.school.fullName="AHS";
console.log('me:', me)
console.log('meCopy:', meCopy)