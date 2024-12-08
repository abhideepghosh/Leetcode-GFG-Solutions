/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// TC: O(N) SC: O(1)
var isPalindrome = function(head) {
    const reverse = (head) => {
        let prev = null;
        while(head) {
             const next = head.next;
             head.next = prev;
             prev = head;
             head = next;
        }
        return prev;
    }

    let midNode = head;
    let traverseNode = head;

    while(traverseNode && traverseNode.next) {
        traverseNode = traverseNode.next.next;
        midNode = midNode.next;
    }
    traverseNode = head;
    midNode = reverse(midNode);
    while(midNode && traverseNode) {
        if(midNode.val !== traverseNode.val) return false;
        midNode = midNode.next;
        traverseNode = traverseNode.next;
    }
    return true;
};
