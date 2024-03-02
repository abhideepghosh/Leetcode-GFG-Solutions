// TC: O(N^2) SC: O(N)
var buildTree = function(preorder, inorder) {
    // Base Case: If either the preorder or inorder is empty, the tree is empty
    if (!preorder.length || !inorder.length) return null; 

    // Step 1: Identify the root value (first element in preorder)
    const rootVal = preorder[0];  

    // Step 2: Find the root's position in the inorder traversal
    const inorderIdx = inorder.indexOf(rootVal); 

    // Create a TreeNode for the root
    const root = new TreeNode(rootVal);

    // Step 3: Split inorder into left and right subtree segments
    const leftInorder = inorder.slice(0, inorderIdx); 
    const rightInorder = inorder.slice(inorderIdx + 1); 

    // Step 4: Split preorder into left and right subtree segments
    // Note: lengths of left/right subtrees are inferred from inorder splits
    const leftPreorder = preorder.slice(1, leftInorder.length + 1); 
    const rightPreorder = preorder.slice(leftInorder.length + 1); 

    // Step 5: Recursively build the left and right subtrees
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    // Step 6: Return the constructed root node
    return root; 
};
