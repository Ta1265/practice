/*
11. Container With Most Water

Given n non-negative integers a1, a2, ..., an ,
 where each represents a point at coordinate (i, ai).
  n vertical lines are drawn such that the two endpoints
   of the line i is at (i, ai) and (i, 0). Find two lines,
   which, together with the x-axis forms a container, such that the
    container contains the most water.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented
 by array [1,8,6,2,5,4,8,3,7]. In this case, the max area
 of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  // O(nlongn)
  // let max = 0;
  // for (let i = 0; i < height.length; i += 1) {
  //   const Xi = i;
  //   const Yi = height[i];
  //   for (let j = i + 1; j < height.length; j += 1) {
  //     const Xj = j;
  //     const Yj = height[j];
  //     const area = Math.min(Yi, Yj) * (Xj - Xi);
  //     max = Math.max(area, max);
  //   }
  // }
  // return max;

  // O(n) 2 pointers
  // start at the 2 fursthest points, this is the widest point
  // therefore any column between this point must be taller than
  // either of the points in order to have a larger area
  // the smaller of the two can be removed from consideration

  let max = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    const Xi = i;
    const Yi = height[i];
    const Xj = j;
    const Yj = height[j];
    const curArea = Math.min(Yi, Yj) * (Xj - Xi);
    max = Math.max(curArea, max);
    if (height[i] > height[j]) j -= 1;
    else i += 1;
  }
  return max;
};

(function () {
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 'expecting 49');
  console.log(maxArea([4, 3, 2, 1, 4]), 'expecting 16');
  console.log(maxArea([1, 1]), 'expecting 1');
}());
