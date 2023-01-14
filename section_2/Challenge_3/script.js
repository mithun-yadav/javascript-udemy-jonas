const markBmi={
    fullName:"Mark Miller",
    mass:78,
    height:1.69,
    calcBmi:function(){
        this.bmi= this.mass/this.height**2
        return this.bmi;
    }
}

const johnBmi={
    fullName:"John Smith",
    mass:92,
    height:1.95,
    calcBmi:function(){
        this.bmi= this.mass/this.height**2
        return this.bmi;
    }
}

/*
const johnBmi.bmi>markBmi.bmi = (johnBmi.calcBmi())>(markBmi.calcBmi());

console.log(`${johnBmi.bmi>markBmi.bmi?"John's":"Mark's"} Bmi (${johnBmi.bmi>markBmi.bmi?(johnBmi.calcBmi()):(markBmi.calcBmi())}) is Higher than ${johnBmi.bmi>markBmi.bmi?"Mark's":"John's"}(${johnBmi.bmi>markBmi.bmi?(markBmi.calcBmi()):(johnBmi.calcBmi())})`);
*/

markBmi.calcBmi();
johnBmi.calcBmi();

console.log(johnBmi.bmi,markBmi.bmi);
console.log(`${johnBmi.bmi>markBmi.bmi?"John's":"Mark's"} Bmi (${johnBmi.bmi>markBmi.bmi?(johnBmi.calcBmi()):(markBmi.calcBmi())}) is Higher than ${johnBmi.bmi>markBmi.bmi?"Mark's":"John's"} (${johnBmi.bmi>markBmi.bmi?(markBmi.calcBmi()):(johnBmi.calcBmi())})`);