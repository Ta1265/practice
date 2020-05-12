# Given a binary tree, determine if it is a valid binary search tree (BST).

# Assume a BST is defined as follows:

# The left subtree of a node contains only nodes with keys less than the node's key.
# The right subtree of a node contains only nodes with keys greater than the node's key.
# Both the left and right subtrees must also be binary search trees.
 

# Example 1:

#     2
#    / \
#   1   3

# Input: [2,1,3]
# Output: true
# Example 2:

#     5
#    / \
#   1   4
#      / \
#     3   6

# Input: [5,1,4,null,null,3,6]
# Output: false
# Explanation: The root node's value is 5 but its right child's value is 4.

class TreeNode:
    def __init__(self,x):
        self.val = x
        self.right = None
        self.left = None
    def insert(self, x):
        if(self.val == None):
            self.val = x
        else:
            if(self.val < x ):
                if(self.right == None):
                    print("put ",x, "right child of ", self.val)
                    self.right = TreeNode(x)
                else:
                    self.right.insert(x)
            if(self.val > x):
                if(self.left == None):
                    print("put ",x, "left child of ", self.val)
                    self.left = TreeNode(x)
                else:
                    self.left.insert(x)
class BinaryTree:
    def __init__(self):
        self.root = None
    def addTreeNode(self,x):
        if(self.root == None):
            print("put ",x," at root")
            self.root = TreeNode(x)
        else:
            self.root.insert(x)

    def inorder(self, root):
        if(root != None):
            self.inorder(root.left)
            print(root.val)
            self.inorder(root.right)
    def preorder(self, root):
        if(root != None):
            print(root.val)
            self.preorder(root.left)
            self.preorder(root.right)
    def postorder(self, root):
        if(root != None):
            self.postorder(root.left)
            self.postorder(root.right)
            print(root.val)


class Solution:
#   Assume a BST is defined as follows:
# The left subtree of a node contains only nodes with keys less than the node's key.
# The right subtree of a node contains only nodes with keys greater than the node's key.
# Both the left and right subtrees must also be binary search trees.


    def isValidBST(self,root: TreeNode) -> bool:

        inorderList = []
        self.inorderHelper(root, inorderList)
        for i in range(len(inorderList)-1):
            if(inorderList[i].val >= inorderList[i+1].val):
                return False
        return True
    def inorderHelper(self, root, inorderList):
        if(root != None):
            self.inorderHelper(root.left,inorderList)
            inorderList.append(root)
            self.inorderHelper(root.right,inorderList)


        # BFS inorder solution
        # leftValueStack = []
        # inorder = float('-inf')

        # while stack != None or root != None:
        #     while(root != None):
        #         leftValueStack.append(root)
        #         root = root.left
        #     root = leftValueStack.pop()
        #     if(root.val <= inorder):
        #         return False
        #     inorder = root.val
        #     root = root.right
        #return True

    #     lower = float('-inf')
    #     upper = float('inf')
    #     return self.helper(root,lower,upper)

    # def helper(self, root, lower, upper):
    #     if root == None:
    #         return True
    #     if root.val <= lower or root.val >= upper:
    #         return False
    #     if(self.helper(root.right, root.val, upper) == False):
    #         return False
    #     if(self.helper(root.left, lower, root.val) == False):
    #         return False

    #     return True










def main():

    myBT = BinaryTree()
    myBT.addTreeNode(1)
    myBT.addTreeNode(1)
    myBT.addTreeNode(1)


    

    print(" - inorder traversal - ")
    myBT.inorder(myBT.root)

    print(Solution().isValidBST(myBT.root))

if __name__ == '__main__':
    main()