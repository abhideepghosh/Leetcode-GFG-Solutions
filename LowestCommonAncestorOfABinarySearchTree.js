// TC: O(logn) SC: O(1)
var lowestCommonAncestor = function(root, p, q) {
    while (root) { // Iterate as long as we have a valid node 
        // Case 1: Both 'p' and 'q' are smaller than the current node
        if (p.val < root.val && q.val < root.val) { 
            root = root.left; // Move search towards the left subtree
        } 
        // Case 2: Both 'p' and 'q' are larger than the current node
        else if (p.val > root.val && q.val > root.val) { 
            root = root.right; // Move search towards the right subtree
        } 
        // Case 3: LCA Found! 
        // One node lies on the left, the other on the right OR one of the nodes is the current node 
        else { 
            return root; 
        }
    }
    return null; // This line should theoretically not be reached if it's a valid BST
};
