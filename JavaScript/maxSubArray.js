/*
Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

var maxSubArray = function (nums) {

    let dp = new Array(nums.length);
    dp[0] = nums[0];
    let maxSum = dp[0]; // the maximum value attainable from values in num 0-i stored at dp[i]
    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] > 0) {
            dp[i] = nums[i] + dp[i - 1]; //current num + maximum from the last position
        } else {
            dp[i] = nums[i];
        }

        if (dp[i] > maxSum) {
            maxSum = dp[i]; // could pick max value in dp[] later but this keeps time linear 
        }
    }
    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
