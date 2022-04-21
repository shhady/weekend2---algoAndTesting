/**
 * @param {number} x
 * @return {boolean}
 *
 * @description {Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.}
 */

let num1 = 10;
let num2 = 121;
let num3 = 123;
let num4 = 12121;
const palindromeNumber = function (x) {
  //   let arr = [];
  let y = x.toString().split("");
  for (let i = 0; i < y.length; i++) {
    if (y[0] === y[y.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(palindromeNumber(num1));
module.exports = palindromeNumber;
