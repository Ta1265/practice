class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) != len(t):
            return False

        dict1 = {}
        dict2 = {}
        for i in range(0, len(s)):
            if s[i] not in dict1:
                dict1[s[i]] = 0
            if t[i] not in dict2:
                dict2[t[i]] = 0
            dict1[s[i]] += 1
            dict2[t[i]] += 1
        return dict1 == dict2


def main():
    print(Solution().isAnagram('anagram', 'nagaram'))


if __name__ == '__main__':
    main()
