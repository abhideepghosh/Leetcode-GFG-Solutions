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
// TC: O(NlogN) SC: O(N)
const merge = (l1, l2) => {
    let result = new ListNode(0);
    let resultPointer = result;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            resultPointer.next = l1;
            l1 = l1.next;
        }
        else {
            resultPointer.next = l2;
            l2 = l2.next;
        }
        resultPointer = resultPointer.next;
    }
    if(l1) resultPointer.next = l1;
    if(l2) resultPointer.next  =l2;

    return result.next;
}

var sortList = function(head) {
    
    if(!head || !head.next) return head;

    let temp = head;
    let mid = head;
    let fast = head;

    while(fast && fast.next) {
        temp = mid;
        mid = mid.next;
        fast = fast.next.next;
    }
    temp.next = null;
    let left = sortList(head);
    let right = sortList(mid);

    return merge(left, right);

};
