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
    const dRightfs = (root, depth) => {
        if(!root) return;
        if(depth === result.length) result.push(root.val);
        dRightfs(root.right, depth + 1);
        dRightfs(root.left, depth + 1);
    }
    dRightfs(root, 0);
    return result;
};
