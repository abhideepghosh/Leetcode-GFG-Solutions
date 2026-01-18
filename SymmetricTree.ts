/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    const checkSymmetry = (p:TreeNode, q:TreeNode) : boolean => {
        if(!p && !q) return true;
        if(!p || !q || p.val !== q.val) return false;
        return checkSymmetry(p.left, q.right) && checkSymmetry(p.right, q.left);
    }
    return checkSymmetry(root.left, root.right);
};
