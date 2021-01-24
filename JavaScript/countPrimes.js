/*
Count the number of prime numbers less than a non-negative number, n.

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0
 

Constraints:

0 <= n <= 5 * 106
 */

/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) {
  const primes = new Array(n).fill(true);
  if (n < 3) return 0;

  for (let i = 2; i * i < n; i += 1) {
    if (!primes[i]) continue;
    for (let j = i * i; j < n; j = j + i) {
      primes[j] = false;
    }
  }
  return primes.filter((element) => element).length - 2;
};

const tester = () => {
  console.log(countPrimes(2));
}

tester();
