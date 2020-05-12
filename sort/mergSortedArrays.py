#Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
#
#Note:
#
#The number of elements initialized in nums1 and nums2 are m and n respectively.
#You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
#Example:
#
#Input:
#nums1 = [1,2,3,0,0,0], m = 3
#nums2 = [2,5,6],       n = 3
#
#Output: [1,2,2,3,5,6]



class Solution:

    def merge(self, nums1, m, nums2, n):

        j = 0
        for i in range (m-1, m+n-1):
            while(j<n):
                nums1[m+j] = nums2[j]
                j+=1
        nums1.sort()

        #O(m+n)
        
        # nums1Indexer = m -1
        # finalIndexer = m+n -1
        # nums2Indexer = n -1

        # while finalIndexer >= 0:
        #     if nums1Indexer >=0 and (nums2Indexer < 0 or nums1[nums1Indexer] >= nums2[nums2Indexer]):
        #         nums1[finalIndexer] = nums1[nums1Indexer]
        #         nums1Indexer -= 1
        #     elif nums2Indexer >= 0 and (nums1Indexer < 0 or nums2[nums2Indexer] >= nums1[nums1Indexer]):
        #         nums1[finalIndexer] = nums2[nums2Indexer]
        #         nums2Indexer -= 1
        #     finalIndexer -= 1 



        
#        i=0 #nums1 index
#        j=0 #nums2 index
#        ans = []
#
#
#       while(i < m and j < n):
#           print(i,j)
#           if(nums1[i]<=nums2[j]):
#               ans.append(nums1[i])
#               i += 1
#           else:
#               ans.append(nums2[j])
#               j += 1
#
#      print("at end of while i = ",i, "and j = ", j)
#
#      if(i == m and j != n):
#           print("first if triggered")
#           while(j != n):
#               print("while in first if triggered")
#               ans.append(nums2[j])
#               j += 1
#       if(j == n and i != m):
#           print("second if triggered")
#           while(i != m):
#                ans.append(nums1[i])
#                i += 1
#        for i in range(0,len(nums1)):
#            nums1[i] = ans[i]
#        for i in range(len(nums1),len(ans)):
#            nums1.append(ans[i])
#        

        
        
def main():

    nums1 = [1,2,3,0,0,0] #m = 3
    nums2 = [2,5,6] #n = 3
    #output = [1,2,2,3,5,6]

    Solution().merge(nums1,3,nums2, 3)

    print(nums1)

if __name__ == '__main__':
    main()

    
