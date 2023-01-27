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
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let traverseNode = head;
    let stableNode = head;
    while(traverseNode && traverseNode.next) {
        if(traverseNode.val === traverseNode.next.val) traverseNode = traverseNode.next;
        else {
            traverseNode = traverseNode.next;
            stableNode.next = traverseNode;
            stableNode = stableNode.next;
        }
    }
    stableNode.next = traverseNode.next;
    return head;
};
