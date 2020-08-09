"""
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 

Constraints:

s consists only of printable ASCII characters.

"""


class Solution:

    def isPalindrome(self, s):
        # myStack = [] #LIFO
        # myQueue = [] #FIFO
        # alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789"
        # for char in s:
        #     char = char.lower()
        #     if char in alphanumeric:
        #         myStack.append(char)
        #         myQueue.append(char)
        # for i in range(len(myStack)):
        #     if myStack.pop() != myQueue.pop(0):
        #         return False
        # return True
        alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789"
        filtered = []
        for char in s:
            char = char.lower()
            if char in alphanumeric:
                filtered.append(char)

        return filtered == filtered[::-1]



def main():
    s = "Popp"
    ans = Solution().isPalindrome(s)
    print(ans)

if __name__ == '__main__':
    main()