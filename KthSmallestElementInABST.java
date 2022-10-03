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
    
    int count = 1;
    int ans = 0;
    
    public int kthSmallest(TreeNode root, int k) {
        
        Inorder(root,k);
        return ans;
        
    }
    public void Inorder(TreeNode root,int k){
        if(root == null){
            return;
        }
        
        Inorder(root.left,k);
        
        if(count == k){
            ans = root.val;
        }
        
        count++;
        Inorder(root.right,k);
        
    }
}




class Solution {
    public int kthSmallest(TreeNode root, int k) {
        
        ArrayList<Integer> result = new ArrayList<>();
        
        inorder(root, result);
        
        return result.get(k-1);
        
    }
    
    public void inorder(TreeNode root, ArrayList<Integer> result){
        
        if(root == null){
            return;
        }
        
        inorder(root.left, result);
        result.add(root.val);
        inorder(root.right, result);
        
    }
    
}
