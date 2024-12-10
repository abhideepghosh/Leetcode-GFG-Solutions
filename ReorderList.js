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
    if (!head || !head.next) return;

    // 1. Find the middle of the linked list
    const findMiddle = (head) => {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    };

    // 2. Reverse a linked list
    const reverseList = (head) => {
        let prev = null;
        while (head) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    };

    const mid = findMiddle(head);
    let secondHalf = reverseList(mid.next);
    mid.next = null;

    let firstHalf = head;
    // 3. Merge the two halves
    while (firstHalf && secondHalf) {
        let firstNext = firstHalf.next;
        let secondNext = secondHalf.next;

        firstHalf.next = secondHalf;
        secondHalf.next = firstNext;

        firstHalf = firstNext;
        secondHalf = secondNext;
    }
};



// Similar Solution TC: O(N) SC: O(1)
var reorderList = function(head) {
    let firstHalf = head;
    let secondHalf = ((head) => {
        // Finding the Mid Node
        let midNode = head;
        let fastNode = head;
        while(fastNode && fastNode.next) {
            midNode = midNode.next;
            fastNode = fastNode.next.next;
        }
        // Breaking the linked list into 2 seperate lists
        let breakPoint = midNode;
        midNode = midNode.next;
        breakPoint.next = null;
        // Reversing the Second Half of the linked list
        let prev = null;
        while(midNode) {
            const next = midNode.next;
            midNode.next = prev;
            prev = midNode;
            midNode = next;
        }
        return prev;
    })(head);
    let firstHead = firstHalf;
    let secondHead = secondHalf;
    while(firstHead && secondHead) {
        const firstNext = firstHead.next;
        const secondNext = secondHead.next;
        firstHead.next = secondHead;
        secondHead.next = firstNext;
        firstHead = firstNext;
        secondHead = secondNext;
    }
};
