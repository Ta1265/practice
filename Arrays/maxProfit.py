
# Say you have an array prices for which the ith element is the price of a given stock on day i.

# Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

# Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

# Example 1:

# Input: [7,1,5,3,6,4]
# Output: 7
# Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
#              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
# Example 2:

# Input: [1,2,3,4,5]
# Output: 4
# Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
#              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
#              engaging multiple transactions at the same time. You must sell before buying again.
# Example 3:

# Input: [7,6,4,3,1]
# Output: 0
# Explanation: In this case, no transaction is done, i.e. max profit = 0.
 

# Constraints:

# 1 <= prices.length <= 3 * 10 ^ 4
# 0 <= prices[i] <= 10 ^ 4


class Solution:

	def __init__(self):
		self


	def maxProfit(self, prices) ->int:

		numDays = len(prices)

		profit = 0
		holding = False

		for today in range(0,numDays):

			if(holding and today == numDays-1): # if its the last day and we are still holding then sell
				profit = profit + prices[today]
				return profit
			
			if(not holding and today+1 < numDays and prices[today]<prices[today+1]): #if not holding and price goes up tomorrow, then buy it today
				profit = profit - prices[today]
				print("buy on day", today+1, "for ", prices[today])
				holding = True

			elif(holding and today+1 < numDays and prices[today+1]<prices[today]): #if holding and prices dip tomorrow then sell today
				profit = profit + prices[today]
				print("sell on day", today+1, "for ", prices[today])
				holding = False
				
		return profit

def main():

	p1 = [7,1,5,3,6,4] #ans = 7
	p2 = [1,2,3,4,5] #ans = 4
	p3 = [7,6,4,3,1] #ans = 0

	profit = Solution()
	profit = profit.maxProfit(p1)

	print("profit",profit)

if __name__ == '__main__':
	main()