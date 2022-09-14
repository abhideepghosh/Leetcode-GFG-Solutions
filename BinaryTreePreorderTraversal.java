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
Runtime: 0 ms, faster than 100.00% of Java online submissions for Binary Tree Preorder Traversal.
Memory Usage: 40.9 MB, less than 85.65% of Java online submissions for Binary Tree Preorder Traversal.
*/

// TC: O(n) SC:O(n)
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        
        // Creating List To Store Data
        List<Integer> result = new ArrayList<>();
        
        // Passing List With The Root In The PreOrder Traversal Function
        preorder(result, root);
        
        // Returning The Final Result
        return result;
    }
    
    // PreOrder Traversal Function
    public void preorder(List<Integer> result, TreeNode root){
        
        // Base Case To Stop Recursion
        if(root == null){
            return;
        }
        
        // Adding The Value Of Root
        result.add(root.val);
        
        //Calling In Order For The Left Side
        preorder(result, root.left);
        
        // Calling In Order For The Right Side
        preorder(result, root.right);
    }
    
}
