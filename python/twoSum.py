
#Given an array of integers, return indices of the two numbers such that they add up to a specific target.

#You may assume that each input would have exactly one solution, and you may not use the same element twice.

#Example:

#Given nums = [2, 7, 11, 15], target = 9,

#Because nums[0] + nums[1] = 2 + 7 = 9,
#return [0, 1].

class Solution:
    def twoSum(self, nums, target):
    
        myDict = {}
        for current_pos, val in enumerate(nums):
            numNeeded = target - val
            if numNeeded in myDict:
                return[myDict.get(numNeeded), current_pos]
            else:
                myDict.update({val:current_pos}) 
            
            


def main():
    nums = [2,7,11,15]
    target = 9

    ans = Solution().twoSum(nums, target)

    print(ans)


if __name__ == '__main__':
    main()
