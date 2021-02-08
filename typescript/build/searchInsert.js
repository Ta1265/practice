"use strict";
/*
35. Search Insert Position


Given a sorted array of distinct integers and a target value,
return the index if the target is
found. If not, return the index where it would be if it were inserted in order.



Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0


Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return left;
};
const searchInsertTester = function () {
    console.log(searchInsert([1, 3, 5, 6], 5), 'expecting 2');
    console.log(searchInsert([1, 3, 5, 6], 2), 'expecting 1');
    console.log(searchInsert([1, 3, 5, 6], 7), 'expecting 4');
    console.log(searchInsert([1, 3, 5, 6], 0), 'expecting 0');
    console.log(searchInsert([1], 0), 'expecting 0');
    console.log(searchInsert([1], 2), 'expecting 1');
    console.log(searchInsert([1], 1), 'expecting 0');
    console.log(searchInsert([2, 7, 8, 9, 10], 9), 'expecting 3');
    console.log(searchInsert([1, 3], 4), 'expecting 2');
}();
