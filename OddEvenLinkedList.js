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
var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let even = head.next;
    let odd = head;
    let evenHead = even;
    while(even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};


// TC: O(N) SC: O(N) Brute Force Solution
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let traverseNode = head;
    const oddList = new ListNode(0);
    const evenList = new ListNode(0);
    let oddPointer = oddList;
    let evenPointer = evenList;
    let count = 1;
    while(traverseNode) {
        if(Math.floor(count % 2) === 0) {
            evenPointer.next = new ListNode(traverseNode.val);
            evenPointer = evenPointer.next;
        }
        else {
            oddPointer.next = new ListNode(traverseNode.val);
            oddPointer = oddPointer.next;
        }
        count++;
        traverseNode = traverseNode.next;
    }
    oddPointer.next = evenList.next;
    return oddList.next;

};
