/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Constraints:

haystack and needle consist only of lowercase English characters.
*/

// var strStr = function (haystack, needle) {
//     if (needle === '') {
//         return 0;
//     }
//     let found = false;
//     let j = 0;
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] === needle[j]) {
//             found = true;
//             let placeholder = i;

//             for (j; j < needle.length; j++, i++) { //check that the rest of the chars match
//                 if (haystack[i] !== needle[j]) {
//                     j = needle.length; // end the loop match wasnt found
//                     found = false;
//                 }
//             }

//             if (found === true) {
//                 return placeholder;
//             } else {
//                 i = placeholder;
//                 j = 0;
//             }

//         }
//     }
//     return -1;

// };

let strStr = (haystack, needle) => haystack.indexOf(needle);

var validate = function (actual, expected) {

    if (actual === expected) {
        console.log('PASSED - actual= ', actual, 'expected= ', expected);
    } else {
        console.log('FAILED - actual= ', actual, 'expected= ', expected);
    }


}


validate(strStr('hello', 'll'), 2);
validate(strStr('aaaaa', 'bba'), -1);
validate(strStr('hello', 'lo'), 3);
