'use strict';

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//Using regex
function shortcut(str) {
  return str.replace(/[aeiouy]/gi, '');
}

console.log(shortcut('string'));

//Without regex
function anotherShortcut(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] != 'a' &&
      str[i] != 'e' &&
      str[i] != 'i' &&
      str[i] != 'o' &&
      str[i] != 'u' &&
      str[i] != 'y'
    ) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(anotherShortcut('stringy'));
