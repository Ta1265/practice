class Solution:
    def removeDuplicates(self, nums) -> int:
        
        nums.sort()

        


        for i in range(0,len(nums)):
        	while i+1 < len(nums) and nums[i] == nums[i+1]:
        		nums.pop(i)
        return len(nums)

def main():
    import sys
    import io

    nums = [1,1,2,2,3,3,4,4,5,5,6,6,6]
    size = Solution().removeDuplicates(nums)

    print(size)
    print(nums)


if __name__ == '__main__':
    main()