/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/


let reverseString = function (s) {

    // this is an array function not a string function in javascript because strings in js are immutable
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    let templeft;
    while (leftIndex < (s.length - 1) / 2) {

        templeft = s[leftIndex]
        s[leftIndex] = s[rightIndex]
        s[rightIndex] = templeft

        leftIndex++;
        rightIndex--;
    }

}


s = ["h", "e", "l", "l", "o"]
reverseString(s);
console.log("after function", s);