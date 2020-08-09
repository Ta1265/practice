"""
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 

Note: You may assume the string contains only lowercase English letters.

"""



class Solution:
    def firstUniqueChar(self, s):
        
        # for i in range(len(s)):
        #     if s.count(s[i]) == 1:
        #         return i
    
        # return -1
        myMap = {}
        for char in s:
            if char in myMap:
                myMap[char] += 1
            else:
                myMap.update({char:1})

        for index in range(len(s)):
            if s[index] in myMap and myMap[s[index]] == 1:
                return index

        return -1

def main():
    s = "loveleetcode"
    ans = Solution().firstUniqueChar(s)
    
    print(ans)
if __name__ == '__main__':
    main()