const e = require("express");

// ! Fibonacci Challenge
// var fibNums = [];

// function fibonacciGenerator(n) {
//   var num1 = fibNums[fibNums.length - 2];
//   var num2 = fibNums[fibNums.length - 1];
//   for (var i = 0; i < n; i++) {
//     if (i <= 1) {
//       fibNums.push(i);
//     } else {
//       fibNums.push(num1 + num2);
//     }
//   }
//   console.log(fibNums);
//   console.log(`The ${n}th iteration is ${fibNums[n - 1]}`);
// }

function fibonacciGenerator(n) {
  var fibNums = [];
  for (var i = 0; i < n; i++) {
    var num1 = fibNums[fibNums.length - 2];
    var num2 = fibNums[fibNums.length - 1];
    if (i <= 1) {
      fibNums.push(i);
    } else {
      fibNums.push(num1 + num2);
    }
  }
  console.log(fibNums);
  if (n % 10 == 1 && n % 100 !== 11) {
    console.log(`The ${n}st iteration is ${fibNums[n - 1]}`);
  } else if (n % 10 == 2 && n % 100 !== 12) {
    console.log(`The ${n}nd iteration is ${fibNums[n - 1]}`);
  } else {
    console.log(`The ${n}th iteration is ${fibNums[n - 1]}`);
  }
}

fibonacciGenerator(12);
