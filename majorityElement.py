

class Solution:
    def majorityElement(self, nums):

        #O(nlogn) for the sorting algorithm fastest solution
        nums.sort()
        return nums[len(nums)//2]


        #since this is a majority element problem where answer > len/2
        # can think of this just like the voting problem!

        # #O(n)
        # majority = nums[0]
        # i = 1
        # count = 1
        # while( i < len(nums)):
        #     if nums[i] == majority:
        #         count += 1
        #     else:
        #         count -= 1
        #     if(count == 0):
        #         majority = nums[i]
        #         count = 1
        #     i += 1

        # return majority


        #original solution O(n)
        
        # if(len(nums)==1):
        #     return nums[0]

        # myDict = {}

        # for num in nums:
        #     if myDict.get(num) == None:
        #         myDict.update({num:1})
        #     else:
        #         myDict[num] += 1
        #         if(myDict[num] > len(nums)//2):
        #             return num

def main():
    nums = [2,2,1]

    ans = Solution().majorityElement(nums)

    print(ans)

if __name__ == '__main__':
    main()
