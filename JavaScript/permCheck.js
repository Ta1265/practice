/*
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
*/

function solution(A) {
  const permSet = new Set();
  for (let i = 0; i < A.length; i += 1) {
    if (A[i] > A.length) return 0;
    if (A[i] < 1) return 0;
    if (permSet.has(A[i])) return 0;
    permSet.add(A[i]);
  }
  return 1;
}

(function () {
  console.log(solution([4, 1, 3, 2]), 'expecting 1 (is a perm)');
  console.log(solution([4, 1, 3]), 'expecting 0 (not a perm)');
  console.log(solution([4, 1, 2, 3, 4]), 'expecting 0 (not a perm)');

}());