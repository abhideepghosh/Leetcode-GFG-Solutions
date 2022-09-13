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
    public int minDepth(TreeNode root) {
        
        // If The Root Itself Is Null, Then We Return 0
        if (root == null){
            return 0;
        } 
        
        // If The Root Is A Leaf Node, Then We Return 1
        if (root.left == null && root.right == null){
            return 1;
        }
        
        // If Only Left Is Null
        if (root.left == null){
            return minDepth(root.right) + 1;
        }
        // If Only Right Is Null
        if (root.right == null){
            return minDepth(root.left) + 1;
        } 
        
        // Returning Minimum Of minDepth Of left And Right + Its Current Count
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
}
