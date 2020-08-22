/*
  Best Time to Buy and Sell Stock III
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */

//NOTE: difference from others is that you can complete at most 2 transactions

// let maxProfit = function (prices) {

//     let dp = new Array(prices.length);
//     for (let i = 0; i < prices.length; i++) {
//         dp[i] = Array(prices.length);
//     }
//     for (var i = 0; i < prices.length; i++) {
//         for (var j = 1; j < i + 1; j++) {
//             dp[i][j] = prices[i] - prices[i - j];
//         }
//     }

//     let max = function (k) {
//         let maxProf = 0;
//         for (var i = 0; i < k; i++) {
//             for (var j = 1; j < i + 1; j++) {
//                 curProf = dp[i][j];
//                 if (curProf > maxProf) {
//                     maxProf = curProf;
//                 }
//             }
//         }
//         return maxProf;
//     }



//     let maxProf = 0;
//     for (var i = 0; i < prices.length; i++) {
//         for (var j = 1; j < i + 1; j++) {
//             curProf = dp[i][j] + max(i - j);
//             if (curProf > maxProf) {
//                 maxProf = curProf;
//             }
//         }
//     }
//     return maxProf;
// };



var maxProfit = function (prices) {

    let dp = new Array(prices.length).fill(0);
    let localMax = 0;
    for (let i = 1; i < prices.length; i++) {

        for (let j = 1; j <= i; j++) {
            let profit = prices[i] - prices[i - j];
            localMax = Math.max(profit, localMax);
            globalMax = Math.max(localMax, localMax + dp[i - j]);
        }
        dp[i] = globalMax;
        console.log(dp)

    }
}
maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);
