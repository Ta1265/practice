"""
1419. Minimum Number of Frogs Croaking
Medium

423

29

Add to List

Share
Given the string croakOfFrogs, which represents a combination of the string "croak" from different frogs, that is, multiple frogs can croak at the same time, so multiple “croak” are mixed. Return the minimum number of different frogs to finish all the croak in the given string.

A valid "croak" means a frog is printing 5 letters ‘c’, ’r’, ’o’, ’a’, ’k’ sequentially. The frogs have to print all five letters to finish a croak. If the given string is not a combination of valid "croak" return -1.



Example 1:

Input: croakOfFrogs = "croakcroak"
Output: 1
Explanation: One frog yelling "croak" twice.
Example 2:

Input: croakOfFrogs = "crcoakroak"
Output: 2
Explanation: The minimum number of frogs is two.
The first frog could yell "crcoakroak".
The second frog could yell later "crcoakroak".
Example 3:
        print(map)

Input: croakOfFrogs = "croakcrook"
Output: -1
Explanation: The given string is an invalid combination of "croak" from different frogs.
Example 4:

Input: croakOfFrogs = "croakcroa"
Output: -1


Constraints:

1 <= croakOfFrogs.length <= 10^5
All characters in the string are: 'c', 'r', 'o', 'a' or 'k'.

"""


class Solution(object):
    def minNumberOfFrogs(self, croakOfFrogs):
        """
        :type croakOfFrogs: str
        :rtype: int
        """
        # map number of appearances of a character
        map = {char: 0 for char in ['c', 'r', 'o', 'a', 'k']}

        maxCroaks = 0

        for char in croakOfFrogs:
            if char == 'r' and map['r'] >= map['c']:
                return -1
            if char == 'o' and map['o'] >= map['r']:
                return -1
            if char == 'a' and map['a'] >= map['o']:
                return -1
            if char == 'k':
                if map['k'] >= map['a']:
                    return -1
                for key in map:
                    maxCroaks = max(map[key], maxCroaks)
                    map[key] = map[key] - 1

            map[char] = map[char] + 1

        for char in map:
            if map[char] > 0:
                return -1

        return maxCroaks


def main():
    print(Solution().minNumberOfFrogs('croakcroak'), 'expecting 1')
    print(Solution().minNumberOfFrogs('crcoakroak'), 'expecting 2')
    print(Solution().minNumberOfFrogs('croakcrook'), 'expecting -1')
    print(Solution().minNumberOfFrogs('okcracakroroakacckor'), 'expecting -1')


if __name__ == '__main__':
    main()
