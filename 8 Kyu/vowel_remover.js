'use strict';

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(str) {
  return str.replace(/[aeiouy]/gi, '');
}

console.log(shortcut('string'));
