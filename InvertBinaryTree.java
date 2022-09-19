/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Invert Binary Tree.
Memory Usage: 41.1 MB, less than 81.41% of Java online submissions for Invert Binary Tree.
*/
// Optimized Solution TC: O(N) SC: O(N) // Recursion Call Stack 
class Solution {
    public TreeNode invertTree(TreeNode root) {
        
        // Edge Case Handled
        if(root == null){
            return root;
        }
        
        // We Call right Node And Left Node Recursively To Reach The Leaf Nodes Of The Tree
        TreeNode right = invertTree(root.right);
        TreeNode left = invertTree(root.left);
        
        // We Swap Values Of Left And Right From Bottom To Top
        root.left = right;
        root.right = left;
        
        // Returning Modified Tree
        return root;
        
    }
}
