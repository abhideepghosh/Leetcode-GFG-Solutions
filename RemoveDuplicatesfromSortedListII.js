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
 // TC: O(N) SC: O(1)
var deleteDuplicates = function(head) {
    
    if(!head || !head.next) return head;
    
    const result = new ListNode(0);
    let resultPointer = result, traverseNode = head, prev = null;
    
    while(traverseNode) {
        if((prev && !traverseNode.next && traverseNode.val !== prev.val)
            || (prev && traverseNode.val !== prev.val && traverseNode.val !== traverseNode.next.val)
            || (!prev && traverseNode.val !== traverseNode.next.val)) {
            resultPointer.next = new ListNode(traverseNode.val);
            resultPointer = resultPointer.next;
            prev = traverseNode;
            traverseNode = traverseNode.next;
        }
        else {
            prev = traverseNode;
            traverseNode = traverseNode.next;
        }
    }
    return result.next;
};
