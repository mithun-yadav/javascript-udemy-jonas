let tip;
function calValue(tip,bill){
    console.log(bill*(tip/100));
}
function calcTip(bill){
    if(bill>=50&&bill<=300){
       tip=15;
       calValue(tip,bill);
    }else{
        tip=20;
        calValue(tip,bill)
    }
}

calcTip(300);

//more lines to write