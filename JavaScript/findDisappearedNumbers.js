/*
448. Find All Numbers Disappeared in an Array
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime?

You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  // const output = new Array(nums.length + 1).fill(true);
  // output[0] = false;
  // for (let i = 1; i <= nums.length; i += 1) output[i] = i;
  // for (let i = 0; i < nums.length; i += 1) {
  //   output[nums[i]] = false;
  // }
  // return output.filter((num) => num);
  const output = [];
  for (let i = 0; i < nums.length; i += 1) {
    const j = Math.abs(nums[i]) - 1;
    nums[j] = Math.abs(nums[j]) * -1;
  }
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > 0) {
      output.push(i + 1);
    }
  }
  return output;
}

// output = [n, n, 2, 1, 0, n]

(function test() {
  console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), 'expecting [5,6]');
  console.log(findDisappearedNumbers([1, 1]), 'expecting [2]');
}());
