"use strict";
/*
58. Length of Last Word
Easy

960

2989

Add to List

Share
Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.



Example 1:

Input: s = "Hello World"
Output: 5
Example 2:

Input: s = " "
Output: 0


Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.

*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const arr = s.split(' ');
    let i = arr.length - 1;
    while (arr[i] === '' || arr[i] === ' ') {
        if (arr[i] === undefined)
            return 0;
        else
            i--;
    }
    return arr[i] ? arr[i].length : 0;
};
const lengthOfLastWordTester = () => {
    console.log(lengthOfLastWord('hello world'), 'expecting 5');
    console.log(lengthOfLastWord(' hello'), 'expecting 5');
    console.log(lengthOfLastWord('hello '), 'expecting 5');
    console.log(lengthOfLastWord(' '), 'expecting 0');
    console.log(lengthOfLastWord('a'), 'expecting 1');
};
lengthOfLastWordTester();
