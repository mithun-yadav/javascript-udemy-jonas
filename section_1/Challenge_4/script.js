const bill=438;

const tipPercentage=(bill>=50&&bill<=300)?15:20;

const tip = (bill*(tipPercentage/100));

const totalValue= (bill+tip);

console.log(`The Bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`)