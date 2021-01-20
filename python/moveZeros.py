class Solution:

    def moveZeros(self, nums):
        count = 0
        i = 0
        while(i < len(nums)):
            while(i < len(nums) and nums[i] == 0):
                print("deleting nums[",i,"]")
                del nums[i]
                count += 1
            i += 1
            
        for c in range(0, count):
            nums.append(0)

def main():

    nums = [0]
    Solution().moveZeros(nums)
    print(nums)

if __name__ == '__main__':
    main()
