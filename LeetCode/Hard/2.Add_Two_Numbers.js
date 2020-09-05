/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.
*/

/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
    const head = new ListNode(0);
    let point = head,
        append = 0,
        run = (l1, l2, point) => {
            if (l1 === null && l2 === null) {
                if (append == 1) {
                    point.next = new ListNode(1);
                }
                return head.next;
            }
            
            let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + append;
            if (sum > 9) {
                point.next = new ListNode(sum % 10);
                append = 1;
            } else {
                point.next = new ListNode(sum);
                append = 0;
            }
            return run(l1 ? l1.next : null, l2 ? l2.next : null, point.next);
        };
    return run(l1, l2, point)
};

console.log(addTwoNumbers([2, 4, 3][5, 6, 4]));