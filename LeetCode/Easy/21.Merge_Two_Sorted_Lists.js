/*
Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together the nodes of the first two lists.

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

let mergeTwoLists = (l1, l2) => {
    if (!l1 || !l2) return l1 || l2;

    const linkList = (smaller, greater) => {
        smaller.next = mergeTwoLists(smaller.next, greater);
        return smaller;
    };
    return l1.val < l2.val ? linkList(l1, l2) : linkList(l2, l1);
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))