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
Runtime: 0 ms, faster than 100.00% of Java online submissions for Binary Tree Level Order Traversal.
Memory Usage: 42.3 MB, less than 95.47% of Java online submissions for Binary Tree Level Order Traversal.
*/

// Optimized Solution Using Linked List
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        
        // For Storing Result
        List<List<Integer>> result = new ArrayList<>();
        
        // Edge Cases Handled
        if(root == null){
            return result;
        }
        
        // For Processing The Data In The Tree
        LinkedList<TreeNode> queue = new LinkedList<>();
        
        // Adding The Root Node Of The Tree
        queue.add(root);
        
        // Iterating Until The Queue Is Empty
        while(!queue.isEmpty()){
            
            // For Adding List Data To The Result
            List<Integer> list = new ArrayList<>();
            
            // Taking Size Of The Linked List And Using It To Iterate For The Complete Linked List
            int count = queue.size();
            
            // Iterating Inside The Linked List
            for(int i=0; i<count; i++){
                
                // We Take The Node Out Of The LinkedList
                // Then If It Has Any Node On The Left Or Right, We Add It To The Linked List
                // Else We Simply Continue Adding The Elements To The List
                TreeNode node = queue.removeFirst();
                list.add(node.val);
                
                // Check Condition For Left
                if(node.left != null){
                    queue.add(node.left);
                }
                
                // Check Condition For Right
                if(node.right != null){
                    queue.add(node.right);
                }
                
            }
            
            // Adding List To The Result
            result.add(list);
            
        }
        
        // Returning Result
        return result;
        
    }
}
