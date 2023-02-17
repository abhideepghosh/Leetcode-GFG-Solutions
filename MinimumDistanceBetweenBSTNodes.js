/**
 * @param {TreeNode} root
 * @return {number}
 */

const traversal = (root) => {
    let currentValue, previousValue;
    let minValue = Infinity;
    const inorder = (root) => {
        if(!root) return;
        if(root.left) inorder(root.left);
        if(currentValue !== undefined) {
            
            previousValue = currentValue;
            currentValue = root.val;
            minValue = Math.min(minValue, currentValue - previousValue);
        }
        else {
            
            currentValue = root.val;
        }
        if(root.right) inorder(root.right);
    }
    inorder(root);
    return minValue;
}


var minDiffInBST = function(root) {
    return traversal(root);
};
