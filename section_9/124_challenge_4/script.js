'use strict';

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case 
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to 
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable 
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable 
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case 
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
 
document.querySelector('button').addEventListener('click',function(){
    let allValues = document.querySelector('textarea').value;
    let initialFormatting= allValues.split('\n');
    
    //solution by me
    for (const [indexItem,item] of initialFormatting.entries()){
        //console.log(indexItem,item);
        let splittedItem = item.trim().toLowerCase().split('_');
        const [fName,lName] = splittedItem;
        const lNameFormattting = lName[0].toUpperCase()+lName.slice(1);
        const joinName = fName+lNameFormattting;
        let symbolLog = '✅'.repeat(indexItem+1)
        console.log(`${joinName.padEnd(20)} ${symbolLog}`); //padEnd(20) is same as padEnd(20,' ')
    }
})

//solution by sir

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

// let arr= [1,2,4,5];
// for(const [indexGoods,goods] of arr.entries()){
//     console.log(indexGoods, goods);
// }
//const underScore = [ 'first_name' ,'Some_Variable', 'calculate_AGE','delayed_departure'];

// for(const item of underScore){
//     let removeScore = item.replace('_',' ');
//     let removeScore = item.replace('_',' ');
//     console.log(removeScore);
// }
