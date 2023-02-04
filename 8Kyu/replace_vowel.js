'use strict';

/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

//My solution

function replaceVowel(str) {
  return str.replace(/[aeoiu]/gi, '!');
}

console.log(replaceVowel('hi! hi! hiiiiii!'));
