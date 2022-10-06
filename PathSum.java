
// TC: O(N) SC: O(N)
class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        
        // Base Condition
        if(root == null){
            return false;
        }
        
        // During Recursion If We Reach The Leaf Node And The Value Of TargetSum Becomes 0, Then We Return True
        if(root.left == null && root.right == null && targetSum - root.val == 0){
            return true;
        }
        
        // Calling The Function Recursiveyly For Left And Right With Value Of targetSum Reduced By The Value Of The Root
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
        
    }
}
