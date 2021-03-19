class Solution(object):

    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) < 1:
            return 0
        i = 0
        j = 1
        length = len(nums)
        while (i < length - 1):
            while(j < length and nums[i] >= nums[j]):
                j += 1
            if j == length:
                return i+1
            else:
                nums[i+1] = nums[j]
                i += 1

        return i+1


def main():
    print(Solution().removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 'expecting 5')
    print(Solution().removeDuplicates([1, 1, 2, 2, ]), 'expecting 2')

    print(Solution().removeDuplicates([1, 2]), 'expecting 2')
    print(Solution().removeDuplicates([1]), 'expecting 1')
    print(Solution().removeDuplicates([1, 1]), 'expecting 1')
    print(Solution().removeDuplicates([]), 'expecting 0')


if __name__ == '__main__':
    main()
