/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        
        // Handling Edge Cases
        if(head == null || k == 1){
            return head;
        }
        
        // For Storing Size Of Linked List
        int size = 0;
        
        // Pointer To The Head
        ListNode traverseNode = head;
        
        // Calculating Size
        while(traverseNode != null){
            traverseNode = traverseNode.next;
            size++;
        }
        
        // For Storing The Modified Linked List
        ListNode result = new ListNode(0);
        
        // Joining The Given Linked List To The Result Linked List
        result.next = head;
        
        // Will Act As The Previous Node In Reversal
        ListNode previousNode = result;
        
        // If Size Becomes Less Than k, We Leave The Rest Of THe Linked List Just The Way It Already Is
        while(size >= k){
           
            // Let traverseNode Be The FirstNode And nextNode  Be The AheadNode
            traverseNode = previousNode.next;
            ListNode nextNode = traverseNode.next;
            
            // Reversing K Nodes
            for(int i=1; i<k; i++){
                traverseNode.next = nextNode.next;
                nextNode.next = previousNode.next;
                previousNode.next =nextNode;
                nextNode = traverseNode.next;
            }
            
            // Pointing previousNode To The Current traverseNode
            previousNode = traverseNode;
            
            // Decrementing Size
            size -= k;
            
        }
        
        // Returning The Modified List
        return result.next;
        
    }
}
