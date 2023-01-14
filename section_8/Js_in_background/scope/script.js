'use strict'

function calcAge(birthYear){
    const age= birthYear-2022;

    function printAge(){
        let output= `${firstName}, you are ${age} born in ${birthYear}`; //firstName is comming from global scope
        console.log(output);

        if(birthYear >=1996 && birthYear <= 2000){

            var millenial = true; //var is functional scope
            const firstName = "Mohan";
            const str = `oh, and you are a millenial ${firstName}`; // firstName comming from local scope
            console.log(str);

            output="New Output";

            function add(a,b){
                console.log(a+b)
            }
        }
        console.log(millenial);
        console.log(output);
        //add(5,8); //in strict mode it will through reference error 
        
    }

    printAge();

    return age;
}

const firstName = "Mithun";
calcAge(1998);