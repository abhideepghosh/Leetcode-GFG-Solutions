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
 * @param {number} val
 * @return {TreeNode}
 */

const insertNode = (root, val) => {
    if(!root) return new TreeNode(val);
    if(root.val > val) root.left = insertNode(root.left, val);
    else root.right = insertNode(root.right, val);
    return root;
}

var insertIntoBST = function(root, val) {
    root = insertNode(root, val);
    return root;
};
