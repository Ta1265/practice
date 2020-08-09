"""
definition of an anagram = a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

"""




class Solution:
    def isAnagram(self, s, t):
        
        if(len(s) != len(t)):
            return False

        sDict = {}
        for char in s:
            if char not in sDict:
                sDict.update({char:1})
            else:
                sDict[char] += 1

        tDict = {}
        for char in t:
            if char not in sDict:
                return False
            if char not in tDict:
                tDict.update({char:1})
            else:
                tDict[char] += 1

        for key in sDict:
            if sDict[key] != tDict[key]:
                return False

        return True

def main():
    
    s = "rac"
    t = "car"

    ans = Solution().isAnagram(s,t)

    print(ans)

if __name__ == '__main__':
    main()