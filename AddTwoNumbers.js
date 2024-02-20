/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const result = new ListNode(0);  // Create a dummy head node for the result
    let resultPointer = result;      // Pointer to traverse and build the result list
    let carry = 0;                   // Initialize carry for digit-wise addition

    while (l1 || l2 || carry) {      // Loop while there are digits or a carry-over
        const l1Val = l1 ? l1.val : 0;   // Get the value from l1 (0 if l1 is null)
        const l2Val = l2 ? l2.val : 0;   // Get the value from l2 (0 if l2 is null)
        const sum = l1Val + l2Val + carry; // Calculate the sum with carry

        carry = Math.floor(sum / 10);       // Update the carry (quotient)
        resultPointer.next = new ListNode(sum % 10); // Create a new node with the digit (remainder) 
        resultPointer = resultPointer.next;          // Move the pointer to the new node

        if (l1) l1 = l1.next; // Advance l1 if possible
        if (l2) l2 = l2.next; // Advance l2 if possible
    }

    return result.next; // Return the actual head of the result list (skip the dummy node)
};
