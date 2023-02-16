/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
    if(!root) return 0;
    const leftMax = maxDepth(root.left);
    const rightMax = maxDepth(root.right);
    return Math.max(leftMax, rightMax) + 1;    
};
