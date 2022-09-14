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
Runtime: 0 ms, faster than 100.00% of Java online submissions for Binary Tree Postorder Traversal.
Memory Usage: 42.3 MB, less than 40.31% of Java online submissions for Binary Tree Postorder Traversal.
*/
// TC: O(n) SC: O(n)
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        
        // Creating List To Store Data
        List<Integer> result = new ArrayList<>();
        
        // Passing List With The Root In The PostOrder Traversal Function
        postorder(result, root);
        
        // Returning The Final Result
        return result;
        
    }
    
    // PreOrder Traversal Function
    public void postorder(List<Integer> result, TreeNode root){
        
        // Base Case To Stop Recursion
        if(root == null){
            return;
        }
        
        //Calling In Order For The Left Side
        postorder(result, root.left);
        
        // Calling In Order For The Right Side
        postorder(result, root.right);
        
        // Adding The Value Of Root
        result.add(root.val);
        
    }
    
}
