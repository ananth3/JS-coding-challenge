const billValue = 275;
const tip = billValue >= 50 && billValue<=300 ? billValue*15/100: billValue*20/100;
console.log(`The bill was ${billValue}, the tip was ${tip}. and total value ${billValue+tip}`);
