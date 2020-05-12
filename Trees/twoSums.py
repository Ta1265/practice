class Solution:
    def twoSum(self, nums, target):
        
        myDict = {}
        for i in range(0 ,len(nums)):
            neededVal = target - nums[i]
            if neededVal in myDict: #if we have already seen the needed val
                answer = [myDict[neededVal] , i ]
                return answer
            else:
                myDict[nums[i]] = i


def main():
    nums = [3,2,4]
    target = 6
    print(Solution().twoSum(nums,target))
    

if __name__ == '__main__':
    main()