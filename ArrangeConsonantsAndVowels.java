
/*
Structure of node class is:
class Node {
    char data;
    Node next;
    
    public Node(char data){
        this.data = data;
        next = null;
    }
}
*/
class Solution {
    
    public Node arrangeCV(Node head){
        //write code here and return the head of changed linked list
        Node traverseNode = head;
        
        Node resultA = new Node('A');
        Node resultAPointer = resultA;
        Node resultB = new Node('A');
        Node resultBPointer = resultB;
        
        while(traverseNode != null){
            
            if(traverseNode.data == 'a' || traverseNode.data == 'e' || 
            traverseNode.data == 'i' || traverseNode.data == 'o' || 
            traverseNode.data == 'u')
            {
                resultAPointer.next = new Node(traverseNode.data);
                resultAPointer = resultAPointer.next;
            }
            else
            {
                resultBPointer.next = new Node(traverseNode.data);
                resultBPointer = resultBPointer.next;
            }
            
            traverseNode = traverseNode.next;
            
        }
        
        resultB = resultB.next;
        resultAPointer.next = resultB;
        
        return resultA.next;
        
    }
}
