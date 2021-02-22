/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.



Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d


Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1: string, word2: string): string {

  const stack1 = [];
  const stack2 = [];
  let output = '';
  for (let i = word1.length-1; i >= 0; i -= 1) stack1.push(word1[i]);
  for (let i = word2.length-1; i >= 0; i -= 1) stack2.push(word2[i]);

  while (stack1.length > 0 && stack2.length > 0) {
    output += stack1.pop();
    output += stack2.pop();
  }
  while (stack1.length > 0) output += stack1.pop();
  while (stack2.length > 0) output += stack2.pop();

  return output;
};


(function mergeAlternately_tester() {
  console.log(mergeAlternately('abc', 'pqr'), 'expecting "apbqcr"');
  console.log(mergeAlternately('ab', 'pqrs'), 'expecting "apbqrs"');
  console.log(mergeAlternately('abcd', 'pq'), 'expecting "apbqcd"');
}());