
# Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

# The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

# You may assume the integer does not contain any leading zero, except the number 0 itself.

# Example 1:

# Input: [1,2,3]
# Output: [1,2,4]
# Explanation: The array represents the integer 123.
# Example 2:

# Input: [4,3,2,1]
# Output: [4,3,2,2]
# Explanation: The array represents the integer 4321.





class Solution:

	def plusOne(self, digits):

		index = -1

		digits[index] = digits[index] + 1

		while(digits[index] == 10):
			digits[index] = 0
			index -= 1
			if(abs(index) > len(digits)): #999 to 1000
				digits = [1] + digits
				return digits

			digits[index] += 1

		return digits



def main():

	input1 = [1,2,9]
	input2 = [9,9,9]

	answer = Solution().plusOne(input1)

	print(answer)

if __name__ == '__main__':
	main()