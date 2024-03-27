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
var rightSideView = function(root) {
    const result = [];
    const createRightView = (root, result, depth) => {
        if(!root) return;
        if(depth > result.length) {
            result.push(root.val);
        }
        createRightView(root.right, result, depth + 1);
        createRightView(root.left, result, depth + 1);
    }
    createRightView(root, result, 1);
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
