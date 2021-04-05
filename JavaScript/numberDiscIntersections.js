/*

We draw N discs on a plane. The discs are numbered from 0 to N − 1.
 An array A of N non-negative integers, specifying the radiuses of
 the discs, is given. The J-th disc is drawn with its center at (J, 0) and radius A[J].

We say that the J-th disc and K-th disc intersect if J ≠ K and the
 J-th and K-th discs have at least one common point (assuming that the discs contain their borders).

The figure below shows discs drawn for N = 6 and A as follows:

  A[0] = 1
  A[1] = 5
  A[2] = 2
  A[3] = 1
  A[4] = 4
  A[5] = 0


There are eleven (unordered) pairs of discs that intersect, namely:

discs 1 and 4 intersect, and both intersect with all the other discs;
disc 2 also intersects with discs 0 and 3.
Write a function:

class Solution { public int solution(int[] A); }

that, given an array A describing N discs as explained above,
 returns the number of (unordered) pairs of intersecting discs.
 The function should return −1 if the number of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..2,147,483,647].

*/

function solution(A) {
  // let interSectingPairs = 0;


  // for (let i = 0; i < A.length; i += 1) {
  //   const rightReach = i + A[i];
  //   interSectingPairs += rightReach < A.length ? rightReach : A.length - 1;
  //   for (let j = rightReach; j < A.length; j += 1) {
  //     const leftReach = j - A[j];
  //     if (leftReach <= rightReach) interSectingPairs += 1;
  //     if (interSectingPairs > 10000000) return -1;
  //   }
  // }
  // return interSectingPairs;
  let results = 0;
  let dpRightReach = new Array(A.length).fill(0);
  let dpLeftReach = new Array(A.length).fill(0);
  for (let i = 0; i < A.length; i += 1) {
    let leftReach = i > A[i] ? i - A[i] : 0; //left most reach (at most 0)
    // right most reach ( at most end of arr)
    let rightReach = (A.length - 1) - i > A[i] ? i + A[i] : A.length - 1;
    dpRightReach[leftReach] += 1;
    dpLeftReach[rightReach] += 1;
  }
  console.log(dpLeftReach); //number of circles that reach each index
  console.log(dpRightReach);

  let t = 0;
  for (let i = 0; i < A.length; i += 1) {
    if (dpRightReach[i] > 0) {
      results += t * dpRightReach;
      results += ((dpRightReach[i] * (dpRightReach[i] - 1)) / 2);
      if (results > 10000000) return -1;
      t += dpRightReach[i];
    }
    t -= dpLeftReach[i];
  }
  return results;

}

(function () {
  console.log(solution([1, 5, 2, 1, 4, 0]), 'expecting 11');
}());
