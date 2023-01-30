'use strict';

/*

Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A'

*/

//My solution
function getChar(value) {
  return String.fromCharCode(value);
}

console.log(getChar(65));
