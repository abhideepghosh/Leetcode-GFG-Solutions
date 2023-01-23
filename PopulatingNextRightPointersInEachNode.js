/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    const queue = [root];
    while(queue.length !== 0) {
        let rightNode = null;
        const nodeCount = queue.length;
        for(let i=nodeCount - 1; i >= 0; i--) {
            let node = queue.shift();
            node.next = rightNode;
            rightNode = node;
            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left);
        }
    }
    return root;
};
