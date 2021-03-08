/*
1769. Minimum Number of Operations to Move All Balls to Each Box
You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

Each answer[i] is calculated considering the initial state of the boxes.

Example 1:

Input: boxes = "110"
Output: [1,1,3]
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
Example 2:

Input: boxes = "001011"
Output: [11,8,5,4,3,4]

Constraints:

n == boxes.length
1 <= n <= 2000
boxes[i] is either '0' or '1'.
*/

/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function (boxes: string): number[] {
  const leftpass = Array(boxes.length).fill(0);
  const rightpass = Array(boxes.length).fill(0);
  let ones: number;

  // O(n)
  ones = boxes[0] === '1' ? 1 : 0;
  for (let i = 1; i < boxes.length; i += 1) {
    leftpass[i] = leftpass[i - 1] + ones;
    if (boxes[i] === '1') ones += 1;
  }
  // O(n)
  ones = boxes[boxes.length - 1] === '1' ? 1 : 0;
  for (let i = boxes.length - 2; i >= 0; i -= 1) {
    rightpass[i] = rightpass[i + 1] + ones;
    if (boxes[i] === '1') ones += 1;
  }
  // O(n)
  const output = [];
  for (let i = 0; i < leftpass.length; i += 1) {
    output[i] = rightpass[i] + leftpass[i];
  }
  // O(3n) ~ O(n)
  return output;

  // O(n^2) solution
  // const output = Array(boxes.length).fill(0);
  // for( let i = 0; i < boxes.length; i += 1) {
  //   for ( let j = 0; j < boxes.length; j += 1) {
  //     if ( i !== j && boxes[j] === '1') output[i] += Math.abs(i - j);
  //   }
  // }
  // return output;
};

(function testMinOperations() {
  console.log(minOperations('1'), 'expecting 0');
  console.log(minOperations('0'), 'expecting 0');
  console.log(minOperations('110'), 'expecting [1,1,3]');
  console.log(minOperations('001011'), 'expecting [11,8,5,4,3,4]');
}());
