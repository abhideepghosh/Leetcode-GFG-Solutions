
// Time Complexity O(n) Space Complexity O(n)
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        
        // Storing Result In A List
        List<Integer> treeList = new LinkedList<>();
        
        // Calling In Order Function
        inorder(treeList, root);
        
        // Returning Final Result
        return treeList;
        
    }
    
    // Inorder Function
    public void inorder(List<Integer> list, TreeNode root){
        
        // In case The Root Is Null We Stop The Recursive Call
        // This Is The Base Condition
        if(root == null){
            return;
        }
        
        // We Traverse Through All The Left Nodes First
        inorder(list, root.left);
        
        // Then We Add The Values
        list.add(root.val);
        
        // And Finally We Traverse The Right Nodes Of The Tree.
        inorder(list, root.right);
        
    }
}
