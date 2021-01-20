class TreeNode:
    def __init__(self,x):
        self.val = x
        self.right = None
        self.left = None
    def insert(self, x):
        if(self.val == None):
            self.val = x
        else:
            if(self.val > x ):
                if(self.right == None):
                    print("put ",x, "right child of ", self.val)
                    self.right = TreeNode(x)
                else:
                    self.right.insert(x)
            if(self.val < x):
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
    def inorderTraversal(self, root: TreeNode):

        leftNodeStack = []
        valList = []

        while(len(leftNodeStack) != 0 or root != None):

            #fill left node Stack
            while(root != None):
                leftNodeStack.append(root)
                root = root.left

            #add lowest left node / root / right
            root = leftNodeStack.pop()
            valList.append(root.val)

            #move right
            root = root.right
            
        return valList



def main():

    myBT = BinaryTree()
    myBT.addTreeNode(1)
    myBT.addTreeNode(2)
    myBT.addTreeNode(3)

    myBT.inorder(myBT.root)

    for i in Solution().inorderTraversal(myBT.root):
        print(i)




if __name__ == '__main__':
    main()
