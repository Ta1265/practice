# Given a linked list, determine if it has a cycle in it.

# To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

 

# Example 1:

# Input: head = [3,2,0,-4], pos = 1
# Output: true
# Explanation: There is a cycle in the linked list, where tail connects to the second node.

# 3->2->0->-4
#   ^|______|
#
# Example 2:

# Input: head = [1,2], pos = 0
# Output: true
# Explanation: There is a cycle in the linked list, where tail connects to the first node.


# Example 3:

# Input: head = [1], pos = -1
# Output: false
# Explanation: There is no cycle in the linked list.


 

# Follow up:

# Can you solve it using O(1) (i.e. constant) memory?


class ListNode:
    def __init__(self,x):
        self.val = x
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None
    def addNode(self,x):
        if self.head == None:
            self.head = ListNode(x)
        else:
            temp = self.head
            self.head = ListNode(x)
            self.head.next = temp
    def printList(self):
        temp = self.head
        while(temp!=None):
            print(temp.val)
            temp = temp.next
class Solution:
    
    def hasCycle(self, head) -> bool:
        # #hash the nodes, if collision occures then it has a cycle
        # # time = O(n), space = O(n)
        # myDict = {}
        # temp = head
        # pos = 0
        # while(temp != None):
        #     if myDict.get(temp) == None:
        #         myDict[temp] = pos
        #         pos += 1
        #         temp = temp.next
        #     else:
        #         print(myDict[temp])
        #         return True
        # return False

        # fast/slow runners Also O(n), but O(1) memory
        if(head == None or head.next == None): #empty/single element catcher
            return False

        fast = head.next
        slow = head
        while(fast != slow):
            if(fast == None or fast.next == None):
                return False
            else:
                fast = fast.next.next
                slow = slow.next

        return True




    def makeCycle(self, head, pos):
        temp = head
        i = 0
        tail = head
        while(tail.next != None):
            tail = tail.next

        while(i != pos):
            temp = temp.next
            i += 1
        tail.next = temp

def main():

    myLL = LinkedList()
    # myLL.addNode(-4)#<-pos 3
    # myLL.addNode(0) #<-pos 2
    # myLL.addNode(2) #<-pos 1
    myLL.addNode(1) #<-pos 0

    Solution().makeCycle(myLL.head, 1)

    print(Solution().hasCycle(myLL.head))


if __name__ == '__main__':
    main()
