/*
An array A consisting of N integers is given. Rotation of the array means
 that each element is shifted right by one index, and the last element
 of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will
 be shifted to the right K times.

Write a function:

class Solution { public int[] solution(int[] A, int K); }

that, given an array A consisting of N integers and an integer K,
 returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
For another example, given

    A = [0, 0, 0]
    K = 1
the function should return [0, 0, 0]

Given

    A = [1, 2, 3, 4]
    K = 4
the function should return [1, 2, 3, 4]

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
*/

function solution(a, k) {
  // const front = a.slice(0, k - 1);
  // const back = a.slice(k - 1);
  // console.log(front, back);
  // return a.slice(k - 1).concat(a.slice(0, k - 1));
  // let back = a.pop(3);
  while (k > 0) {
    a.unshift(a.pop());
    k -= 1;
  }
  return a;
}

(function () {
  console.log(solution([3, 8, 9, 7, 6], 3), 'expecting [9, 7, 6, 3, 8]');
  console.log(solution([1, 2, 3, 4], 4), 'expecting [1,2,3,4]');
}());
