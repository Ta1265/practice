/*
32. Longest Valid Parentheses

Given a string containing just the characters
'(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0

Constraints:

0 <= s.length <= 3 * 104
s[i] is '(', or ')'.
*/

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
  const dp = [];
  let maxSub = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') dp[i] = 0;
    if (s[i] === ')') {
      const open = i - 1 - dp[i - 1];
      if (s[open] === '(') {
        dp[i] = dp[i - 1] + 2;
        if (open - 1 >= 0) { // account for previously valid parenthesis ()(())
          dp[i] += dp[open - 1];
        }
      } else {
        dp[i] = 0;
      }
    }
    maxSub = Math.max(dp[i], maxSub);
  }
  return maxSub;
};

function tester() {
  console.log(longestValidParentheses('(()'), 'expecting 2');
  console.log(longestValidParentheses('()()'), 'expecting 4');
  console.log(longestValidParentheses('()(()'), 'expecting 2');
  console.log(longestValidParentheses('()(())'), 'expecting 6');
}
tester();
