/**
 * Definition for a Node.
 * function Node(val, neighbors) {
 *     this.val = val === undefined ? 0 : val;
 *     this.neighbors = neighbors === undefined ? [] : neighbors;
 * }
 */

/**
 * Clone Graph
 * @param {Node} node - The node to start cloning from.
 * @return {Node} - The cloned graph.
 */
// TC: O(N) SC: O(N)
var cloneGraph = function(node) {
    // Edge case: if node is null, undefined, empty array or a list of empty arrays
    if (!node) return node;

    // Map to store original nodes to their cloned versions
    const oldToNew = new Map();

    // Recursive function to clone the graph
    const clone = (node) => {
        // If node is already cloned, return the clone
        if (oldToNew.has(node)) return oldToNew.get(node);

        // Create a new node with the same value
        const copy = new Node(node.val);

        // Map the original node to the clone
        oldToNew.set(node, copy);

        // Iterate through the neighbors of the original node
        // and clone them recursively
        node.neighbors.forEach((neighbor) => {
            copy.neighbors.push(clone(neighbor));
        });

        return copy;
    }

    // Start cloning from the input node and return the cloned graph
    return clone(node);
};
