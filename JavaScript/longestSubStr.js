/*
 Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

const lengthOfLongestSubString = function (str) {
  let i = 0;
  let r = 0;
  let longest = 0;
  let seenHash = {};
  while (i < str.length) {
    while (!seenHash[str[r]] && r < str.length) {
      seenHash[str[r]] = true;
      r++;
    }
    seenHash = {};
    if (r - i > longest) {
      longest = r - i;
    }
    i++;
    r = i;
  }
  return longest;
}
const tester = () => {
  console.log(lengthOfLongestSubString('abcabcbb'), 'should be 3');
  console.log(lengthOfLongestSubString('abcabcdbb'), 'should be 4');
  console.log(lengthOfLongestSubString('a'), 'should be 1');
  console.log(lengthOfLongestSubString(''), 'should be 0');
  console.log(lengthOfLongestSubString('aaaa'), 'should be 1');
  console.log(lengthOfLongestSubString(5), 'should be 0');
  console.log(lengthOfLongestSubString('dvdf'), 'should be 3');


  

}

tester();
