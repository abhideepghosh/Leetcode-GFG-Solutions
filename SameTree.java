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
Runtime: 0 ms, faster than 100.00% of Java online submissions for Same Tree.
Memory Usage: 40.6 MB, less than 85.14% of Java online submissions for Same Tree.
*/
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        
        // If both are null, it means that the condition has never been false once, hence return true
        if(p == null && q == null){
            return true;
        }
        
        // If one of them is null, then we return false
        if(p == null || q == null){
            return false;
        }
        
        // If there values are not same, then we return false
        if(p.val != q.val){
            return false;
        }
        
        // Running Recursion For Both Sides Of The Tree
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
