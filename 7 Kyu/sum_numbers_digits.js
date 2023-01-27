'use strict';

/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

//My solution
function sumDigits(num) {
  let numsArr = Math.abs(num).toString().split('');
  let sum = numsArr.reduce((acc, c) => acc + Number(c), 0);
  return sum;
}

console.log(sumDigits(99));
