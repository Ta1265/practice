/* eslint-disable no-plusplus */
/*
Given an array of integers A, return the largest integer that only occurs once.

If no integer occurs once, return -1.

Example 1:

Input: [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation:
The maximum integer in the array is 9 but it is repeated.
 The number 8 occurs only once, so it's the answer.
Example 2:

Input: [9,9,8,8]
Output: -1
Explanation:
There is no number that occurs only once.

Note:

1 <= A.length <= 2000
0 <= A[i] <= 1000
*/

/**
 * @param {number[]} A
 * @return {number}
 */

function merge(L, R) {
  const combined = new Array(R.length + L.length).fill(0);
  let i = 0;
  let li = 0;
  let ri = 0;
  while (li < L.length && ri < R.length) {
    if (L[li] < R[ri]) combined[i++] = L[li++];
    else combined[i++] = R[ri++];
  }
  while (li < L.length) combined[i++] = L[li++];
  while (ri < R.length) combined[i++] = R[ri++];
  return combined;
}

function mergeSort(A) {
  if (A.length < 2) return A;
  const mid = Math.floor(A.length / 2);
  return merge(mergeSort(A.slice(0, mid)), mergeSort(A.slice(mid)));;
}

function largestUniqueNumber(A) {
  if (A.length === 1) return A[0];
  const sorted = mergeSort(A);
  for (let i = A.length - 1; i >= 0; i--) {
    if (i === 0 || sorted[i] !== sorted[i - 1]) return sorted[i];
    while (i > 0 && sorted[i] === sorted[i - 1]) i--;
  }
  return -1;
}

(function () {
  console.log(largestUniqueNumber([5, 7, 7, 4, 1, 3, 3, 9, 9, 9, 4, 8, 8, 3, 1]));
  console.log(largestUniqueNumber([11, 10, 11]));
}());
