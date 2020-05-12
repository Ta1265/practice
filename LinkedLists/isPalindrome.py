# Given a singly linked list, determine if it is a palindrome.
# reads same backwards as it does forwards

# Example 1:

# Input: 1->2
# Output: false
# Example 2:

# Input: 1->2->2->1
# Output: true
# Follow up:
# Could you do it in O(n) time and O(1) space?

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
        while(temp != None):
            print(temp.val)
            temp = temp.next
            temp = temp.next

class Solution:
    def isPalindrome(self, head) -> bool:

        # #stack method o(n^2)

        # stackList = []

        # fast = head
        # slow = head
        # #place nodes in stack
        # while(fast != None):
        #     stackList.append(fast)
        #     fast = fast.next
        # #compair poped nodes with front
        # while(slow != None):
        #     comp = stackList.pop()
        #     if(slow.val != comp.val):
        #         return False
        #     slow = slow.next

        #better method using list slicing python
        
        stackList = []
        while(head != None):
            stackList.append(head.val)
            head = head.next
        return stackList == stackList[::-1]






def main():
    myLL1 = LinkedList()
    myLL1.addNode(1)
    myLL1.addNode(2)
    myLL1.addNode(2)
    myLL1.addNode(1)

    ##myLL1.addNode(1)
    myLL1.printList

    print(Solution().isPalindrome(myLL1.head))


if __name__ == '__main__':
    main()