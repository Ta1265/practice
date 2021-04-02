/*
Write a function:

class Solution { public int solution(int A, int B, int K); }

that, given three integers A, B and K, returns
the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2,
your function should return 3, because there
are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
*/

function solution(A, B, K) {
  // return Math.floor((B - A) / K) + ((A % K === 0 || B % K === 0) ? 1 : 0);A
  return
}

(function () {
  console.log(solution(6, 11, 2), 'expecting 3'); // even, odd, even
  console.log(solution(6, 12, 2), 'expecting 4'); // even, even, even
  console.log(solution(7, 12, 2), 'expecting 3'); // odd, even, even

  console.log(solution(7, 12, 3), 'expecting 2'); // odd, even, even
  console.log(solution(7, 11, 2), 'expecting 2'); // odd, odd, even
  console.log(solution(7, 11, 3), 'expecting 1'); // odd, odd, odd

}());
