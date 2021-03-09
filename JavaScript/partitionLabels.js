/* eslint-disable func-names */
/*
763. Partition Labels
A string S of lowercase English letters is given. We want to partition this string
into as many parts as possible so that each letter appears in at most one part, and return
 a list of integers representing the size of these parts.

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.
*/

/**
 * @param {string} S
 * @return {number[]}
 */

// greedy algorithmn
const partitionLabels = (S) => {
  const hash = {}; // { char: lastOccurance}
  const output = [];
  for (let i = 0; i < S.length; i += 1) {
    if (hash[S[i]]) hash[S[i]] = i;
    else hash[S[i]] = i;
  }
  let first = 0;
  let last = hash[S[first]];
  for (let i = 0; i < S.length; i += 1) {
    if (hash[S[i]] > last) last = hash[S[i]];
    if (i === last) {
      output.push(last + 1 - first);
      first = last + 1;
    }
  }
  return output;
};

(function () {
  console.log(partitionLabels('ababcbacadefegdehijhklij'), 'expecting [9, 7, 8]');
}());
