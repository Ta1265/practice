/* eslint-disable prefer-destructuring */
/*
287. Find the Duplicate Number
Medium

7115

756

Add to List

Share
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.



Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [1,1]
Output: 1
Example 4:

Input: nums = [1,1,2]
Output: 1

Constraints:

2 <= n <= 3 * 104
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely
one integer which appears two or more times.

Follow up:

How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem without modifying the array nums?
Can you solve the problem using only constant, O(1) extra space?
Can you solve the problem with runtime complexity less than O(n2)?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // const set = new Set();
  // for (let i = 0; i < nums.length; i += 1) {
  //   if (set.has(nums[i])) return nums[i];
  //   set.add(nums[i]);
  // }

  // floyds algorithmn list cycle
  // think of index as vertice, element as edge to next index
  // phase 1, tort moves at 1x, hare moves 2x until they meet verifying a cycle
  // note DONT START AT INDEX 0
  let tort = nums[nums[0]];
  let hare = nums[nums[nums[0]]];
  while (tort !== hare) {
    tort = nums[tort];
    hare = nums[nums[hare]];
  }

  // phase 2, retart tort at index 0
  // tort = nums[nums[0]];
  tort = nums[0];
  while (tort !== hare) {
    tort = nums[tort];
    hare = nums[hare];
  }
  return tort;
};

(function () {
  console.log(findDuplicate([2, 6, 4, 1, 3, 1, 5], 'expecting 2'));
}());
