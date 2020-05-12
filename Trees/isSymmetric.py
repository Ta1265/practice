# Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

# For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

#     1
#    / \
#   2   2
#  / \ / \
# 3  4 4  3
 

# But the following [1,2,2,null,3,null,3] is not:

#     1
#    / \
#   2   2
#    \   \
#    3    3
 

# Follow up: Solve it both recursively and iteratively.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class BinaryTree:

    def __init__(self):
        self.root = None

    def inorder(self,root):
        if(root != None):
            self.inorder(root.left)
            print(root.val)
            self.inorder(root.right)
    def preorder(self,root):
        if(root != None):
            print(root.val)
            self.preorder(root.left)
            self.preorder(root.right)
    def postorder(self,root):
        if(root != None):
            self.postorder(root.left)
            self.postorder(root.right)
            print(root.val)




class Solution:

#the better solution
    def isSymmetric(self, root):
        def isSym(L,R):
            if L and R and L.val == R.val: 
                return isSym(L.left, R.right) and isSym(L.right, R.left)
            return L == R
        return not root or isSym(root.left, root.right)



# #my BFS type solution
#     def isSymmetric(self, root) -> bool:
#         h = self.getHieght(root)

#         for level in range (1,h+1):
#             q = []
#             self.getLevelQueue(root, level,q) #start at level 1(root) go down to lowest
#             while(len(q) != 0 and level != 1):
#                 if(q.pop(0) != q.pop()): #front must equal back
#                     return False
#         return True

#     def getLevelQueue(self, root, level, q):
#         if(root == None):
#             q.append(-1)
#             return
#         if(level == 1):
#             q.append(root.val)
#         elif(level > 1):
#             level = level - 1
#             self.getLevelQueue(root.left, level,q) #recurse until level goes to 1 where it can be printed
#             self.getLevelQueue(root.right, level,q)

    
#     def getHieght(self,root) -> int: 
#         if(root == None):
#             return 0
#         else:
#             return max(1+self.getHieght(root.left), 1+self.getHieght(root.right))



def main():
    
    myTree = BinaryTree()

    symTree = BinaryTree()
    symTree.root = TreeNode(1)
    symTree.root.left = TreeNode(2)
    symTree.root.right = TreeNode(2)
    symTree.root.left.left = TreeNode(3)
    symTree.root.left.right = TreeNode(4)
    symTree.root.right.left = TreeNode(4)
    symTree.root.right.right = TreeNode(3)

    notsymTree = BinaryTree()
    notsymTree.root = TreeNode(1)
    notsymTree.root.left = TreeNode(2)
    notsymTree.root.right= TreeNode(2)
    
    notsymTree.root.left.right = TreeNode(3)

    notsymTree.root.right.right = TreeNode(3)



    print(Solution().isSymmetric(symTree.root))




if __name__ == '__main__':
    main()