var isValidBST = function(root) {
    const validateBST = (root, min, max) => {
        // Base Case: Empty subtree is valid
        if (!root) return true; 

        // Current Node Violates BST Property:
        if (root.val <= min || root.val >= max) return false;

        // Validate Left Subtree (values must be smaller than the current node)
        const leftIsValid = validateBST(root.left, min, root.val);

        // Early Termination (Left subtree is already invalid)
        if (!leftIsValid) return false; 

        // Validate Right Subtree (values must be larger than the current node)
        return validateBST(root.right, root.val, max);  
    }

    // Initial Value Ranges:
    const min = -Infinity; 
    const max = Infinity; 

    // Start Validation:
    return validateBST(root, min, max); 
};
