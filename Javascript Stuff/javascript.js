const e = require("express");

// ! Slice

var tweet = prompt("Enter your tweet");
var tweetCount = tweet.length;
var tweetUnder140 = tweet.slice(0, 140);

if (tweetCount <= 140) {
  console.log(
    `You have written ${tweetCount} characters.  You still have ${140 -
      tweetCount} letters left!`
  );
} else {
  alert(
    "your original tweet had " +
      tweetCount +
      " characters. It has been modified to " +
      tweetUnder140
  );
}
var name = "bob";
name = name.toUpperCase();
console.log(name);

//create a prompt to capitalize the first letter and lowercase all other letters

var userName = prompt("please enter your name");

alert(
  `Hello, ${userName.slice(0, 1).toUpperCase() +
    userName.slice(1, userName.length).toLowerCase()}`
);

// ! Math Stuff

var cost = 3 + 5 * 2;
var dogAge = prompt("Enter your dogs name");
var humanAge = (dogAge - 2) * 4 + 21;
alert(`Your dog is ${humanAge} years old in human years`);

var x = 5;
x = x + 1;
console.log(x);

// ! The Karel Robot - Basic Functions - using a 5 x 5 grid
//! check out http://stanford.edu/~cpiech/karel/ide.html

function karelRobot() {
  /**
   * Welcome to the Stanford Karel IDE.
   * This is a free space for you to
   * write any Karel program you want.
   **/
  // function to move in a circle

  function moveInCircle() {
    moveFour();
    turnLeft();
    moveFour;
  }
}

function moveFour() {
  move();
  move();
  move();
  move();
}

// function to put beepers on a diagonal line

function diagonalBeepers() {
  placeBeeper();
  placeBeeper();
  placeBeeper();
  placeBeeper();
}

function placeBeeper() {
  move();
  turnLeft();
  move();
  putBeeper();
  turnRight();
}

var bottles = prompt("how many bottles of milk do you want?");

function getMilk(money, costPerBottle) {
  // var numBottles = Math.floor(money / 1.5);
  console.log(
    `you can buy ${costBottles(
      money,
      costPerBottle
    )} bottles of milk with ${money} dollars`
  );
  return calcChange(money, costPerBottle);
}

var change = getMilk(13, 3.5);
console.log(`You have $${change}.00 left over`);

function costBottles(money, costPerBottle) {
  var numberOfBottles = Math.floor(money / costPerBottle);
  return numberOfBottles;
}

function calcChange(money, costPerBottle) {
  var change = Math.floor(money % costPerBottle);
  return change;
}

// if my weight is 65kg and height is 1.8 meters  be able toCalculate BMI Function

// BMI = weight(kg) / height**2(m**2)

function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));
  var interpretation = `Your BMI is ${bmi},`;
  if (bmi < 18.5) {
    interpretation = `${interpretation} so you are underweight.`;
  } else if (bmi > 24.9) {
    interpretation = `${interpretation} so you are overweight.`;
  } else {
    interpretation = `${interpretation} so you have a normal weight.`;
  }
  return interpretation;
}

bmiCalculator(65, 2);

function converToKilo(pounds) {
  var kilo = pounds / 0.453592;
  return kilo;
}

// Random Numbers

// get random number
var n = Math.random();
console.log(n);
// for 6 numbers
n = n * 6;

// make a standard number
var n = Math.random();
console.log("random number is " + n);
n = n * 6;
console.log(Math.floor(n) + 1);

//! Love Calculator

var person1 = prompt("enter your name");
var person2 = prompt("enter your love's name");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore == 100) {
  alert(
    `LOVE MATCH!!! The love score for ${person1} and ${person2} is ${loveScore}%`
  );
} else if (loveScore > 80 && loveScore < 100) {
  alert(
    `You have a great chance!!! The love score for ${person1} and ${person2} is ${loveScore}%`
  );
} else if (loveScore <= 80 || loveScore > 30) {
  alert(
    `You have a chance with this relationship! The love score for ${person1} and ${person2} is ${loveScore}%`
  );
} else {
}
alert(
  `Run! The love score for ${person1} and ${person2} is ${loveScore}%. There's other fish in the pond`
);

// ! Arrrays

// function isGuest(guestName) {
var guests = ["Angela", "Jack", "John", "Jill"];
var guestName = prompt("Enter your name");

if (guests.includes(guestName)) {
  alert(`Welcome, ${guestName} is a guest!`);
} else {
  alert(`Sorry, ${guestName} is not a guest!`);
}
// }

// isGuest(guestName);

//! Fizz Buzz

var numArray = [];
var count = 0;

function fizzBuzz() {
  for (let count = 1; count < 100; count++) {
    // For loop
    // while  (count < 20)
    count++;
    if (count % 3 == 0 && count % 5 == 0) {
      numArray.push("FizzBuzz");
    } else if (count % 3 == 0) {
      numArray.push("Fizz");
    } else if (count % 5 == 0) {
      numArray.push("Buzz");
    } else {
      numArray.push(count);
    }
  }
  console.log(numArray);
}

fizzBuzz();

// 99 bottles of beer!

var bottles = 0;

while (bottles < 20) {
  console.log(
    bottles + " bottles of beer on the wall! " + bottles + " bottles of beer!"
  );
  bottles++;
}

// ! Fibonacci Challenge
var fibonacciNums = [];
function fibonacciGenerator(n) {
  for (var i = 1; i < n; i++) {
    fibonacciNums.push(i);
    var num1 = i;
    var num2 = fibonacciNums.length - 1;
    console.log(num1);
    console.log(num2);
    console.log(num1 + num2);
    // fibonacciNums.push(num1 + num2);
  }
  return fibonacciNums;
}

fibonacciGenerator(12);
