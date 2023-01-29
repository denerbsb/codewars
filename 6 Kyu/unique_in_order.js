'use strict';

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

//My solution
var uniqueInOrder = function (arr) {
  let strArr = Array.isArray(arr) ? arr : arr.split('');
  let uniqueArr = [];
  strArr.forEach((element, idx) => {
    if (strArr[idx] !== strArr[idx + 1]) {
      uniqueArr.push(strArr[idx]);
    }
  });

  return uniqueArr;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
