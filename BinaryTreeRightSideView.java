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
Runtime: 1 ms, faster than 94.91% of Java online submissions for Binary Tree Right Side View.
Memory Usage: 42.4 MB, less than 76.70% of Java online submissions for Binary Tree Right Side View.
*/
// Optimised Recursive Solution TC: O(N) SC: O(N)
class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        
        // To Store The Result
        List<Integer> result = new ArrayList<>();
        
        //Calling rightView Function
        rightView(result, root, 0);
        
        //Returning Final Result
        return result;
        
    }
    
    public void rightView(List<Integer> result, TreeNode root, int depth){
        
        // Base Condtion
        if(root == null){
            return; 
        }
        
        // If The Depth Is Equal To The Size Of The Result, Then We Add The Value Of The Root In The Result List
        if(result.size() == depth){
            result.add(root.val);
        }
        
        // Calling Right Portion Of Root First
        rightView(result, root.right, depth+1);
        
        // Calling Left Portion After Right Portion Of Tree Is Already Added To The Result List
        rightView(result, root.left, depth+1);
        
    }
        
}
