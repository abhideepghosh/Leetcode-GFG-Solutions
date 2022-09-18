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
// Time Complexity : O(N) Space Complexity : O(N)
class Solution {
    public TreeNode reverseOddLevels(TreeNode root) {
        
        // Calling preorder function
        preorder(root.left, root.right, 0);
        
        // Returining The Modified Tree
        return root;
        
    }
    
    public void preorder(TreeNode root1, TreeNode root2, int level){
        
        // If Any Of The Root Is Null, We Return
        if(root1 == null || root2 == null){
            return;
        }
        
        // Because We Started The Preorder Function On The Nodes Below The Root Of The Tree, All Odd Roots Are On Even Places
        if(level % 2 == 0){
            // Simple Swap Function
            swap(root1, root2);
        }
        
        // Calling The Function Recursively For Left And Right And Right And Left
        preorder(root1.left, root2.right, level+ 1);
        preorder(root1.right, root2.left, level + 1);
        
    }
    
    // Swap Function
    public void swap(TreeNode root1, TreeNode root2){
        int temp = root1.val;
        root1.val = root2.val;
        root2.val = temp;
    }
    
}
