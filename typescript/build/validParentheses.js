"use strict";
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
var openParens = {
    '{': true,
    '[': true,
    '(': true,
};
var closeParens = {
    '}': true,
    ']': true,
    ')': true,
};
var opositeParens = {
    '}': '{',
    ']': '[',
    ')': '(',
    '{': '}',
    '[': ']',
    '(': ')',
};
var isValid = function (s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (openParens[s[i]])
            stack.push(s[i]);
        if (closeParens[s[i]]) {
            var top_1 = stack.pop();
            if (opositeParens[top_1] !== s[i])
                return false;
        }
    }
    return stack.length === 0 ? true : false;
};
var tester = function () {
    console.log(isValid(')'), 'expected to be false');
    console.log(isValid('(('), 'expected to be false');
    console.log(isValid('()'), 'execpt to be true');
    console.log(isValid('{[]}'), 'expect to be true');
    console.log(isValid('([)]'), 'expect to be false');
    console.log(isValid('(]'), 'expect to be false');
    console.log(isValid('()[]{}'), 'expect to be true');
};
tester();
