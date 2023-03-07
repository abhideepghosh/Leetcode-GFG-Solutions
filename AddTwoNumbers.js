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
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let resultPointer = result;
    let carry = 0;
    
    while(l1 || l2 || carry) {
        const l1Val = l1 ? l1.val : 0;
        const l2Val = l2 ? l2.val : 0;

        const sum = l1Val + l2Val + carry;

        resultPointer.next = new ListNode(Math.floor(sum % 10));
        carry = Math.floor(sum / 10);

        resultPointer = resultPointer.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;

    }

    return result.next;

};
