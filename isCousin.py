# In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

# Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

# We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

# Return true if and only if the nodes corresponding to the values x and y are cousins.

 

# Example 1:


# Input: root = [1,2,3,4], x = 4, y = 3
# Output: false
# Example 2:


# Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
# Output: true
# Example 3:



# Input: root = [1,2,3,null,4], x = 2, y = 3
# Output: false
 

# Note:

# The number of nodes in the tree will be between 2 and 100.
# Each node has a unique integer value from 1 to 100.


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right



class Solution:
    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:



    def isSibling(root, a, b):
    	if root is None:
    		return 0
  		return ((root.left == a and root.right == b) 
  			or (root.left == b and root.right == a) 
  		or isSibling(root.left, a, b) 
  		or isSibling(root.right, a, b))

  	def level(root, ptr, lev): 
      
    # Base Case  
    if root is None : 
        return 0 
    if root == ptr:  
        return lev 
  
    # Return level if Node is present in left subtree 
    l = level(root.left, ptr, lev+1) 
    if l != 0: 
        return l 
  
    # Else search in right subtree 
    return level(root.right, ptr, lev+1) 

    # Returns 1 if a and b are cousins, otherwise 0 
	def isCousin(root,a, b): 
      
    # 1. The two nodes should be on the same level in  
    # the binary tree 
    # The two nodes should not be siblings(means that  
    # they should not have the smae parent node 
  
    if ((level(root,a,1) == level(root, b, 1)) and 
            not (isSibling(root, a, b))): 
        return True
    else: 
        return False