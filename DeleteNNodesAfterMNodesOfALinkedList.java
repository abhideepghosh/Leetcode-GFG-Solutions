//User function Template for Java

/*
delete n nodes after m nodes
The input list will have at least one element  
Node is defined as
  class Node
  {
      int data;
      Node next;
      Node(int data)
      {
          this.data = data;
          this.next = null;
      }
  }
*/

class Solution
{
    static void linkdelete(Node head, int M, int N)
    {
        // your code here
        if(head == null && M == 0){
            return;
        }
        
        if(N == 0){
            return;
        }
        
        Node traverseNode = head;
        int skip = 1;
         
         while(traverseNode != null){
             
             if(skip == M){
                 int delete = N;
                 Node temp = traverseNode;
                 
                 while(delete > 0 && temp.next != null){
                     delete--;
                     temp = temp.next;
                 }
                 
                 skip = 0;
                 traverseNode.next = temp.next;
                 
             }
             
             traverseNode = traverseNode.next;
             skip++;
             
         }
    }
       
}
