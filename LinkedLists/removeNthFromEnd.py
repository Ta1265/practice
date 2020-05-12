# Given a linked list, remove the n-th node from the end of list and return its head.

# Example:

# Given linked list: 1->2->3->4->5, and n = 2.

# After removing the second node from the end, the linked list becomes 1->2->3->5.
# Note:

# Given n will always be valid.

# Follow up:

# Could you do this in one pass?

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class ListNode:

    def __init__(self,x):
        self.val = x
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def addNode(self,x):
        if(self.head == None):
            self.head = ListNode(x)
        else:
            temp = self.head
            self.head = ListNode(x)
            self.head.next = temp
    def printList(self):
        temp = self.head

        while(temp.next != None):
            print(temp.val)
            temp = temp.next
        print(temp.val)

class Solution:
    def removeNthFromEnd(self, head, n) -> ListNode:

        # if(head.next == None):
        #     head = None
        #     return head

        # temp = head
        # nl = [temp]
        # while(temp.next != None):
        #     temp = temp.next
        #     nl.append(temp)

        # if(n == 1): #to delete last(tail) node in list we need to modify second to last
        #     nl[-2].next = None
        # else: # n > 1 (we arent deleting the last(tail) node)
        #     nl[-n].val = nl[-n].next.val
        #     nl[-n].next = nl[-n].next.next

        # return head

        #using 2 pointers fast and slow

        dummy = ListNode(0) #use dummy and n+1 to account for single element lists
        dummy.next = head
        fast = dummy
        slow = dummy
        # put fast n spaces ahead of slow, so that slow ends up at the n space to dele
        # when fast reaches the end of  the list
        for i in range (n+1):
            fast = fast.next
        while fast != None:
            slow = slow.next
            fast = fast.next
        
        slow.next = slow.next.next

        return dummy.next
        





def main():

    myLL = LinkedList()

    
    # myLL.addNode(5)
    # myLL.addNode(4)
    # myLL.addNode(3)
    # myLL.addNode(2)
    myLL.addNode(1)

    myLL.printList()
    print("--------")
    Solution().removeNthFromEnd(myLL.head,1)

    myLL.printList()

if __name__ == '__main__':
    main()