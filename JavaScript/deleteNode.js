/*
Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:



 

Example 1:

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
Example 2:

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
 

Note:

The linked list will have at least two elements.
All of the nodes' values will be unique.
The given node will not be the tail and it will always be a valid node of the linked list.
Do not return anything from your function.


*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function LinkedList() {

    this.head = null;

    this.addNode = function (val) {
        if (this.head === null) {
            this.head = new ListNode(val);
        } else if (this.head.next === null) {
            this.head.next = new ListNode(val);
        } else {
            let temp = this.head.next;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new ListNode(val);
        }

    }

    this.printList = function () {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.val);
            temp = temp.next;
        }
    }

    this.deleteNode = function (node) {

        if (this.head.val == node.val) {
            this.head = this.head.next
            return;
        } else if (this.head.next.val == node.val) {
            if (this.head.next.next !== null) {
                this.head.next = this.head.next.next;
            }
        }

        let temp = this.head;
        while (temp.next !== null && temp.next.val != node.val) {
            temp = temp.next;
        }
        if (temp.next.next === null) {
            temp.next = null;
        } else {
            temp.next = temp.next.next;
        }
    }
}

myLL = new LinkedList();
myLL.addNode(1)
myLL.addNode(2)
myLL.addNode(3)
myLL.addNode(4)

// delete node as an attribute function, not what leetcode is asking for though
aNode = myLL.head.next.next.next;
console.log("before deletion")
myLL.printList()

myLL.deleteNode(aNode)
console.log("after deletion")
myLL.printList()

// //leetcode solution
// let deleteNode = function (node) {
//     if (node.next !== null) {
//         node.val = node.next.val
//         node.next = node.next.next
//     } else {
//         node = null
//     }
// }

// aNode = myLL.head.next.next.next;
// console.log("before deletion", aNode);
// myLL.printList();

// deleteNode(aNode);
// console.log("After deletion");
// myLL.printList();

