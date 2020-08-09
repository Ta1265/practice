/*
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

*/

let maxProfit = function(prices) {
	let holding = false;
	let profit = 0;
	let boughtPrice = 0;
	for (let i = 0; i < prices.length; i++) {
		let tomorrowsPrice = prices[i + 1];
		let todaysPrice = prices[i];
		if (holding == true) {
			if (tomorrowsPrice < todaysPrice) {
				profit = profit + todaysPrice - boughtPrice;
				holding = false;
			}
		} else if (holding == false) {
			if (tomorrowsPrice > todaysPrice) {
				boughtPrice = todaysPrice;
				holding = true;
			}
		}
	}

	if (holding == true) {
		profit = profit + prices[prices.length - 1] - boughtPrice;
	}

	return profit;
};

prices = [
	1,
	2,
	3,
	4,
	5,
];
answer = maxProfit(prices);

console.log(answer);
