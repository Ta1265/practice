
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def sortedArrayToBST(self, nums):

    	if(len(nums)==0):
    		return None

    	mid = len(nums) // 2

    	root = TreeNode(nums[mid])
    	root.left = self.sortedArrayToBST(nums[:mid])
    	root.right = self.sortedArrayToBST(nums[mid+1:])

    	return root





def inorder(root):
	if(root != None):
		inorder(root.left)
		print(root.val)
		inorder(root.right)


def main():

	input = [-10,-3,0,5,9]

	treeRoot = Solution().sortedArrayToBST(input)

	inorder(treeRoot)

if __name__ == '__main__':
	main()

