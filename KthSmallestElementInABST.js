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
    let counter = 0;
    const modifiedInorder = (root) => {
        if(!root) return;
        modifiedInorder(root.left);
        counter++;
        if(counter === k) {
            result = root.val;
            return;
        }
        modifiedInorder(root.right);
    }
    modifiedInorder(root);
    return result;
};
