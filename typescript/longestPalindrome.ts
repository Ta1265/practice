/*
5. Longest Palindromic Substring
Medium

9556

643

Add to List

Share
Given a string s, return the longest palindromic substring in s.



Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"


Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),


*/

const longestPalindrome = function (s: String): String {
  let longest: String = '';

  const checker = (substr: String): void => {
    if (substr.length <= longest.length) return;
    const lastchar = substr.length - 1;
    for (let i = 0; i < substr.length; i += 1) {
      if (substr[i] !== substr[lastchar - i]) return;
    }
    longest = substr;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length + 1; j++) {
      j === 0 ? checker(s[0]) : checker(s.slice(i, j));
    }
  }
  return longest;
};

const longestPalindromeTester = () => {
  console.log(longestPalindrome('babad'), ' - expect to be "bab" or "aba');
  console.log(longestPalindrome('cbbd'), ' - expect to be "bb"');
  console.log(longestPalindrome('a'), ' - expect to be "a"');
  console.log(longestPalindrome('acc'), ' - expect to be "a"');

};
longestPalindromeTester();