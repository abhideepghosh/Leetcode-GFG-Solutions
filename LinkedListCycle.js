/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) return false;
    let stableNode = head;
    let unstableNode = head.next;
    while(stableNode !== unstableNode) {
        if(!stableNode || !stableNode.next ||
        !unstableNode || !unstableNode.next ||
        !unstableNode.next.next) return false;
        stableNode = stableNode.next;
        unstableNode = unstableNode.next.next;
    }
    return true;
};
