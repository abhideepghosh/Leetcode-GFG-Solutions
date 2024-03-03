/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// TC: O(N) SC: O(N)
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if(!left) return right;
    else if(!right) return left;
    else return root;
    // Alternate Way of writing the if else condition
    // if(left && right) return root;
    // else return left || right;
};
