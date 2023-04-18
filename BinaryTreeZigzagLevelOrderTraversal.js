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
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];
    let direction = true;
    while(queue.length !== 0) {
        const list = [];
        const size = queue.length;
      
        for(let i=0; i<size; i++) {
            const node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            if(direction) {
                list.push(node.val);
            }
            else {
                list.unshift(node.val);
            }
        }

        result.push(list);
        direction = !direction;
    }
    return result;
};
