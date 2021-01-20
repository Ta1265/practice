/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = val || 0;
    this.next = next || null;
}

function LinkedList() {
    this.head = null;
    this.tail = null
}
LinkedList.prototype.insert = function(val) {
    const node = new ListNode(val);
    if (this.tail === null && this.head === null) {
        this.tail = node;
        this.head = node;
    } else {
        this.head.next = node;
        this.head = node;
    }
}
LinkedList.prototype.printForward = function() {
    let temp = this.tail;
    while(temp !== null) {
        console.log(temp.val);
        temp = temp.next;
    }
}
LinkedList.prototype.reverse = function() {
    let prev = this.tail;
    let cur = this.tail.next;
    this.head = this.tail;

    while(cur.next !== null) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    cur.next = prev;
    this.tail = cur;
    this.head.next = null;
}



var addTwoNumbers = function (l1, l2) {
    // let firstTens = 1
    // let firstNum = 0
    // while (l1 !== null) {
    //     firstNum += (l1.val * firstTens);
    //     l1 = l1.next;
    //     firstTens *= 10;
    // }

    // let secondTens = 1
    // let secondNum = 0
    // while (l2 !== null) {
    //     secondNum += (l2.val * secondTens);
    //     l2 = l2.next;
    //     secondTens *= 10;
    // }
    // console.log(firstNum);
    // console.log(secondNum);

    // let sum = firstNum + secondNum;
    // if ( sum < 10) {
    //     return new ListNode(sum);
    // }
    // let tail = null;
    // let node = null;
    // while(sum > 9) {
    //     val = sum % 10;
    //     sum = Math.floor(sum / 10);
    //     if(tail === null) {
    //         node = new ListNode(val);
    //         tail = node;
    //     } else {
    //         node.next = new ListNode(val);
    //         node = node.next;
    //     }
    // }
    // node.next = new ListNode(sum % 10);
    // return tail;

    let newTail = null;
    let newHead = null
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let sum = (l1 !== null ? l1.val : 0 ) + (l2 !== null ? l2.val : 0) + (carry);
        let node = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        if (newTail === null) {
            newTail = node;
            newHead = node;
        } else {
            newHead.next = node;
            newHead = node;
        }
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
    }
    if(carry > 0) {
        newHead.next = new ListNode(carry);
    }
    return newTail;
};

const tester = () => {
    const list1 = new LinkedList();
    [0].forEach( (num) => list1.insert(num));
    const list2 = new LinkedList();
    [0].forEach( (num) => list2.insert(num));
    console.log('Expecting', addTwoNumbers(list1.tail, list2.tail), 'to be a ll with order  [8,9,9,9,0,0,0,1]');
    // const list1 = new LinkedList();
    // [2,4,6].forEach( (num) => list1.insert(num));
    // const list2 = new LinkedList();
    // [5,6].forEach( (num) => list2.insert(num));

    // console.log('Expecting', addTwoNumbers(list1.tail, list2.tail), 'to be a ll with order  [7, 0, 7]');

    // console.log('expect', list1.printForward(), 'to be 2, 4, 3');
    // console.log('expect', list2.printForward(), 'to be 5, 6, 4');

    // list1.reverse();
    // console.log('reverse list1, expecting', list1.printForward());
    // list1.printForward()
    // console.log('to be 3,4,2');


}

tester();

