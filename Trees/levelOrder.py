class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def inorder(self, root):
        if(root != None):
            self.inorder(root.left)
            print(root.val)
            self.inorder(root.right)


class Solution:
    def levelOrder(self, root): # -> List[List[int]]

        if(root == None):
            return []

        answer = []
        level = [root]

        #runs in O(n)? space is O(4n)
        while(len(level) > 0 ): #level is set to zero after last layer is reached
            layer = [] #holds the values for the current layer
            nextLevel = [] #notice nextLevel resets every loop
            for leaf in level: # 2^level times appending each node to layer and each of its children to nextLevel
                if leaf != None:
                    layer.append(leaf.val)
                    if(leaf.left != None):
                        nextLevel.append(leaf.left)
                    if(leaf.right != None):
                        nextLevel.append(leaf.right)
            #for loop ends ( layer has been traversed)
            answer.append(layer)
            level = nextLevel
        return answer




#first thought solution,  O(2n)
    #     height = self.getHeight(root)
    #     ansQueue = []

    #     for level in range(1, height+1):
    #         levelQueue = []
    #         ansQueue.append(self.getLevelNodes(root, level, levelQueue))

    #     return ansQueue

    # def getLevelNodes(self,root,level, q): # -> List[int]
        
    #     if(root == None):
    #         return
    #     elif(level == 1):
    #         q.append(root.val)
    #     elif(level > 1):
    #         level = level - 1 #traverses downward the number of specified levels when level = 1 recursed to lowest level
    #         self.getLevelNodes(root.left , level, q)
    #         self.getLevelNodes(root.right, level, q)
    #     return q

    # #dfs to get hegiht
    # def getHeight(self,root): #DFS O(n) to get height
    #     if(root == None):
    #         return 0
    #     else:
    #         return max(1+self.getHeight(root.left), 1+self.getHeight(root.right))



def main():

    myTree = BinaryTree()
    myTree.root = TreeNode(3)
    myTree.root.left = TreeNode(9)
    myTree.root.right = TreeNode(20)
    myTree.root.right.left = TreeNode(15)
    myTree.root.right.right = TreeNode(7)

    answer = Solution().levelOrder(myTree.root)

    print(answer)


if __name__ == '__main__':
    main()