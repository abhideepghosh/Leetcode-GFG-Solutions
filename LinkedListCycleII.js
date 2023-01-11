/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let traverseNode = head;
    let fastNode = head;

    while(fastNode && fastNode.next) {
        fastNode = fastNode.next.next;
        traverseNode = traverseNode.next;
        if(fastNode === traverseNode) {
            let entry = head;
            while(entry !== fastNode) {
                entry = entry.next;
                fastNode = fastNode.next;
            }
            return entry;
        }
    }
    return null;
};
