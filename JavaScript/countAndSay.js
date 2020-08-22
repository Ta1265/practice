/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.

 

Example 1:

Input: 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1",

*/

let countAndSay = function (n) {
    if (n === 1) {
        return '1';
    }
    let prev = countAndSay(n - 1);
    let i = 0;
    let j = 1;
    let newAns = '';
    for (i; i < prev.length; i++) {
        while (prev[i] === prev[j]) {
            j++;
        }
        newAns += (j - i).toString() + prev[i];
        i = j - 1;
    }
    return newAns;
}

console.log(countAndSay(5));