/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const traversal = (root) => {
    if(!root) return [];
    
    const node = root;
    const result = [];
    
    const inorder = (root) => {
        if(!root) return;
        if(root.left) inorder(root.left);
        result.push(root.val);
        if(root.right) inorder(root.right);
    }
    inorder(node);
    return result;
}

var inorderTraversal = function(root) {
    return traversal(root);
};
