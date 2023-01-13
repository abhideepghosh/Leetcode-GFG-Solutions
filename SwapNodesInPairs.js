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

var swapPairs = function(head) {
    let result = new ListNode(0);
    result.next = head;

    let resultPointer = result;

    while(resultPointer.next && resultPointer.next.next) {
        let firstNode = resultPointer.next;
        let secondNode = resultPointer.next.next;
        firstNode.next = secondNode.next;
        resultPointer.next = secondNode;
        resultPointer.next.next = firstNode;
        resultPointer = resultPointer.next.next;
    }
    return result.next;
};
