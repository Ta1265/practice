/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
*/


/**
 * @param {number} x
 * @return {boolean}
 */

let isPalindrome = function (x) {

    // let strNumForward = x.toString();
    // let strNumBack = '';
    // for (let i = strNumForward.length - 1; i >= 0; i--) {
    //     strNumBack += strNumForward[i];

    // }
    // return (strNumBack === strNumForward);

    //return (x === Number(x.toString().split('').reverse().join('')))

    //without string conversion
    let original = x;
    let reverse = 0;
    while (x > 0) {
        let remaainder = x % 10; //takes them remaainderainder
        x = Math.floor(x / 10); // takes the integer

        reverse *= 10; //increases the tens place of the previous number ie 12 -> 120
        reverse += remaainder; // adds the remaainderainder to the end ie 120 -> 121
    }
    return (original === reverse)

}



console.log(isPalindrome(121))