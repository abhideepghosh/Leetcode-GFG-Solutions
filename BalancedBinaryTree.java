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
Runtime: 1 ms, faster than 99.18% of Java online submissions for Balanced Binary Tree.
Memory Usage: 43.8 MB, less than 78.67% of Java online submissions for Balanced Binary Tree.
*/

class Solution {
    
    // For Storing Result
    boolean flag = true;
    
    //  Main Function
    public boolean isBalanced(TreeNode root) {
        
        // For Calculating The Max Depth And Updating The Result Flag
        maxDepth(root);
        
        // Returning The Result Flag
        return flag;
        
    }
    
    // Helper Function
    public int maxDepth(TreeNode root){
        
        // Base Condition For Recursion To Stop
        if(root == null){
            return 0;
        }
        
        // Calculating The Depth Of Left And Right Subtrees
        int lengthLeft = maxDepth(root.left);
        int lengthRight = maxDepth(root.right);
        
        // Updating Condition
        // If The Difference Of maxDepth Of Both Sides Becomes Greater Than 1, Then We Update The Flag To False 
        if(Math.abs(lengthLeft - lengthRight) > 1){
            flag = false;
        }
        
        // Return Current Depth + 1
        return Math.max(lengthLeft, lengthRight) + 1;
        
    }
    
}
