/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

// class Solution {
//     public List<Integer> preorder(Node root) {
//         LinkedList<Node> stack  = new LinkedList<>();
//         LinkedList<Integer> output = new LinkedList<>();
//         if(root == null){
//             return output;
//         }
        
//         stack.add(root);
//         while(!stack.isEmpty()){
//             Node node  = stack.pollLast();
//             output.add(node.val);
//             Collections.reverse(node.children);
//             for(Node child : node.children){
//                 stack.add(child);
//             }
//         }
        
//         return output;
//     }
// }



class Solution {
    public List<Integer> preorder(Node root) {
        return preOrder(root, new ArrayList<>());
    }
	
    private List<Integer> preOrder(Node root, List<Integer> list) {
        if (root == null) return list;
        
        list.add(root.val);
        for (Node node : root.children) list = preOrder(node, list);
        return list;
    }
}
