"use strict";
/*
147. Insertion Sort List
Medium

Sort a linked list using insertion sort.


A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list


Algorithm of Insertion Sort:

Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
It repeats until no input elements remain.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 */
// interface ListNode {
//   val: number;
//   next: ListNode | null;
// }
class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
const makeList = (vals) => {
    let head = new ListNode(vals[0], null);
    let temp = head;
    let i = 1;
    while (i < vals.length) {
        temp.next = new ListNode(vals[i], null);
        temp = temp.next;
        i++;
    }
    return head;
};
var insertionSortList = function (head) {
    if (head === null || head.next === null)
        return head;
    let cur = head.next;
    let iter = head;
    while (cur !== null) {
        while (iter !== cur) {
            if (cur.val < iter.val) {
                let temp = cur.val;
                cur.val = iter.val;
                iter.val = temp;
            }
            else {
                iter = iter.next;
            }
        }
        iter = head;
        cur = cur.next;
    }
    return head;
};
function insertionSortList_tester() {
    const input1 = makeList([4, 2, 1, 3]);
    console.log(insertionSortList(input1));
    const input2 = makeList([-1, 5, 3, 4, 0]);
    let ans2 = insertionSortList(input2);
    const ans2list = [];
    while (ans2 !== null) {
        ans2list.push(ans2.val);
        ans2 = ans2.next;
    }
    console.log('ans2list=', ans2list);
    const input3 = makeList([]);
    let ans3 = insertionSortList(input3);
    const ans3list = [];
    while (ans3 !== null) {
        ans3list.push(ans3.val);
        ans3 = ans3.next;
    }
    console.log('ans3list=', ans3list);
}
;
insertionSortList_tester();
