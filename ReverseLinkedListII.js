* Definition for singly-linked list.
 /*
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let previousNode = null;
    let traverseNode = head;
    while(left > 1) {
        previousNode = traverseNode;
        traverseNode = traverseNode.next;
        left--;
        right--;
    }
    let connection = previousNode;
    let tail = traverseNode;
    let prev = null;
    while(right > 0) {
        const temp = traverseNode.next;
        traverseNode.next = prev;
        prev = traverseNode;
        traverseNode = temp;
        right--;
    }
    if(connection) connection.next = prev;
    else head = prev;
    tail.next = traverseNode;
    return head;
};
