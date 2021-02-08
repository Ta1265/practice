/*
6. ZigZag Conversion
Medium

2164

5465

Add to List

Share
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);


Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"


Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
Accepted
538,037
Submissions
1,422,797

*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s: string, numRows: number): string {
  if (numRows < 2) return s;
  let row = 0;
  let down = true;
  const arr = new Array(numRows).fill('');
  for (let i = 0; i < s.length; i++) {
      arr[row] += s[i];
      down ? row++ : row--;
      if (row >= numRows - 1) down = false;
      if (row <= 0) down = true;
  }
  return arr.join('');

};

const converter_tester = () => {
  console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR', 'expecting true');
  console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI', 'expecting true');
  console.log(convert('A', 1) === 'A', 'expecting true');
  console.log(convert('AB', 1) === 'AB', 'expecting true');
};

converter_tester();
