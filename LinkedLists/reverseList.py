# Reverse a singly linked list.

# Example:

# Input: 1->2->3->4->5->NULL
# Output: 5->4->3->2->1->NULL
# Follow up:

# A linked list can be reversed either iteratively or recursively. Could you implement both?

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
        

class Solution:

    def reverseList(self,head) -> ListNode:

        #iterative = O(n)
        
        # #iteratively
        # prev_ptr = None
        # curr_ptr = head
        # next_ptr = None
        
        # while(curr_ptr != None): #reverse next pointers backwards as you progress forward in the list
        #     next_ptr = curr_ptr.next
        #     curr_ptr.next = prev_ptr
        #     prev_ptr = curr_ptr
        #     curr_ptr = next_ptr

        # head = prev_ptr

        # return head

        ###recursively####

        #base case walk through
        #say we have 1->2->3
        #head = 1
        if(head == None or head.next == None):
            return head
        reverseListHeadNode = self.reverseList(head.next) #first pass in node 2, then 3, 3 hits if RLH rets 3
        head.next.next = head 
        #assign the .next pointer of 3 to be head(2)
        #head is still 2 at base recursion, .next.next skips over 3 places 2 after 3
        head.next = None #head is still 2 at base recursion, so is actually the tail, its .next should be null
        return reverseListHeadNode #return the real list head which is the base recursion (3), next recursion unwind adds the 1 in place of the null and we are done






def main():

    myLL = LinkedList()
    myLL.addNode(4)
    myLL.addNode(3)
    myLL.addNode(2)
    myLL.addNode(1)



    myLL.printList()
    print("------")
    myLL.head = Solution().reverseList(myLL.head)
    myLL.printList()

if __name__ == '__main__':
    main()