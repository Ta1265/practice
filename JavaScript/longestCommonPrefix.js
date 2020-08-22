/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

//let longestCommonPrefix = function (strs) {

// if (strs.length === 0) {
//     return '';
// }
// if (strs.length === 1) {
//     return strs[0];
// }

// let common = strs[0];

// for (let n = 1; n < strs.length; n++) {
//     let longest = ''; // longest substring exisiting within the current element needs to reset each iteration
//     let cur = strs[n];

//     for (let i = 0; i < common.length; i++) {
//         let j = 0;
//         while (j < cur.length && cur[j] !== common[i]) {
//             console.log(i, j, common[i], cur[j]);
//             j++;
//         }
//         if (j !== cur.length) {
//             console.log('found', i, j, common[i], cur[j]);
//             let placeholder = i;
//             while (common[i] === cur[j] && i < common.length && j < cur.length) {
//                 console.log('continueing substr with ', i, j, common[i], cur[j])
//                 i++;
//                 j++;
//             }
//             let subStr = common.slice(placeholder, i);
//             console.log('found subStr = ', subStr)
//             if (subStr.length > longest.length) {
//                 longest = subStr;
//                 console.log('current longest subStr assigned = ', longest)
//             }
//             i = placeholder;
//         }
//     }
//     common = longest;
// }
//}

// pre-fix means only matching starting with the first letters, you were matching on any part, 
//the above code works, but doesnt solve the problem because it searches the entire string at each spot


let longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ''
    }
    let common = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let cur = strs[i];
        let j = 0;
        while (common[j] === cur[j] && j < common.length) {
            j++
        }
        if (j === 0) {
            return ''
        } else {
            common = common.slice(0, j);
        }

    }
    return common;
};


console.log('returned - ', longestCommonPrefix(['a']), " - expecting 'fl'");


