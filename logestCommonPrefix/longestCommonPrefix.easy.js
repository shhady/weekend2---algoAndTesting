/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

let strs1 = ["flower", "flow", "flight"];
let strs2 = ["dog", "racecar", "car"];
const longestCommonPrefix = function (strs) {
  //   let str = [];
  //   for (let i = 0; i < strs.length; i++) {
  //     str.push(strs[i].slice(0, 2));
  //   }
  if (strs.every((element) => element.slice(0, 2) === strs[0].slice(0, 2))) {
    return strs[0].slice(0, 2);
  } else {
    return "";
  }
};
console.log(longestCommonPrefix(strs1));

module.exports = longestCommonPrefix;
