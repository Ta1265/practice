# Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

# Example:

# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4



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
    def mergeTwoLists(self, l1, l2) -> ListNode:


        tail = ListNode(0)
        tail.next = None
        headTracker = tail

        while(l1 != None or l2 != None):
            if(l1 == None):
                tail.next = l2
                break
            elif(l2 == None):
                tail.next = l1
                break

            if(l1.val<l2.val):
                old_l1 = l1
                l1 = l1.next
                #advance tail to point to itself as old_l1
                old_l1.next = tail.next
                tail.next = old_l1
            else:#(l1>l2)
                old_l2 = l2
                l2 = l2.next
                #advance tail to point to itself as old_l2
                old_l2.next = tail.next
                tail.next = old_l2

            #advance again to point to front of new l1 or l2
            tail = tail.next

        return headTracker.next #skip dummy

    def linkNodes(self, dest, src):
        if(dest == None):
            dest = ListNode(0)
        #front src node
        oldsrc = src
        #advance src 
        src = src.next
        #link old dest
        oldsrc.next = dest
        #move old dest forward
        dest = oldsrc



def main():
    
    list1 = LinkedList()
    list2 = LinkedList()
    answer = LinkedList()
    

    list1.addNode(4)
    list1.addNode(2)
    list1.addNode(1)

    list2.addNode(4)
    list2.addNode(3)
    list2.addNode(1)

    answer.head = Solution().mergeTwoLists(list1.head, list2.head)

    answer.printList()



if __name__ == '__main__':
    main()