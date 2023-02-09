'use strict';

/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
 */

//My solution

function take(arr, n) {
  let nArray = [];
  for (let i = 0; i < n; i++) {
    if (typeof arr[i] === 'number') {
      nArray.push(arr[i]);
    }
  }
  return nArray;
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 30));
