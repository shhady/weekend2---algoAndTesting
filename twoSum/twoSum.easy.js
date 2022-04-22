/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @description {Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and 
you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]}
 */

let nums1 = [3, 2, 4];
let target1 = 6;

let num2 = [3, 3],
  target2 = 6;
let nums = [2, 7, 11, 15],
  target3 = 9;

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] == target) {
      return [i, i + 1];
    }
  }
  return [];
};
console.log(twoSum(nums1, target1));

module.exports = twoSum;
