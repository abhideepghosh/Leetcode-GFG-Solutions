// TC: O(N) SC: O(N)
var isSameTree = function(p, q) {
  // Base Case 1: If both trees are empty (null), they are considered the same
  if (!p && !q) return true; 

  // Base Case 2:  If only one tree is empty (null), the trees are not the same
  if (!p || !q) return false; 

  // Check if the current node values are not equal
  if (p.val !== q.val) return false; 

  // Recursively compare the left and right subtrees for equality
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);  
};
