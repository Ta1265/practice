/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

/**
 * @param {string}
 * @return {boolean}
 */

interface Parens {
  [key: string]: boolean | string;
}

let openParens: Parens = {
  '{': true,
  '[': true,
  '(': true,
}
let closeParens: Parens = {
  '}': true,
  ']': true,
  ')': true,
}
let opositeParens: Parens = {
  '}': '{',
  ']': '[',
  ')': '(',
  '{': '}',
  '[': ']',
  '(': ')',
}

var isValid = function (s: string): boolean {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (openParens[s[i]]) stack.push(s[i]);
    if (closeParens[s[i]]) {
      let top = stack.pop();
      if (opositeParens[top] !== s[i]) return false;
    }
  }
  return stack.length === 0 ? true : false;
};
const tester = () => {
  console.log(isValid(')'), 'expected to be false')
  console.log(isValid('(('), 'expected to be false')
  console.log(isValid('()'), 'execpt to be true');
  console.log(isValid('{[]}'), 'expect to be true');
  console.log(isValid('([)]'), 'expect to be false');
  console.log(isValid('(]'), 'expect to be false');
  console.log(isValid('()[]{}'), 'expect to be true');
}

tester();

