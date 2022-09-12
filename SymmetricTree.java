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
class Solution {
    public boolean isSymmetric(TreeNode root) {
        // Calling isSymmetric Overloaded Function
        return isSymmetric(root, root);
    }
    
    // Helper Function
    public boolean isSymmetric(TreeNode t1, TreeNode t2){
        
        // If All Conditions Satisfy And Both Nodes Are Null Then Return True
        if(t1 == null && t2 == null){
            return true;
        }
        
        // If All Conditions Satisfy But One Reaches Null Then Return False
        if(t1 == null || t2 == null){
            return false;
        }
        
        // Calling Function With Left Right And Right Left Combo And Also Checking For Values
        return t1.val == t2.val && isSymmetric(t1.left, t2.right) && isSymmetric(t1.right, t2.left);
    }
}
