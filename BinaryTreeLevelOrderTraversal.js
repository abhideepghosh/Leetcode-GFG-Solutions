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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];
    while(queue.length !== 0) {
        const list = [];
        const size = queue.length;
        for(let i=0; i<size; i++) {
            const node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            list.push(node.val);
        }
        result.push(list);
    }
    return result;
};
