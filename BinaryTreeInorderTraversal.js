/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// TC: O(N) SC: O(N) Recursion
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



//TC: O(N) SC: O(N) Iteration
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let current = root;
    while(current || stack.length > 0) {
        while(current) {
            stack.push(current);
            current = current.left;
        }
            current = stack.pop();
            result.push(current.val);
            current = current.right;
    }
    return result;
};
