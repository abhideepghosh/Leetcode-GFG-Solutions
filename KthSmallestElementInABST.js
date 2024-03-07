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
 * @param {number} k
 * @return {number}
 */
// TC: O(N) SC: O(N)
var kthSmallest = function(root, k) {
    let count = 0;
    const stack = [];
    let current = root;
    while(current || stack.length) {
        while(current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        count++;
        if(count === k) return current.val;
        current = current.right;
    }
    return -1;
};

// TC: O(N) SC: O(N)
var kthSmallest = function(root, k) {
    let result = 0;
    let count = 0;
    const inorder = (root) => {
        if(!root) return;
        const left = inorder(root.left);
        count++;
        if(count === k) {
            result = root.val;
            return;
        } 
        const right = inorder(root.right);
    }
    inorder(root);
    return result;
};
