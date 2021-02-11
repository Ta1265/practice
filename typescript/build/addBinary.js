"use strict";
/*
67. Add Binary
Easy

2502

329

Add to List

Share
Given two binary strings a and b, return their sum as a binary string.



Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"


Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
Accepted
562,779
Submissions
1,201,861

*/
/**
 * @param {string} first
 * @param {string} second
 * @return {string}
 */
var addBinary = function (first, second) {
    let arr1;
    let arr2;
    let answer = [];
    let carry = false;
    if (first.length > second.length) {
        arr1 = first.split('');
        arr2 = new Array(first.length - second.length).fill('0').concat(second.split(''));
    }
    else {
        arr1 = second.split('');
        arr2 = new Array(second.length - first.length).fill('0').concat(first.split(''));
    }
    function compaire(a, b) {
        if (a === '0' && b === '0') {
            if (carry) {
                carry = false;
                return '1';
            }
            return '0';
        }
        if (a === '1' && b === '1') {
            if (carry) {
                return '1';
            }
            carry = true;
            return '0';
        }
        return carry ? '0' : '1';
    }
    for (var i = arr1.length - 1; i >= 0; i -= 1) {
        answer.push(compaire(arr1[i], arr2[i]));
    }
    if (carry)
        answer.push('1');
    return answer.reverse().join('');
};
const addBinaryTester = () => {
    console.log(addBinary('11', '1'), 'expecting "100"');
    console.log(addBinary('1010', '1011'), 'expecting "10101"');
};
addBinaryTester();
