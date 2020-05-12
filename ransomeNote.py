#Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
#
#Each letter in the magazine string can only be used once in your ransom note.
#
#Note:
#You may assume that both strings contain only lowercase letters.
#
#canConstruct("a", "b") -> false
#canConstruct("aa", "ab") -> false
#canConstruct("aa", "aab") -> true


class Solution:
    def canConstruct(self, note, magazine):  
        for letter in note:
            if letter in magazine:
                magazine = magazine.replace(letter,"",1)
                print(magazine)
            else:
                return False
        return True
    
def main():

    note = "aa"
    
    magazine = "abb"

    print(Solution().canConstruct(note, magazine))

if __name__ == '__main__':
    main()
    
