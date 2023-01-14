'use strict';

const oneWord = function(str) {
    return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first,...other] = str.split(' ');
    return [first.toUpperCase(),...other].join(' ');
}

// Higher-order function
const transformer = function(str,fn){
   console.log(`Original string: ${str}`);
   console.log(`Transformed string: ${fn(str)}`);

   console.log(`Transformed by: ${fn.name}`); // name is the one of the function's property
}

//transformer('JavaScript is the best!',upperFirstWord); //transformer function is calling upperFirstWord not us
/*
Original string: JavaScript is the best!
Transformed string: JAVASCRIPT is the best!
Transformed by: upperFirstWord
*/

//transformer('JavaScript is the best!',oneWord); 
/*
output
Original string: JavaScript is the best!
Transformed string: javascriptisthebest!
Transformed by: oneWord
*/

const high5 = function(){
    console.log('👋');
}

document.body.addEventListener('click',high5); //addEventListener is higher order func which calling the high5(callback) function

['mit','rin','shw'].forEach(high5); //forEach method will call high5

function hero(){
    console.log(hero.name);
}

hero();