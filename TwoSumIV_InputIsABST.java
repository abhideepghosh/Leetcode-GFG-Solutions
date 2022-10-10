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
Runtime: 3 ms, faster than 97.12% of Java online submissions for Two Sum IV - Input is a BST.
Memory Usage: 42.4 MB, less than 97.61% of Java online submissions for Two Sum IV - Input is a BST.
*/
// TC: O(N) SC: O(N)
class Solution {
    public boolean findTarget(TreeNode root, int k) {
        
        // Calling Helper Function
        // In a BST, There Are Generally No Duplicates, Hence We Can Use A Set
        return findPair(root, k, new HashSet<Integer>());
            
    }
    
    // Helper Function
    public boolean findPair(TreeNode root, int target, HashSet<Integer> set){
        
        // If We Did Not Find A Single Pair And Root == Null Now, Then We Return False
        if(root == null){
            return false;
        }
        
        // Checking If target - Current root.val Is Already Present In The Set Or Not
        // If Present We Return True
        if(set.contains(target - root.val)){
            return true;
        }
        
        // If Not Present And The Root Is Not Null, We Add The Current Root Value To The HashSet
        set.add(root.val);
        
        // Calling Function For Both Left And Right
        /*
        We Use || Here And Not && Because
        We Need To Just Get One True Value And All Other False Traversals Needs To Be Overridden
        */
        return findPair(root.left, target, set) || findPair(root.right, target, set);
        
    }
    
}
