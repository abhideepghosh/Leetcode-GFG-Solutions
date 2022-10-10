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
Runtime: 0 ms, faster than 100.00% of Java online submissions for Delete Node in a BST.
Memory Usage: 49.8 MB, less than 33.16% of Java online submissions for Delete Node in a BST.
*/
// TC: O(N) SC: O(N)
class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        
        if(root == null){
            return root;
        }
        
        if(root.val > key){
            root.left = deleteNode(root.left, key);
        }
        else if(root.val < key){
            root.right = deleteNode(root.right, key);
        }
        else{
            
            if(root.left == null){
                return root.right;
            }
            else if(root.right == null){
                return root.left;
            }
            
            root.val = getLastLeftRoot(root.right);
            root.right = deleteNode(root.right, root.val);
            
        }
        
        return root;
        
    }
    
    public int getLastLeftRoot(TreeNode root){
        
        while(root.left != null){
            root = root.left;
        }
        
        return root.val;
        
    }    
    
}
