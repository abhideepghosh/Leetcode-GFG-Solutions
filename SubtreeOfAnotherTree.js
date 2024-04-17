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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// TC: O(M*N) SC: O(N)
const isIdenticalSubRoot = (root, subRoot) => {
    if(!root && !subRoot) return true;
    if(!root || !subRoot) return false;
    if(root.val !== subRoot.val) return false;
    return isIdenticalSubRoot(root.left, subRoot.left) && isIdenticalSubRoot(root.right, subRoot.right);
}
var isSubtree = function(root, subRoot) {
    if(!root && !subRoot) return true;
    if(!root || !subRoot) return false;
    if(isIdenticalSubRoot(root, subRoot)) {
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
