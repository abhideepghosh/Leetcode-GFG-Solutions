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
 /*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Convert Sorted Array to Binary Search Tree.
Memory Usage: 42.2 MB, less than 92.50% of Java online submissions for Convert Sorted Array to Binary Search Tree.
 */
class Solution {
    
    public TreeNode sortedArrayToBST(int[] nums) {
        
        // Calling Helper Function And Returning The Output Of The Function As The Final Result
        return createTree(nums, 0, nums.length-1);
        
    }
    
    public TreeNode createTree(int[] nums, int start, int end){
        
        // Base Condition For Recursion To Stop
        if(start > end){
            return null;
        }
        
        // Using Binary Search To Find The Balanced Nodes
        int mid = start + (end - start) / 2;
        
        // Adding Value To The Nodes
        TreeNode node = new TreeNode(nums[mid]);
        
        // Filling Data In Left And Right OF The Tree
        node.left = createTree(nums, start, mid - 1);
        node.right = createTree(nums, mid + 1, end);
        
        // Returning The Tree Built
        return node;
        
    }
    
}
