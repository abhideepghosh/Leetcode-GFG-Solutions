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
 * @return {boolean}
 */

const detectSymm = (left, right) => {
    if(!left && !right) return true;
    if(!left || !right) return false;
    return (left.val === right.val) && detectSymm(left.left, right.right) && detectSymm(left.right, right.left); 
}

var isSymmetric = function(root) {
    return detectSymm(root, root);
};
