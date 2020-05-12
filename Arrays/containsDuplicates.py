
class Solution:

	def containsDuplicates(self,nums) -> bool:
		if(len(set(nums)) == len(nums)): #sets dont contains duplicates
			return False
		else:
			return True


def main():
	
	nums1 = [1,2,3,4,4]
	nums2 = [1,2,3,4]

	answer = Solution().containsDuplicates(nums2)

	print(bool(answer))




if __name__ == '__main__':
	main()