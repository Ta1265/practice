
class Solution:

     def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        left = 1
        right = n
        while(left < right):
            middle = left+(right-left)// 2 # // means no floating point results in python
            if(isBadVersion(middle)):
                right = middle
            else:
                left = middle + 1 # +1 to make l and r be equal to eachother when they reach the value
        return left
