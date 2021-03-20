class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if len(prices) < 2:
            return 0

        i = 0
        j = i + 1
        profit = 0
        while (i < len(prices) - 1):
            if (prices[i] < prices[j]):
                # buy at i
                while (j < len(prices) - 1 and prices[j] <= prices[j+1]):
                    j += 1

                profit += (prices[j] - prices[i])
                i = j + 1
                j = i + 1
            else:
                i += 1
                j += 1
        return profit


def main():
    print(Solution().maxProfit([7, 1, 5, 3, 6, 4]), 'expecting 7')
    print(Solution().maxProfit([1, 2, 3, 4, 5]), 'expecting 4')
    print(Solution().maxProfit([7, 6, 4, 3, 1]), 'expecting 0')
    print(Solution().maxProfit([1, 2]), 'expecting 1')
    print(Solution().maxProfit([1, 1]), 'expecting 0')


if __name__ == '__main__':
    main()
