/*
 Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-10^5 <= nums[i] <= 10^5

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const answer = [];
  const hash = {};
  const unique = {};
  nums.map((num, i) => hash[num] = i);

  for (let i = 0; i < nums.length; i += 1) {
    let target = nums[i] * -1;
    for (let j = i + 1; j < nums.length; j += 1) {
      if (i !== j) {
        if (hash[target - nums[j]] !== undefined && hash[target - nums[j]] !== i && hash[target - nums[j]] !== j) {
          let combo = [nums[i], nums[j], target - nums[j]].sort();
          if (unique[JSON.stringify(combo)] === undefined) {
            unique[JSON.stringify(combo)] = true;
            answer.push(combo);
          }
          hash[target - nums[j]] === undefined;
        }
      }
    }
  }
  return answer;

};

const tester = function () {
  console.log(threeSum([-1, 0, 1, 2, -1, -4]), 'expecting [[-1,-1,2],[-1,0,1]]');
}

tester();
