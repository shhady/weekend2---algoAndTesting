/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}',
 *  '[' and ']',  determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

let str1 = "()";
let str2 = "()[]{}";
let str3 = "(]";

const isValid = function (s) {
  const status = false;
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const char = [];

  for (let a = 0; a < s.length; a++) {
    if (map[s[a]]) {
      char.push(map[s[a]]);
    } else {
      if (char.pop() !== s[a]) {
        return status;
      }
    }
  }

  return char.length === 0;
};
console.log(isValid(str2));

module.exports = isValid;
