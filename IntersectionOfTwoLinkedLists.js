/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let headAPointer = headA;
    let headBPointer = headB;
    while(headAPointer !== headBPointer) {
        if(headAPointer) headAPointer = headAPointer.next;
        else headAPointer = headB;
        if(headBPointer) headBPointer = headBPointer.next;
        else headBPointer = headA;
    }
    return headAPointer;
};
