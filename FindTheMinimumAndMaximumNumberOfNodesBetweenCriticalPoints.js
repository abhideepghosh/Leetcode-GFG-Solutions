/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
//TC: O(N) SC: O(N)
var nodesBetweenCriticalPoints = function(head) {
    let prev = null; // Initialize the previous node as null
    let next = null; // Initialize the next node as null
    let result = [-1, -1]; // Initialize the result array with default values indicating no critical points found
    const store = []; // Array to store the indices of critical points
    let idx = 0; // Initialize the index counter

    // Traverse the linked list
    while (head) {
        next = head.next; // Set the next node
        // Check if both previous and next nodes exist
        if (prev && next) {
            // Check if the current node is a local minima
            const localMinima = prev.val > head.val && next.val > head.val;
            // Check if the current node is a local maxima
            const localMaxima = prev.val < head.val && next.val < head.val;
            // If the current node is either a local minima or maxima, store its index
            if (localMinima || localMaxima) {
                store.push(idx);
            }
        }
        prev = head; // Move the previous node to the current node
        head = head.next; // Move to the next node
        idx++; // Increment the index counter
    }

    // Check if there are at least two critical points
    if (store.length >= 2) {
        // Calculate the maximum distance between the first and last critical points
        let maxDistance = store[store.length - 1] - store[0];
        let minDistance = Infinity; // Initialize the minimum distance to infinity

        // Calculate the minimum distance between consecutive critical points
        for (let i = 1; i < store.length; i++) {
            minDistance = Math.min(minDistance, store[i] - store[i - 1]);
        }
        result = [minDistance, maxDistance]; // Update the result array with the calculated distances
    }

    return result; // Return the result array
};
