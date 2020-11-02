/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = (head) => {
    let pre = null;
    while (head) {
        const next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    
    return pre
};

console.log(reverseList([1, 2, 3, 4, 5]))