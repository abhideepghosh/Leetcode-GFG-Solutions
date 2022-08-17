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
//Brute Force Solution
class Solution {
    static ArrayList<Integer> validateTree = new ArrayList<>();
    public boolean isValidBST(TreeNode root) {
        if(root == null){
            return true;
        }
        if(root.left == null && root.right == null){
            return true;
        }
        validateTree.clear();
        inorder(root);
        for(int i : validateTree){
            System.out.println(i);
        }
        if(validateTree.size() == 1){
            return true;
        }
        for(int i=0; i<validateTree.size()-1; i++){
            if(validateTree.get(i) >= validateTree.get(i+1)){
                return false;
            }
        }
        return true;
    }
    public void inorder(TreeNode root){
        if(root == null){
            return;
        }
        inorder(root.left);
        validateTree.add(root.val);
        inorder(root.right);
    }
}
