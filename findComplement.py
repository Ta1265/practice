#Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
#
# 
#
#Example 1:
#
#Input: 5
#Output: 2
#Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
# 
#
#Example 2:
#
#Input: 1
#Output: 0
#Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
# 
#
#Note:
#
#The given integer is guaranteed to fit within the range of a 32-bit signed integer.
#You could assume no leading zero bit in the integer’s binary representation.
#This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/

class Solution:

    def findComplement(self, num) -> int:
        #we want to xor bits in num 
        binaryNum = bin(num)[2:] # <- gives string remove '0b' from the front of it
        #find a number with oposit bits from num
        opositBits = 2**(len(binaryNum))-1 #<- length ^ 2  then -1 of our number gives us the number we need
        #use the built in python xor
        num = num^opositBits

        return num



    #initial attemp that worked
        # rep = bin(num)[2:]
        # temp = []
        # for i in rep:
        #     if(i == '0'):
        #         temp.append(1)
        #     else:
        #         temp.append(0)

        # i = 0
        # answer = 0
        # mult = 0 
        # while temp:
        #     mult = 2**i
        #     j = temp.pop()
        #     answer += j*mult
        #     i += 1
        # return answer
        



def main():

    num = 5

    print(Solution().findComplement(num))


if __name__ == '__main__':
    main()
