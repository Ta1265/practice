/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]

*/

/**
 * @param {string} digits
 * @return {string[]}
 */


var letterCombinations = function (digits) {

  if (digits.length === 0) {
    return []
  }
  const mapping = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const answer = [];
  function recurse(str, level) {
    if (level === digits.length) return answer.push(str);
    let chars = mapping[digits[level]];
    for (let i = 0; i < chars.length; i += 1) {
      recurse(str + chars[i], level + 1);
    }
  }
  recurse('', 0);
  return answer;


};

const tester = () => {
  console.log(letterCombinations('23'), 'expecting ["ad","ae","af","bd","be","bf","cd","ce","cf"]');
  console.log(letterCombinations(''), 'expecting []');
  console.log(letterCombinations('2'), 'expecting ["a","b","c"]');

};

tester();
