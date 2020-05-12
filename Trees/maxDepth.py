# Given a binary tree, find its maximum depth.

# The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Note: A leaf is a node with no children.

# Example:

# Given binary tree [3,9,20,null,null,15,7],

#     3
#    / \
#   9  20
#     /  \
#    15   7
# return its depth = 3.

# you self implemented tree doesnt look like that


# Tree Nodes
# Traversals
# Depth Frist
    # Breadth First = Level Order
    # inorder(left, root,right) = Bottom Up = L-RT-R = a DFS
    # preorder(Root, Left, Right) = Top down = RT-L-R = a DFS
    # postorder(left, right, Root) = Bottom up L-RT-R = a DFS



#should do insertion method the node itself

class TreeNode:
    def __init__(self,x):
        self.val = x
        self.left = None
        self.right = None
    def insert(self, x): 
        if(self.val == None):
            self.val = x
        else:
            if(self.val < x):
                if(self.left == None):
                    self.left = TreeNode(x)
                    print("put ",x, "left child of ", self.val)
                else:
                    self.left.insert(x)
            elif(self.val > x):
                if(self.right == None):
                    self.right = TreeNode(x)
                    print("put ",x, "right child of ",self.val)
                else:
                    self.right.insert(x)

class BinaryTree:
    def __init__(self):
        self.root = None

    def addTreeNode(self, x):
        if(self.root == None):
            print("put ",x," at root")
            self.root = TreeNode(x)
        else:
            self.root.insert(x)
#inorder(left, root,right) = Bottom Up = L-RT-R = Should give ordered result
    def in_order_PrintTree(self, root):
        if(root != None):
            self.in_order_PrintTree(root.left)
            print(root.val)
            self.in_order_PrintTree(root.right)


# preorder(Root, Left, Right) = Top down = RT-L-R
    def pre_order_PrintTree(self, root):
        if(root != None):
            print(root.val)
            self.pre_order_PrintTree(root.left)
            self.pre_order_PrintTree(root.right)

# postorder(left, right, Root) = Bottom up L-RT-R
    def post_order_PrintTree(self, root):
        if(root != None):
            self.pre_order_PrintTree(root.left)
            self.pre_order_PrintTree(root.right)
            print(root.val)


# COUNT = [10]
# def print2DUtil(root, space) : 
#     if (root == None): return
#     space += COUNT[0] 
#     print2DUtil(root.right, space) 
#     print()  
#     for i in range(COUNT[0], space): print(end = " ")  
#     print(root.val)  
#     print2DUtil(root.left, space)  
# def print2D(root):
#     print2DUtil(root, 0)  


class Solution:
    def maxDepth(self,root) ->int:
        #depth First Search(DFS)
        while(root != None ):
            left = 1 + self.maxDepth(root.left)
            right = 1 + self.maxDepth(root.right)
            return max(right,left)

        return 0




def main():

    myBTree = BinaryTree()
    myBTree.addTreeNode(1)
    myBTree.addTreeNode(5)
    myBTree.addTreeNode(3)
    myBTree.addTreeNode(4)
    myBTree.addTreeNode(2)


    #print2DUtil(myBTree.root,0)
    print("inorder - (Left->root->right")
    myBTree.in_order_PrintTree(myBTree.root)
    print("postorder - (left->right->root")
    myBTree.post_order_PrintTree(myBTree.root)
    print("preorder - (root->left->right")
    myBTree.pre_order_PrintTree(myBTree.root)

    print("maxDepth = ", Solution().maxDepth(myBTree.root))
    






if __name__ == '__main__':
    main()