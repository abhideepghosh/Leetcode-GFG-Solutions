/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 // TC: O(N) SC: O(1)
var reorderList = function(head) {
    if (!head || !head.next) return; // Handle empty or single-node lists

    // Helper function to reverse a linked list in-place
    const reverseList = (head) => {
    let prev = null;
    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

    // 1. Find the Middle Node
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse the Second Half
    let secondHalf = reverseList(slow.next);
    slow.next = null; // Detach the first half

    // 3. Merge the Two Halves
    let firstHalf = head;
    while (secondHalf) {
        let temp1 = firstHalf.next;
        let temp2 = secondHalf.next;

        firstHalf.next = secondHalf;
        secondHalf.next = temp1;

        firstHalf = temp1;
        secondHalf = temp2;
    }
};


