# Write a function that reverses a string. The input string is given as an array of characters char[].

# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

# You may assume all the characters consist of printable ascii characters.

 

# Example 1:

# Input: ["h","e","l","l","o"]
# Output: ["o","l","l","e","h"]
# Example 2:

# Input: ["H","a","n","n","a","h"]
# Output: ["h","a","n","n","a","H"]








class Solution:
	
	def reverseString(self, s) -> None:
		s.reverse() #reverses in place (overwrites original order)




def main():

	s1 = ["h","e","l","l","o"]
	s2 = ["H","a","n","n","a","h"]

	print(s1)

	Solution().reverseString(s1)

	print(s1)


if __name__ == '__main__':
	main()