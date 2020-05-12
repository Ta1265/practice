# Given a 32-bit signed integer, reverse digits of an integer.

# Example 1:

# Input: 123
# Output: 321
# Example 2:

# Input: -123
# Output: -321
# Example 3:

# Input: 120
# Output: 21

# Note:
# Assume we are dealing with an environment which could only store integers within the 32-bit signed 
# integer range: [−2**31,  2**31 − 1]. For the purpose of this problem, assume that your function 
# returns 0 when the reversed integer overflows.











class Solution:

    def reverseInteger(self,x) ->int:

        # reverse = 0
        # neg = False
        # if(x < 0):
        #     neg = True
        #     x = abs(x)

        # while(x != 0):
        #     digit = x % 10
        #     x = x // 10 # // to avoid float division

        #     if(reverse*10+digit > 2**31-1 or reverse*10+digit < -2**31):
        #         return 0
        #     else:
        #         reverse = reverse * 10 + digit

        # if(neg):
        #     reverse *= -1
        
        # return reverse

        #way easier method to do with strings this time
        if x < 0:
            sign = -1
        else:
            sign = 1
        x *= sign #make it always positive
        x = str(x) #cast to a string
        x = x[::-1] # use string slicing to reverse
        x = int(x) #cast to int
        if(x > 2**31-1 or x < -2**31): #check for overflow
                return 0
        return x*sign #put the original sign back








def main():

    input1= 123
    input2= -123

    answer = Solution().reverseInteger(input2)

    print(answer)

if __name__ == '__main__':
    main()