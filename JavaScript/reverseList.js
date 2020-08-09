/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

let ListNode = function (val) {
    this.val = val;
    this.next = null;
}

let LinkedList = function () {

    this.head = null

    this.addNode = function (val) {
        if (this.head === null) {
            this.head = new ListNode(val);
        } else {
            temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new ListNode(val);
        }
    }
    this.printList = function () {
        temp = this.head;
        while (temp !== null) {
            console.log(temp.val);
            temp = temp.next
        }
    }
    // this.reverseList = function () {

    //     let prev = null;
    //     let cur = this.head;
    //     let next = this.head.next;
    //     while (next !== null) {
    //         cur.next = prev;
    //         prev = cur;
    //         cur = next;
    //         next = cur.next;
    //     }
    //     cur.next = prev;
    //     this.head = cur;
    // }

}
//leetcode answer makes you return a new cur node for some reason
reverseList = function (head) {

    if (head === null) { // for empty list
        return head;
    }

    let prev = null;
    let cur = head;
    let next = head.next;
    while (next !== null) {
        cur.next = prev;
        prev = cur;
        cur = next;
        next = cur.next;
    }
    cur.next = prev;
    return cur;
}


myLL = new LinkedList();
myLL.addNode(1);
myLL.addNode(2);
myLL.addNode(3);

console.log("before");
myLL.printList();

let revdList = reverseList(myLL.head);
console.log(revdList)
console.log("after");
myLL.printList();