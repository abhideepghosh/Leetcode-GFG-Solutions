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
 * @return {number}
 */
var maxPathSum = function(root) {
    let result = -Infinity;
    const dfs = (node) => {
        if(!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        result = Math.max(left + right + node.val, result);
        return Math.max(0, node.val + left, node.val + right);
    }
    dfs(root);
    return result;
};
