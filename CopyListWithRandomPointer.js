/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const map = new Map();
    let traverseNode = head;
    while(traverseNode) {
        map.set(traverseNode, new ListNode(traverseNode.val));
        traverseNode = traverseNode.next;
    }
    traverseNode = head;
    while(traverseNode) {
        map.get(traverseNode).next = map.get(traverseNode.next) ?? null;
        map.get(traverseNode).random = map.get(traverseNode.random) ?? null;
        traverseNode = traverseNode.next;
    }
    return map.get(head);
};
