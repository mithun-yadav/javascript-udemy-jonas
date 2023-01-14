'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES starts

const num = 75776849.97;

console.log('US   :', new Intl.NumberFormat('en-us').format(num)); //US   : 75,776,849.97
console.log('Germany   :', new Intl.NumberFormat('de-DE').format(num)); //Germany   : 75.776.849,97
console.log('syria   :', new Intl.NumberFormat('ar-SY').format(num));  //syria   : ٧٥٬٧٧٦٬٨٤٩٫٩٧
//local from browser
console.log('India   :', new Intl.NumberFormat(navigator.language).format(num)); //India   : 75,776,849.97

const options = {
    style:'currency',
    currency: 'INR'
}

console.log('India   :', new Intl.NumberFormat(navigator.language,options).format(num)); //India   : ₹75,776,849.97

const options2 = {
    style:'unit',
    unit:'celsius',
}

console.log('India   :', new Intl.NumberFormat(navigator.language,options2).format(num)); //India   : 75,776,849.97°C

const options3 = {
    style:'percent',
}
console.log('India   :', new Intl.NumberFormat(navigator.language,options3).format(num)); //India   : 7,577,684,997%

const options4 = {
    style:'unit',
    unit:'mile-per-hour'
}

console.log('India   :', new Intl.NumberFormat(navigator.language,options4).format(num)); //India   : 75,776,849.97 mph

