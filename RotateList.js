/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head;
    let traverseNode = head;
    let size = 1;
    while(traverseNode && traverseNode.next)  {
        traverseNode = traverseNode.next;
        size++;
    }
    if(size === k) return head;
    k = k % size;
    traverseNode.next = head;
    traverseNode = traverseNode.next;
    let rotations = size - k;

    while(rotations > 1) {
        traverseNode = traverseNode.next;
        rotations--;
    }

    head = traverseNode.next;
    traverseNode.next = null;
    return  head;

};
