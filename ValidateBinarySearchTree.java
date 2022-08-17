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

//100% Faster Solution
/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Validate Binary Search Tree.
Memory Usage: 43.3 MB, less than 82.60% of Java online submissions for Validate Binary Search Tree.
*/
class Solution {
    public boolean isValidBST(TreeNode root) {
        return isvalid(root,Long.MIN_VALUE, Long.MAX_VALUE);
    }
    public boolean isvalid(TreeNode root , long min , long max){
        if(root == null) return true;
        if(root.val<=min || root.val>=max){
            return false;
        }
        boolean left = isvalid(root.left , min , root.val);
        if(left == true){
            boolean right = isvalid(root.right , root.val , max);
            return right;
        }
        return false;
    }
    
}

//Optimized Solution
class Solution {
    public boolean isValidBST(TreeNode root) {
        
        Stack<TreeNode> stack = new Stack<>();
        Integer prev = null;
        
        while(!stack.isEmpty() || root != null){
            while(root != null){
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            if(prev != null && root.val <= prev){
                return false;
            }
            prev = root.val;
            root = root.right;
        }
        return true;
    }
}

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
