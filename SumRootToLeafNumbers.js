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

const createNum = (root, result, str) => {
    if(!root.left && !root.right) {
        result.push(str + `${root.val}`);
        return;
    }
    if(root.left) createNum(root.left, result, str + `${root.val}`);
    if(root.right) createNum(root.right, result, str + `${root.val}`);
}

var sumNumbers = function(root) {
    if(!root.left && !root.right) return root.val;
    const result = [];
    createNum(root, result, '');
    return result.reduce((acc, curr) => acc + Number(curr), 0);
};
