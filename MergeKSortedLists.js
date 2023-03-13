/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const merge = (l1, l2) => {
    const result = new ListNode(0);
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
    if(l2) resultPointer.next = l2;
    return result.next;
}

const mergeLists = (lists, start, end) => {
    if(start >= end) return lists[start];
    const mid = start + Math.floor((end - start) / 2);
    let left = mergeLists(lists, start, mid);
    let right = mergeLists(lists, mid + 1, end);
    return merge(left, right);
}

var mergeKLists = function(lists) {
    if(lists.length === 0) return null;
    if(lists.length === 1) return lists[0];
    return mergeLists(lists, 0, lists.length - 1);
};
