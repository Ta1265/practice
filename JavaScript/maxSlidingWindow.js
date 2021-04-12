/*

You are given an array of integers nums, there is a sliding window
of size k which is moving from the very left of the array to
the very right. You can only see the k numbers in the window.
Each time the sliding window moves right by one position.

Return the max sliding window.
Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
Example 3:

Input: nums = [1,-1], k = 1
Output: [1,-1]
Example 4:

Input: nums = [9,11], k = 2
Output: [11]
Example 5:

Input: nums = [4,-2], k = 2
Output: [4]

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // brute force O(n-k)
  /*
  const max = [];
  let i = 0;
  let j = k - 1;
  while (j < nums.length) {
    let windowMax = nums[i];
    for (let n = i + 1; n <= j; n += 1) {
      windowMax = Math.max(nums[n], windowMax);
    }
    max.push(windowMax);
    i += 1;
    j += 1;
  }
  return max;
  */

  // using dequeue
  const deq = [];
  const max = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (deq && deq[0] === (i - k)) deq.shift(); // pop front
    while (deq && nums[i] >= nums[deq[deq.length - 1]]) deq.pop(); // pop back
    deq.push(i);
    if (i >= k - 1) max.push(Math.max(nums[deq[0]], nums[i]));
  }
  return max;
};

(function () {
  console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
  console.log(maxSlidingWindow([4, -2], 2));
  console.log(maxSlidingWindow([3, -2, 1, 5, 8, 9], 3));
  console.log(maxSlidingWindow([1, -1], 1));
  console.log(maxSlidingWindow([1], 1));
  console.log(maxSlidingWindow([9, 11], 2));
}());
