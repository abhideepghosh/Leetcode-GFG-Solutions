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
}*/
class Tree
{
    //Function to return list containing elements of left view of binary tree.
    ArrayList<Integer> leftView(Node root)
    {
      // Your code here
      ArrayList<Integer> result = new ArrayList<>();
      
      leftSideView(result, root, 0);
      
      return result;
      
    }
    
    public void leftSideView(ArrayList<Integer> result, Node root, int depth){
        
        // Base Case
        if(root == null){
            return;
        }
        
        if(result.size() == depth){
            result.add(root.data);
        }
        
        leftSideView(result, root.left, depth+1);
        leftSideView(result, root.right, depth+1);
        
    }
    
}
