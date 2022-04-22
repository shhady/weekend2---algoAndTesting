/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * @description Given a sorted array of distinct integers and a target value,
 *  return the index if the target is found. If not, return the index where it
 *  would be if it were inserted in order.

Optional write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 */

let nums1 = [1, 3, 5, 6],
  target1 = 5;

let nums2 = [1, 3, 5, 6],
  target2 = 2;

let nums3 = [1, 3, 5, 6],
  target3 = 7;

const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (target > nums[nums.length - 1]) {
      nums.push(target);
      //   return indexOf(target);
    }
  }
};
console.log(searchInsert(nums3, target3));

module.exports = searchInsert;
