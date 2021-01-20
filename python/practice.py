class Solution:

    def maxProfit(self, prices):
        i=0
        holding = False
        profit = 0
        while(i<len(prices)-1):
            if(holding == False):
                if(prices[i]<prices[i+1]):
                    buyprice = prices[i]
                    holding = True
                    i += 1
                else:
                    i += 1
            else: #holding is true
                if(prices[i+1] < prices[i]):
                    sellprice = prices[i]
                    profit += sellprice - buyprice
                    holding = False
                    i += 1
                else:
                    i += 1
        
        if(holding == True):
            sellprice = prices[i]
            profit += sellprice - buyprice
            holding == False
        return profit




        




def main():
    prices =[1,2,3,4,5]

    print(Solution().maxProfit(prices))
    


if __name__ == '__main__':
    main()