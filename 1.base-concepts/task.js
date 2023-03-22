"use strict"
 function solveEquation(a, b, c) {
  let arr = [];
  // console.log(`we solve: ${a}x+${b}x+${c}=0`);  
  let decrem = Math.pow(b,2) - 4*a*c;
  console.log(`decision ${decrem}`);
  if (decrem > 0) {
    for (let i = 0, j = -1 ; i < 2 ; i++, j *= -1) {
        arr[i] = (-b - j*Math.sqrt(decrem)) / (2*a);
      } 
    } else if(!decrem) {
        arr[0] = (-b) / (2*a)
        }
  
  return arr;
}


console.log(solveEquation(1, 5, 4));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (isNaN(+percent) || isNaN(+contribution) || isNaN(+amount) || isNaN(+countMonths)) {
      return false;
      }
    if (+percent ==0 || +amount == 0 || +countMonths == 0) {
      return false;
      }
  
  percent = +percent / 100 / 12;
  let valueMonth = (amount - contribution) * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  return (Math.round(valueMonth * countMonths*100)/100);
}

 // console.log(calculateTotalMortgage('10', '0', 20000, 24));