/*
An array A consisting of N different integers is given.
 The array contains integers in the range [1..(N + 1)],
  which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].

*/

// function solution(A) {
//   // since we know A is missing an element, the length should be n + 1
//   const N = A.length + 1;
//   // the sum of the elements in the completed array should be (n+1)!
//   let sumN = 0;
//   for (let i = 0; i <= N; i += 1) sumN += i;
//   // since we are missing an element we sum all n that we have
//   const sumA = A.reduce((memo, num) => memo + num);
//   // the difference between what we have(sumA) and sumN what we should have is the missing element
//   return sumN - sumA;
// t pu}

function missingNumber(nums) {
  // since we start at 0 the length of what we should have is
  const n = nums.length;
  // the sum of the elements in the completed array should be lenth n;
  let sumN = 0;
  for (let i = 0; i <= n; i += 1) sumN += i;

  // sum all the elements we do have
  const sumNums = nums.reduce((memo, num) => memo + num);

  // the dif between what we have(sumNums) and sumN what we should have is the missing element
  return sumN - sumNums;
}

(function () {
  console.log(missingNumber([3, 0, 1]));
  console.log(missingNumber([0, 1]));
  console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

  // console.log(solution([]));
}());
