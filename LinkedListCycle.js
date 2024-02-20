// TC: O(N) SC: O(1)
var hasCycle = function(head) {
    if(!head || !head.next) return false; // Handle empty or single-node lists

    let traverseNode = head;  // Initialize slow pointer
    let fastNode = head;      // Initialize fast pointer

    while(fastNode && fastNode.next) {  // Loop until fast pointer reaches end
        traverseNode = traverseNode.next;       // Move slow pointer one step
        fastNode = fastNode.next.next;          // Move fast pointer two steps

        if(traverseNode === fastNode) return true;  // Cycle detected
    }

    return false;  // No cycle found
};
