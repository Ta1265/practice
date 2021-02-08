"use strict";
/*
27. Remove Element
Easy

1906

3299

Add to List

Share
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}


Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3]
Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.


Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100

*/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let last = nums.length - 1;
    for (let i = 0; i <= last; i++) {
        while (i <= last && nums[i] === val) {
            nums[i] = nums[last];
            last--;
        }
    }
    console.log(nums);
    return last + 1;
};
const removeElementTester = () => {
    const arr = [3, 2, 2, 3];
    const ans = removeElement([3, 2, 2, 3], 3);
    const ansarr = arr.slice(0, ans);
    console.log(ans, arr, 'expecting 2 and [2,2]');
    console.log(removeElement([1], 1));
    console.log(removeElement([], 1));
    console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 'expecting 5 and [0,1,4,0,3]');
};
removeElementTester();
