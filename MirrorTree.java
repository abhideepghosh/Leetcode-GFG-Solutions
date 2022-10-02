/* A Binary Tree node
class Node
{
    int data;
    Node left, right;
   Node(int item)
   {
        data = item;
        left = right = null;
    }
} */

class Solution {
    // Function to convert a binary tree into its mirror tree.
    void mirror(Node root) {
        // Your code here
        
        if(root == null){
            return;
        }
        
        mirror(root.left);
        mirror(root.right);
        
        Node temp = root.right;
        root.right = root.left;
        root.left = temp;
        
    }
}
