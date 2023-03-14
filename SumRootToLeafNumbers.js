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


// Optimized Solution TC: O(N) SC: O(N)
var sumNumbers = function(root) {
    if(!root.left && !root.right) return root.val;
    let result = 0;
    const createNum = (root, str) => {
        if(!root.left && !root.right) {
            result += Number(str + `${root.val}`);
            return;
        }
        if(root.left) createNum(root.left, str + `${root.val}`);
        if(root.right) createNum(root.right, str + `${root.val}`);
    }
    
    createNum(root, '');
    return result;
};



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
// Brute Force Solution TC: O(N) SC: O(N)
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
