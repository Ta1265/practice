/* eslint-disable no-bitwise */
/*
A binary gap within a positive integer N is any maximal
sequence of consecutive zeros that is surrounded by ones
 at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and
 contains a binary gap of length 2. The number 529 has binary
  representation 1000010001 and contains two binary gaps:
   one of length 4 and one of length 3. The number 20 has binary
   representation 10100 and contains one binary gap of length 1.
    The number 15 has binary representation 1111 and has no binary gaps.
     The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length
 of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5,
 because N has binary representation 10000010001 and so
  its longest binary gap is of length 5. Given N = 32 the
   function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
Copyright 2009–2021 by Codility Limited. All Rights Reserved.
 Unauthorized copying, publication or disclosure prohibited.

*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // N >>> logical right shift removes the sign bit (account for negative numbers),
  //  and if we move it by 0 it wont shift bits
  const binary = (N >>> 0).toString(2);
  console.log(binary);
  let longestGap = 0;
  for (let i = 0; i < binary.length; i += 1) {
    if (binary[i] === '0' && binary[i - 1] === '1') {
      let j = i;
      while (j < binary.length && binary[j] !== '1') {
        j += 1;
      }
      if (j < binary.length && binary[j] === '1') {
        const curGap = j - i;
        console.log('curGap', curGap, j);
        longestGap = Math.max(curGap, longestGap);
      }
      i = j;
    }
  }
  return longestGap
}

(function () {
  // console.log(solution(9), 'expect 2');
  // console.log(solution(529), 'expect 4');
  // console.log(solution(20), 'expect 1');
  // console.log(solution(15), 'expect 0');
  // console.log(solution(32), 'expect 0');
  // console.log(solution(0), 'expect 0');
  console.log(solution(6), 'expect 2');
}());
