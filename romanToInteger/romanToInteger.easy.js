/**
 * @param {string} s
 * @return {number}
 * 
 * @description Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, 
just two one's added together. 12 is written as XII, which is simply X + II.
 The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV.
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX.
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

const romanToInt = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        if (s[i + 1] === "V") {
          sum += 4;
          i++;
        } else if (s[i + 1] === "X") {
          sum += 9;
          i++;
        } else {
          sum += 1;
        }
        break;
      case "V":
        sum += 5;
        break;
      case "X":
        if (s[i + 1] === "L") {
          sum += 40;
          i++;
        } else if (s[i + 1] === "C") {
          sum += 90;
          i++;
        } else {
          sum += 10;
        }
        break;
      case "L":
        sum += 50;
        break;
      case "C":
        if (s[i + 1] === "D") {
          sum += 400;
          i++;
        } else if (s[i + 1] === "M") {
          sum += 900;
          i++;
        } else {
          sum += 100;
        }
        break;
      case "D":
        sum += 500;
        break;
      case "M":
        sum += 1000;
        break;
    }
  }
  return sum;
};

//? second solution

// obj = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000,
//   };
//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i] + s[i + 1]]) {
//       sum += obj[s[i] + s[i + 1]];
//       i++;
//     } else {
//       sum += obj[s[i]];
//     }
//   }

module.exports = romanToInt;
