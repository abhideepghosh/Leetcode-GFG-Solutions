/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 // TC: O(N) SC: O(N)
var rightSideView = function(root) {
    const result = [];
    const rightView = (root, depth) => {
        if(!root) return;
        if(result.length === depth) {
            result.push(root.val);
        }
        rightView(root.right, depth + 1);
        rightView(root.left, depth + 1);
    }
    rightView(root, 0);
    return result;
};


// Alternate Solution Iteration
function rightSideView(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            
            // Add the rightmost node of each level
            if (i === levelSize - 1) { 
                result.push(node.val);
            }
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
}
